"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = playSound;
var _frequencies = _interopRequireDefault(require("./frequencies"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*
Xylophone sounds created using the Web Audio API adapted from
Greg Hovanesyan's creation on Codepen: https://codepen.io/gregh/pen/RKVNgB
*/
var context = new (window.AudioContext || window.webkitAudioContext)();
var Sound = /*#__PURE__*/function () {
  function Sound(context) {
    _classCallCheck(this, Sound);
    this.context = context;
  }
  return _createClass(Sound, [{
    key: "setup",
    value: function setup() {
      this.oscillator = this.context.createOscillator();
      this.gainNode = this.context.createGain();
      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.context.destination);
      this.oscillator.type = 'sine';
    }
  }, {
    key: "play",
    value: function play(value) {
      this.setup();
      this.oscillator.frequency.value = value;
      this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
      this.gainNode.gain.linearRampToValueAtTime(0.2, this.context.currentTime + 0.01);
      this.oscillator.start(this.context.currentTime);
      this.stop(this.context.currentTime);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 1);
      this.oscillator.stop(this.context.currentTime + 1);
    }
  }]);
}();
function playSound(note, octave) {
  var sound = new Sound(context);

  // Example:
  // ((110 * 2) * 2 * 2)
  // 2 * 2 * 2 = 2^3 = 8
  // Therefore 110 * 8
  var octaveInterval = Math.pow(2, octave);
  var frequency = _frequencies["default"][note] * octaveInterval;
  sound.play(frequency);
  sound.stop();
}