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

var DEFAULT_HEIGHT = 200;
var MODIFIER = 10;

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
          colors = _this$props.colors,
          shape = _this$props.shape,
          height = _this$props.height;
      return React.createElement("div", {
        className: "Key-".concat(identifier),
        style: (colors || shape || height) && this.createStyles(),
        onMouseDown: colors && this.pressKey.bind(this),
        onMouseUp: colors && this.releaseKey.bind(this),
        onMouseLeave: colors && this.leaveKey.bind(this)
      }, React.createElement(_Screw["default"], null), React.createElement(_Screw["default"], null));
    }
  }, {
    key: "createStyles",
    value: function createStyles() {
      var colors = this.props.colors;
      var padding = 8;
      var defaultStyles = {
        // width: '50px',
        width: '100%',
        display: 'flex',
        padding: "".concat(padding, "px 0"),
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '8px'
      };
      var extraHeight = padding * 2;

      var style = _objectSpread({
        backgroundColor: colors && this.setColor(),
        boxShadow: "3px 3px ".concat(colors && this.determineElementToUse('background')),
        height: "".concat(this.setHeight() - extraHeight, "px")
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
          shape = _this$props2.shape,
          _this$props2$height = _this$props2.height,
          height = _this$props2$height === void 0 ? DEFAULT_HEIGHT : _this$props2$height;
      return shape == 'flat' ? height : this.calculateHeightBasedOnVaryingShape();
    }
  }, {
    key: "calculateHeightBasedOnVaryingShape",
    value: function calculateHeightBasedOnVaryingShape() {
      var _this$props$shape = this.props.shape,
          shape = _this$props$shape === void 0 ? 'shrinking' : _this$props$shape;

      if (shape == 'shrinking') {
        return this.calculateShrinkingHeight();
      }

      if (shape == 'growing') {
        return this.calculateGrowingHeight();
      }
    }
  }, {
    key: "calculateGrowingHeight",
    value: function calculateGrowingHeight() {
      var _this$props3 = this.props,
          _this$props3$height = _this$props3.height,
          height = _this$props3$height === void 0 ? DEFAULT_HEIGHT : _this$props3$height,
          identifier = _this$props3.identifier;
      var adjustingHeight = MODIFIER * (identifier - 1);
      return height + adjustingHeight;
    }
  }, {
    key: "calculateShrinkingHeight",
    value: function calculateShrinkingHeight() {
      var _this$props4 = this.props,
          _this$props4$height = _this$props4.height,
          height = _this$props4$height === void 0 ? DEFAULT_HEIGHT : _this$props4$height,
          identifier = _this$props4.identifier,
          numberOfKeys = _this$props4.numberOfKeys;
      var largestKey = height + MODIFIER * numberOfKeys;
      var adjustingHeight = MODIFIER * identifier;
      return largestKey - adjustingHeight;
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
      var _this$props5 = this.props,
          identifier = _this$props5.identifier,
          colors = _this$props5.colors;
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