/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-alpha.12): popover.js
 * Licensed under MIT (https://coreui.io/license)
 *
 * This component is a modified version of the Bootstrap's popover.js
 * Bootstrap (v4.3.1): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { jQuery as $ } from './util/index'
import Data from './dom/data'
import SelectorEngine from './dom/selector-engine'
import Tooltip from './tooltip'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'popover'
const VERSION = '3.0.0-alpha.12'
const DATA_KEY = 'coreui.popover'
const EVENT_KEY = `.${DATA_KEY}`
const PREFIX = window.CoreUIDefaults ? window.CoreUIDefaults.prefix ? window.CoreUIDefaults.prefix : 'c-' : 'c-'
const CLASS_PREFIX = `${PREFIX}bs-popover`
const BSCLS_PREFIX_REGEX = new RegExp(`(^|\\s)${CLASS_PREFIX}\\S+`, 'g')

const Default = {
  ...Tooltip.Default,
  placement: 'right',
  trigger: 'click',
  content: '',
  template: `<div class="${PREFIX}popover" role="tooltip">
               <div class="${PREFIX}popover-arrow"></div>
               <h3 class="${PREFIX}popover-header"></h3>
               <div class="${PREFIX}popover-body"></div>
             </div>`
}

const DefaultType = {
  ...Tooltip.DefaultType,
  content: '(string|element|function)'
}

const ClassName = {
  FADE: `${PREFIX}fade`,
  SHOW: `${PREFIX}show`
}

const Selector = {
  TITLE: `.${PREFIX}popover-header`,
  CONTENT: `.${PREFIX}popover-body`
}

const Event = {
  HIDE: `hide${EVENT_KEY}`,
  HIDDEN: `hidden${EVENT_KEY}`,
  SHOW: `show${EVENT_KEY}`,
  SHOWN: `shown${EVENT_KEY}`,
  INSERTED: `inserted${EVENT_KEY}`,
  CLICK: `click${EVENT_KEY}`,
  FOCUSIN: `focusin${EVENT_KEY}`,
  FOCUSOUT: `focusout${EVENT_KEY}`,
  MOUSEENTER: `mouseenter${EVENT_KEY}`,
  MOUSELEAVE: `mouseleave${EVENT_KEY}`
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Popover extends Tooltip {
  // Getters

  static get VERSION() {
    return VERSION
  }

  static get Default() {
    return Default
  }

  static get NAME() {
    return NAME
  }

  static get DATA_KEY() {
    return DATA_KEY
  }

  static get Event() {
    return Event
  }

  static get EVENT_KEY() {
    return EVENT_KEY
  }

  static get DefaultType() {
    return DefaultType
  }

  // Overrides

  isWithContent() {
    return this.getTitle() || this._getContent()
  }

  addAttachmentClass(attachment) {
    this.getTipElement().classList.add(`${CLASS_PREFIX}-${attachment}`)
  }

  setContent() {
    const tip = this.getTipElement()

    // we use append for html objects to maintain js events
    this.setElementContent(SelectorEngine.findOne(Selector.TITLE, tip), this.getTitle())
    let content = this._getContent()
    if (typeof content === 'function') {
      content = content.call(this.element)
    }

    this.setElementContent(SelectorEngine.findOne(Selector.CONTENT, tip), content)

    tip.classList.remove(ClassName.FADE)
    tip.classList.remove(ClassName.SHOW)
  }

  // Private

  _getContent() {
    return this.element.getAttribute('data-content') ||
      this.config.content
  }

  _cleanTipClass() {
    const tip = this.getTipElement()
    const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX)

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(token => token.trim())
        .forEach(tClass => tip.classList.remove(tClass))
    }
  }

  // Static

  static _jQueryInterface(config) {
    return this.each(function () {
      let data = Data.getData(this, DATA_KEY)
      const _config = typeof config === 'object' ? config : null

      if (!data && /dispose|hide/.test(config)) {
        return
      }

      if (!data) {
        data = new Popover(this, _config)
        Data.setData(this, DATA_KEY, data)
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config]()
      }
    })
  }

  static _getInstance(element) {
    return Data.getData(element, DATA_KEY)
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

if (typeof $ !== 'undefined') {
  const JQUERY_NO_CONFLICT = $.fn[NAME]
  $.fn[NAME] = Popover._jQueryInterface
  $.fn[NAME].Constructor = Popover
  $.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Popover._jQueryInterface
  }
}

export default Popover
