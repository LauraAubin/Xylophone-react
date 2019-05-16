"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = playSound;

var _frequencies = _interopRequireDefault(require("./frequencies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var context = new (window.AudioContext || window.webkitAudioContext)();

var Sound =
/*#__PURE__*/
function () {
  function Sound(context) {
    _classCallCheck(this, Sound);

    this.context = context;
  }

  _createClass(Sound, [{
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
      this.gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.01);
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

  return Sound;
}();

function playSound(note) {
  var octave = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var sound = new Sound(context);
  var frequency = _frequencies["default"][note] * octave;
  sound.play(frequency);
  sound.stop();
}