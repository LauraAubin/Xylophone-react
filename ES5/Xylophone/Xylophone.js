"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Key = _interopRequireDefault(require("../Key"));

require("./Xylophone.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Xylophone =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Xylophone, _React$Component);

  function Xylophone(props) {
    _classCallCheck(this, Xylophone);

    return _possibleConstructorReturn(this, _getPrototypeOf(Xylophone).call(this, props));
  }

  _createClass(Xylophone, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "KeysContainer"
      }, this.renderKeys());
    }
  }, {
    key: "renderKeys",
    value: function renderKeys() {
      var _this$props = this.props,
          _this$props$numberOfK = _this$props.numberOfKeys,
          numberOfKeys = _this$props$numberOfK === void 0 ? 8 : _this$props$numberOfK,
          colors = _this$props.colors,
          shape = _this$props.shape,
          height = _this$props.height,
          width = _this$props.width;
      var growKeys = width ? undefined : {
        flexGrow: 1
      };
      var keys = [];

      for (var i = 1; i < numberOfKeys + 1; i++) {
        var preventExtraKeys = i >= 13;

        if (!colors && preventExtraKeys) {
          break;
        }

        keys.push(React.createElement("div", {
          className: "Key",
          style: growKeys,
          key: "Key-".concat(i)
        }, React.createElement(_Key["default"], {
          identifier: i,
          colors: colors,
          shape: shape,
          height: height,
          width: width,
          numberOfKeys: numberOfKeys
        })));
      }

      return keys;
    }
  }]);

  return Xylophone;
}(React.Component);

exports["default"] = Xylophone;