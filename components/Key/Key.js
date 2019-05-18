import * as React from 'react';

import Screw from '../Screw';

import './Key.scss';

const DEFAULT_HEIGHT = 200;
const MODIFIER = 10;

export default class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
  }

  render() {
    const { identifier = 1, colors, shape, height, width } = this.props;

    return (
      <div
        className={`Key-${identifier}`}
        style={(colors || shape || height || width) && this.createStyles()}
        onMouseDown={this.pressKey.bind(this)}
        onMouseUp={this.releaseKey.bind(this)}
        onMouseLeave={this.leaveKey.bind(this)}
      >
        <Screw />
        <Screw />
      </div>
    );
  }

  createStyles() {
    const { colors } = this.props;

    const padding = 8;

    const defaultStyles = {
      display: 'flex',
      padding: `${padding}px 0`,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '8px'
    };

    const extraHeight = padding * 2;

    const style = {
      backgroundColor: colors && this.setColor(),
      boxShadow: `3px 3px ${colors &&
        this.determineElementToUse('background')}`,
      height: `${this.setHeight() - extraHeight}px`,
      width: `${this.setWidth()}`,
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
    const { shape, height = DEFAULT_HEIGHT } = this.props;

    return shape == 'flat' ? height : this.calculateHeightBasedOnVaryingShape();
  }

  setWidth() {
    const { width } = this.props;

    return width ? `${width}px` : '100%';
  }

  calculateHeightBasedOnVaryingShape() {
    const { shape = 'shrinking' } = this.props;

    if (shape == 'shrinking') {
      return this.calculateShrinkingHeight();
    }

    if (shape == 'growing') {
      return this.calculateGrowingHeight();
    }
  }

  calculateGrowingHeight() {
    const { height = DEFAULT_HEIGHT, identifier } = this.props;

    const adjustingHeight = MODIFIER * (identifier - 1);
    return height + adjustingHeight;
  }

  calculateShrinkingHeight() {
    const { height = DEFAULT_HEIGHT, identifier, numberOfKeys } = this.props;

    const largestKey = height + MODIFIER * numberOfKeys;
    const adjustingHeight = MODIFIER * identifier;

    return largestKey - adjustingHeight;
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
