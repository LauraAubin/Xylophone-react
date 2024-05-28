"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Xylophone;
var _react = _interopRequireDefault(require("react"));
var _Key = _interopRequireDefault(require("../Key/Key"));
var _Sound = _interopRequireDefault(require("../Sound/Sound"));
require("./Xylophone.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MAX_KEYS = 13;
function Xylophone(_ref) {
  var _ref$keyCount = _ref.keyCount,
    keyCount = _ref$keyCount === void 0 ? 8 : _ref$keyCount,
    _ref$startingOctave = _ref.startingOctave,
    startingOctave = _ref$startingOctave === void 0 ? 2 : _ref$startingOctave,
    colors = _ref.colors,
    shape = _ref.shape,
    height = _ref.height,
    width = _ref.width,
    pressedKey = _ref.pressedKey;
  var handleKeyPress = function handleKeyPress(key) {
    var octave = startingOctave > 0 ? startingOctave : 1;
    determinePressedNote(key, octave);
    pressedKey && pressedKey(key);
  };

  // Assumption: the xylophone always starts at C
  var determinePressedNote = function determinePressedNote(key, octave) {
    var notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    var numberOfNotes = notes.length;
    if (key <= numberOfNotes) {
      (0, _Sound["default"])(notes[key - 1], octave);
    } else {
      determinePressedNote(key - numberOfNotes, octave + 1);
    }
  };
  var keys = [];
  var _loop = function _loop(key) {
    if (!colors && key >= MAX_KEYS) {
      return 1; // break
    }
    keys.push( /*#__PURE__*/_react["default"].createElement("div", {
      className: "Key",
      style: !width ? {
        flexGrow: 1
      } : undefined,
      onMouseDown: function onMouseDown() {
        return handleKeyPress(key);
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_Key["default"], {
      identifier: key,
      colors: colors,
      shape: shape,
      height: height,
      width: width,
      numberOfKeys: keyCount
    })));
  };
  for (var key = 1; key < keyCount + 1; key++) {
    if (_loop(key)) break;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "KeysContainer"
  }, keys);
}