import * as React from 'react';

import Key from '../Key';
import playSound from '../Sound/Sound';

import './Xylophone.scss';

export default class Xylophone extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='KeysContainer'>{this.renderKeys()}</div>;
  }

  renderKeys() {
    const { numberOfKeys = 8, colors, shape, height, width } = this.props;

    const growKeys = width ? undefined : { flexGrow: 1 };

    const keys = [];
    for (let i = 1; i < numberOfKeys + 1; i++) {
      const preventExtraKeys = i >= 13;
      if (!colors && preventExtraKeys) {
        break;
      }

      keys.push(
        <div
          className='Key'
          style={growKeys}
          onClick={this.pressedKey.bind(this, i)}
          key={`Key-${i}`}
        >
          <Key
            identifier={i}
            colors={colors}
            shape={shape}
            height={height}
            width={width}
            numberOfKeys={numberOfKeys}
          />
        </div>
      );
    }

    return keys;
  }

  pressedKey(key) {
    const { pressedKey } = this.props;

    this.determinePressedNote(key, 1);
    pressedKey(key);
  }

  // Assumption: the xylophone always starts at C
  determinePressedNote(pressedKey, octave) {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const numberOfNotes = notes.length;

    if (pressedKey <= numberOfNotes) {
      playSound(notes[pressedKey - 1], octave);
    } else {
      this.determinePressedNote(pressedKey - numberOfNotes, octave + 1);
    }
  }
}
