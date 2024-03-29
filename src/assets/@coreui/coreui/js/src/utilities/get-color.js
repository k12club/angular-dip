/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v3.0.0-alpha.12): get-color.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
import getStyle from './get-style'

const getColor = (rawProperty, element = document.body) => {
  const property = `--${rawProperty}`
  const style = getStyle(property, element)
  return style ? style : rawProperty
}

export default getColor
