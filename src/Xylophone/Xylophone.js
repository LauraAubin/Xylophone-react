import React from 'react';

import Key from '../Key/Key';
import playSound from '../Sound/Sound';

import './Xylophone.scss';

const MAX_KEYS = 13;

export default function Xylophone({
  keyCount = 12,
  startingOctave = 2,
  colors = DEFAULT_COLORS,
  shape = 'shrinking',
  height = 200,
  width,
  pressedKey,
}) {
  const handleKeyPress = (key) => {
    const octave = startingOctave > 0 ? startingOctave : 1;

    determinePressedNote(key, octave);
    pressedKey && pressedKey(key);
  };

  // Assumption: the xylophone always starts at C
  const determinePressedNote = (key, octave) => {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const numberOfNotes = notes.length;

    if (key <= numberOfNotes) {
      playSound(notes[key - 1], octave);
    } else {
      determinePressedNote(key - numberOfNotes, octave + 1);
    }
  };

  const keys = [];
  for (let key = 1; key < keyCount + 1; key++) {
    if (!colors || key >= MAX_KEYS) {
      break;
    }

    keys.push(
      <div
        className="Key"
        style={!width ? {flexGrow: 1} : undefined}
        onMouseDown={() => handleKeyPress(key)}
        key={key}
      >
        <Key
          identifier={key}
          colors={colors}
          shape={shape}
          height={height}
          width={width}
          numberOfKeys={keyCount}
        />
      </div>
    );
  }

  return <div className="KeysContainer">{keys}</div>;
}

const DEFAULT_COLORS = [
  {
    color: "purple-purple",
    colorPressed: "dark",
    background: "darker",
  },
  {
    color: "lavender-lavender",
    colorPressed: "dark",
    background: "darker",
  },
  {
    color: "blue-blue",
    colorPressed: "dark",
    background: "darker",
  },
  {
    color: "sky-sky",
    colorPressed: "dark",
    background: "darker",
  },
  {
    color: "teal-teal",
    colorPressed: "dark",
    background: "darker",
  },
  {
    color: "green-green",
    colorPressed: "dark",
    background: "darker",
  },
  {
    color: "slime-slime",
    colorPressed: "dark",
    background: "darker",
  },
  {
    color: "yellow-yellow",
    colorPressed: "dark",
    background: "darker",
  },
  {
    color: "mustard-mustard",
    colorPressed: "dark",
    background: "darker",
  },
  {
    color: "orange-orange",
    colorPressed: "dark",
    background: "darker",
  },
  {
    color: "pink-pink",
    colorPressed: "dark",
    background: "darker",
  },
  {
    color: "red-red",
    colorPressed: "dark",
    background: "darker",
  }
]