import * as React from 'react';

import Screw from '../Screw';

import './Key.scss';

export default class Key extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { identifier = 0 } = this.props;

    return (
      <div className={`Key-${identifier}`}>
        <Screw />
        <Screw />
      </div>
    );
  }
}
