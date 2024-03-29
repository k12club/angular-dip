/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v3.0.0-alpha.14): deep-objects-merge.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
var deepObjectsMerge = function deepObjectsMerge(target, source) {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (var _i = 0, _Object$keys = Object.keys(source); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (source[key] instanceof Object) {
      Object.assign(source[key], deepObjectsMerge(target[key], source[key]));
    }
  } // Join `target` and modified `source`


  Object.assign(target || {}, source);
  return target;
};

export default deepObjectsMerge;
//# sourceMappingURL=deep-objects-merge.js.map