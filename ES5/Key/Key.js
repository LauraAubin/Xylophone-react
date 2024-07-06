"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Key;
var _react = _interopRequireWildcard(require("react"));
var _Screw = _interopRequireDefault(require("../Screw/Screw"));
require("./Key.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DEFAULT_HEIGHT = 200;
const MODIFIER = 10;
function Key(_ref) {
  let {
    identifier = 1,
    shape = 'shrinking',
    numberOfKeys,
    colors,
    height = DEFAULT_HEIGHT,
    width
  } = _ref;
  const [isPressed, setPressed] = (0, _react.useState)(false);
  const createStyles = () => {
    const padding = 8;
    const defaultStyles = {
      display: 'flex',
      padding: "".concat(padding, "px 0"),
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '8px'
    };
    const extraHeight = padding * 2;
    const setWidth = width ? "".concat(width, "px") : '100%';
    const setHeight = "".concat((shape == 'flat' ? height : calculateHeightBasedOnVaryingShape()) - extraHeight, "px");
    return {
      backgroundColor: colors && isPressed ? determineElementToUse('colorPressed') : determineElementToUse('color'),
      boxShadow: "3px 3px ".concat(colors && determineElementToUse('background')),
      height: setHeight,
      width: setWidth,
      ...defaultStyles
    };
  };
  const calculateHeightBasedOnVaryingShape = () => {
    if (shape == 'shrinking') {
      const largestKey = height + MODIFIER * numberOfKeys;
      const adjustingHeight = MODIFIER * identifier;
      return largestKey - adjustingHeight;
    }
    if (shape == 'growing') {
      const adjustingHeight = MODIFIER * (identifier - 1);
      return height + adjustingHeight;
    }
  };
  const determineElementToUse = property => {
    const propertyExistsOnElement = currentIdentifierElement() && currentIdentifierElement().hasOwnProperty(property);
    if (propertyExistsOnElement) {
      return currentIdentifierElement()[property];
    }
    return mostRecentProperty(colors.length - 1, property);
  };
  const currentIdentifierElement = () => {
    return colors[identifier - 1];
  };
  const mostRecentProperty = (iterator, property) => {
    if (colors[iterator].hasOwnProperty(property)) {
      return colors[iterator][property];
    }
    return mostRecentProperty(iterator - 1, property);
  };
  const leaveKey = () => {
    isPressed && setPressed(false);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Key-".concat(identifier),
    style: (colors || shape || height || width) && createStyles(),
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: leaveKey
  }, /*#__PURE__*/_react.default.createElement(_Screw.default, null), /*#__PURE__*/_react.default.createElement(_Screw.default, null));
}