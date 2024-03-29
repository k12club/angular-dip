/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v3.0.0-alpha.14): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
import getCssCustomProperties from './get-css-custom-properties';
var minIEVersion = 10;

var isIE1x = function isIE1x() {
  return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
};

var isCustomProperty = function isCustomProperty(property) {
  return property.match(/^--.*/i);
};

var getStyle = function getStyle(property, element) {
  if (element === void 0) {
    element = document.body;
  }

  var style;

  if (isCustomProperty(property) && isIE1x()) {
    var cssCustomProperties = getCssCustomProperties();
    style = cssCustomProperties[property];
  } else {
    style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
  }

  return style;
};

export default getStyle;
//# sourceMappingURL=get-style.js.map