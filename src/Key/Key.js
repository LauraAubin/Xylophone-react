import React, {useState} from 'react';

import Screw from '../Screw/Screw';

import './Key.scss';

const MODIFIER = 10;

export default function Key({
  identifier = 1,
  shape,
  numberOfKeys,
  colors,
  height,
  width,
}) {
  const [isPressed, setPressed] = useState(false);

  const createStyles = () => {
    const padding = 8;

    const defaultStyles = {
      display: 'flex',
      padding: `${padding}px 0`,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '8px',
    };

    const extraHeight = padding * 2;

    const setWidth = width ? `${width}px` : '100%';
    const setHeight = `${
      (shape == 'flat' ? height : calculateHeightBasedOnVaryingShape()) -
      extraHeight
    }px`;

    return {
      backgroundColor:
        colors && isPressed
          ? determineElementToUse('colorPressed')
          : determineElementToUse('color'),
      boxShadow: `3px 3px ${colors && determineElementToUse('background')}`,
      height: setHeight,
      width: setWidth,
      ...defaultStyles,
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

  const determineElementToUse = (property) => {
    const propertyExistsOnElement =
      currentIdentifierElement() &&
      currentIdentifierElement().hasOwnProperty(property);

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

  return (
    <div
      className={`Key-${identifier}`}
      style={(colors || shape || height || width) && createStyles()}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={leaveKey}
    >
      <Screw />
      <Screw />
    </div>
  );
}
