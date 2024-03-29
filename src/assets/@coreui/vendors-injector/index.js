#!/usr/bin/env node

'use strict';

const fs = require('fs-extra')
const path = require('path')
const { basename } = path
const { dirname } = path
const { resolve } = path
const extension = path.extname
const jsdom = require('jsdom')
const { JSDOM } = jsdom;
const beautify   = require('js-beautify').html
const jsbOptions = {
  indent_size: 2,
  indent_inner_html: true,
  unformatted: [''],
  content_unformatted: ['textarea'],
  extra_liners: ['']
}
const selectors = '[href^="node_modules"],[src^="node_modules"]'
const dist = 'dist'

const getVendorName = url => Boolean(url.indexOf('@') >= 0) ? `${url.split('/')[1]}/${url.split('/')[2]}` : `${url.split('/')[1]}`

const updateVendorUrl = vendor => {
  let url
  if (vendor.src) {
    url = vendor.src
  }
  if (vendor.href) {
    url = vendor.href
  }
  const vendorName = getVendorName(url)
  const filetype = extension(url).replace('.', '')
  const newUrl = `vendors/${vendorName}/${filetype}/${basename(url)}`

  if (vendor.src) {
    vendor.src = newUrl
  }
  if (vendor.href) {
    vendor.href = newUrl
  }

  return { oldUrl: url, newUrl }
}

const getVendors = data => {
  let dom
  let vendors
  const fullHtmlDocument = data.includes('<html') && data.includes('</html>')
  // check if full html file
  if (fullHtmlDocument) {
    dom = new jsdom.JSDOM(data)
    vendors = dom.window.document.querySelectorAll(selectors)
  } else {
    dom = JSDOM.fragment(`<dom>${data}</dom>`)
    vendors = dom.querySelectorAll(selectors)
  }

  let files = []
  Array.from(vendors).map(vendor => {
    const vendorUrls = updateVendorUrl(vendor)
    files.push(vendorUrls)

    // Check if CSS file has assets
    if (extension(vendorUrls.oldUrl) === '.css') {
      const assets = fs.readFileSync(resolve(vendorUrls.oldUrl), 'ascii').toString().match(/(?:url)\((.*?)\)/ig)

      if (assets) {
        assets.forEach(asset => {
          const assetPath = asset.match(/(?:url)\((.*?)\)/)[1]
          if (assetPath !== undefined) {
            const url = assetPath.replace(/\?.*|#.*/, '').replace(/\'|\"/, '')
            const oldUrl = resolve(dirname(vendorUrls.oldUrl), url)
            const newUrl = resolve(dist, dirname(vendorUrls.newUrl), url)

            files.push({ oldUrl, newUrl })
          }
        })
      }
    }
  })
  const html = fullHtmlDocument ? beautify(dom.serialize(), jsbOptions) : dom.firstChild.innerHTML
  return {files, html}
}

const injectVendors = data => {
  getVendors(data).files.forEach(url => {
    try {
      fs.copySync(resolve(url.oldUrl), resolve(dist, url.newUrl))
    } catch (err) {
      console.error(err)
    }
  })

  return getVendors(data).html
}

const toFile = file => {
  fs.readFile(file, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      throw (err)
    }

    const html = injectVendors(data)

    fs.writeFile(file, html, err => {
      if (err) {
        throw (err)
      }
    })
  })
}

module.exports = injectVendors
module.exports.toFile = toFile
