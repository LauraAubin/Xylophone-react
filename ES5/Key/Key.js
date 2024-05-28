"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Key;
var _react = _interopRequireWildcard(require("react"));
var _Screw = _interopRequireDefault(require("../Screw/Screw"));
require("./Key.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DEFAULT_HEIGHT = 200;
var MODIFIER = 10;
function Key(_ref) {
  var _ref$identifier = _ref.identifier,
    identifier = _ref$identifier === void 0 ? 1 : _ref$identifier,
    _ref$shape = _ref.shape,
    shape = _ref$shape === void 0 ? 'shrinking' : _ref$shape,
    numberOfKeys = _ref.numberOfKeys,
    colors = _ref.colors,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? DEFAULT_HEIGHT : _ref$height,
    width = _ref.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPressed = _useState2[0],
    setPressed = _useState2[1];
  var createStyles = function createStyles() {
    var padding = 8;
    var defaultStyles = {
      display: 'flex',
      padding: "".concat(padding, "px 0"),
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '8px'
    };
    var extraHeight = padding * 2;
    var setWidth = width ? "".concat(width, "px") : '100%';
    var setHeight = "".concat((shape == 'flat' ? height : calculateHeightBasedOnVaryingShape()) - extraHeight, "px");
    return _objectSpread({
      backgroundColor: colors && isPressed ? determineElementToUse('colorPressed') : determineElementToUse('color'),
      boxShadow: "3px 3px ".concat(colors && determineElementToUse('background')),
      height: setHeight,
      width: setWidth
    }, defaultStyles);
  };
  var calculateHeightBasedOnVaryingShape = function calculateHeightBasedOnVaryingShape() {
    if (shape == 'shrinking') {
      var largestKey = height + MODIFIER * numberOfKeys;
      var adjustingHeight = MODIFIER * identifier;
      return largestKey - adjustingHeight;
    }
    if (shape == 'growing') {
      var _adjustingHeight = MODIFIER * (identifier - 1);
      return height + _adjustingHeight;
    }
  };
  var determineElementToUse = function determineElementToUse(property) {
    var propertyExistsOnElement = currentIdentifierElement() && currentIdentifierElement().hasOwnProperty(property);
    if (propertyExistsOnElement) {
      return currentIdentifierElement()[property];
    }
    return mostRecentProperty(colors.length - 1, property);
  };
  var currentIdentifierElement = function currentIdentifierElement() {
    return colors[identifier - 1];
  };
  var mostRecentProperty = function mostRecentProperty(iterator, property) {
    if (colors[iterator].hasOwnProperty(property)) {
      return colors[iterator][property];
    }
    return mostRecentProperty(iterator - 1, property);
  };
  var leaveKey = function leaveKey() {
    isPressed && setPressed(false);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "Key-".concat(identifier),
    style: (colors || shape || height || width) && createStyles(),
    onMouseDown: function onMouseDown() {
      return setPressed(true);
    },
    onMouseUp: function onMouseUp() {
      return setPressed(false);
    },
    onMouseLeave: leaveKey
  }, /*#__PURE__*/_react["default"].createElement(_Screw["default"], null), /*#__PURE__*/_react["default"].createElement(_Screw["default"], null));
}