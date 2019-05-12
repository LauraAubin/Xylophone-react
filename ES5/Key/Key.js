"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Screw = _interopRequireDefault(require("../Screw"));

require("./Key.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Key =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Key, _React$Component);

  function Key(props) {
    var _this;

    _classCallCheck(this, Key);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Key).call(this, props));
    _this.state = {
      pressed: false
    };
    return _this;
  }

  _createClass(Key, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$identifie = _this$props.identifier,
          identifier = _this$props$identifie === void 0 ? 1 : _this$props$identifie,
          colors = _this$props.colors;
      return React.createElement("div", {
        className: "Key-".concat(identifier),
        style: colors && this.createStyles(),
        onMouseDown: colors && this.pressKey.bind(this),
        onMouseUp: colors && this.releaseKey.bind(this),
        onMouseLeave: colors && this.leaveKey.bind(this)
      }, React.createElement(_Screw["default"], null), React.createElement(_Screw["default"], null));
    }
  }, {
    key: "createStyles",
    value: function createStyles() {
      var defaultStyles = {
        width: '50px',
        display: 'flex',
        padding: '8px 0',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '8px'
      };

      var style = _objectSpread({
        backgroundColor: this.setColor(),
        boxShadow: "3px 3px ".concat(this.determineElementToUse('background')),
        height: "".concat(this.setHeight(), "px")
      }, defaultStyles);

      return style;
    }
  }, {
    key: "setColor",
    value: function setColor() {
      var pressed = this.state.pressed;
      return pressed ? this.determineElementToUse('colorPressed') : this.determineElementToUse('color');
    }
  }, {
    key: "setHeight",
    value: function setHeight() {
      var _this$props2 = this.props,
          numberOfKeys = _this$props2.numberOfKeys,
          identifier = _this$props2.identifier;

      if (numberOfKeys >= 13) {
        var decreasingValue = 10;
        var buffer = 100;
        var largestKey = numberOfKeys * decreasingValue;
        return largestKey - decreasingValue * identifier + buffer;
      } else {
        // If we have a small amount of keys, we should make sure that the xylophone isn't small itself
        return 250 - identifier * 10;
      }
    }
  }, {
    key: "determineElementToUse",
    value: function determineElementToUse(property) {
      var colors = this.props.colors;
      var propertyExistsOnElement = this.currentIdentifierElement() && this.currentIdentifierElement().hasOwnProperty(property);

      if (propertyExistsOnElement) {
        return this.currentIdentifierElement()[property];
      }

      return this.mostRecentProperty(colors.length - 1, property);
    }
  }, {
    key: "currentIdentifierElement",
    value: function currentIdentifierElement() {
      var _this$props3 = this.props,
          identifier = _this$props3.identifier,
          colors = _this$props3.colors;
      return colors[identifier - 1];
    }
  }, {
    key: "mostRecentProperty",
    value: function mostRecentProperty(iterator, property) {
      var colors = this.props.colors;

      if (colors[iterator].hasOwnProperty(property)) {
        return colors[iterator][property];
      }

      return this.mostRecentProperty(iterator - 1, property);
    }
  }, {
    key: "pressKey",
    value: function pressKey() {
      this.setState({
        pressed: true
      });
    }
  }, {
    key: "releaseKey",
    value: function releaseKey() {
      this.setState({
        pressed: false
      });
    }
  }, {
    key: "leaveKey",
    value: function leaveKey() {
      var pressed = this.state.pressed;
      pressed && this.setState({
        pressed: false
      });
    }
  }]);

  return Key;
}(React.Component);

exports["default"] = Key;