/*
Xylophone sounds created using the Web Audio API adapted from
Greg Hovanesyan's creation on Codepen: https://codepen.io/gregh/pen/RKVNgB
*/

import scale from './frequencies';

const context = new (window.AudioContext || window.webkitAudioContext)();

class Sound {
  constructor(context) {
    this.context = context;
  }

  setup() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.oscillator.type = 'sine';
  }

  play(value) {
    this.setup();

    this.oscillator.frequency.value = value;
    this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
    this.gainNode.gain.linearRampToValueAtTime(
      0.2,
      this.context.currentTime + 0.01
    );

    this.oscillator.start(this.context.currentTime);
    this.stop(this.context.currentTime);
  }

  stop() {
    this.gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      this.context.currentTime + 1
    );
    this.oscillator.stop(this.context.currentTime + 1);
  }
}

export default function playSound(note, octave) {
  const sound = new Sound(context);

  // Example:
  // ((110 * 2) * 2 * 2)
  // 2 * 2 * 2 = 2^3 = 8
  // Therefore 110 * 8
  const octaveInterval = Math.pow(2, octave);
  const frequency = scale[note] * octaveInterval;

  sound.play(frequency);
  sound.stop();
}
