import * as React from 'react';

import Screw from '../Screw';

import './Key.scss';

export default class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
  }

  render() {
    const { identifier = 1, colors } = this.props;

    return (
      <div
        className={`Key-${identifier}`}
        style={colors && this.createStyles()}
        onMouseDown={colors && this.pressKey.bind(this)}
        onMouseUp={colors && this.releaseKey.bind(this)}
        onMouseLeave={colors && this.leaveKey.bind(this)}
      >
        <Screw />
        <Screw />
      </div>
    );
  }

  createStyles() {
    const defaultStyles = {
      width: '50px',
      display: 'flex',
      padding: '8px 0',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '8px'
    };

    const style = {
      backgroundColor: this.setColor(),
      boxShadow: `3px 3px ${this.determineElementToUse('background')}`,
      height: `${this.setHeight()}px`,
      ...defaultStyles
    };

    return style;
  }

  setColor() {
    const { pressed } = this.state;

    return pressed
      ? this.determineElementToUse('colorPressed')
      : this.determineElementToUse('color');
  }

  setHeight() {
    const { numberOfKeys, identifier } = this.props;

    if (numberOfKeys >= 13) {
      const decreasingValue = 10;
      const buffer = 100;

      const largestKey = numberOfKeys * decreasingValue;
      return largestKey - decreasingValue * identifier + buffer;
    } else {
      // If we have a small amount of keys, we should make sure that the xylophone isn't small itself
      return 250 - (identifier * 10);
    }
  }

  determineElementToUse(property) {
    const { colors } = this.props;

    const propertyExistsOnElement =
      this.currentIdentifierElement() &&
      this.currentIdentifierElement().hasOwnProperty(property);

    if (propertyExistsOnElement) {
      return this.currentIdentifierElement()[property];
    }

    return this.mostRecentProperty(colors.length - 1, property);
  }

  currentIdentifierElement() {
    const { identifier, colors } = this.props;

    return colors[identifier - 1];
  }

  mostRecentProperty(iterator, property) {
    const { colors } = this.props;

    if (colors[iterator].hasOwnProperty(property)) {
      return colors[iterator][property];
    }

    return this.mostRecentProperty(iterator - 1, property);
  }

  pressKey() {
    this.setState({ pressed: true });
  }

  releaseKey() {
    this.setState({ pressed: false });
  }

  leaveKey() {
    const { pressed } = this.state;

    pressed && this.setState({ pressed: false });
  }
}
