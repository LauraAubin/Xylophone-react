import * as React from 'react';

import './Xylophone.scss';

export default class Xylophone extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='KeysContainer'>{this.renderKeys()}</div>;
  }

  renderKeys() {
    const { numberOfKeys = 8 } = this.props;

    const keys = [];
    for (let i = 1; i < numberOfKeys + 1; i++) {
      keys.push(
        <div className='Key' key={`Key-${i}`}>
          <div
            className='SeparateKeys'
            // onClick={this.pressedKey(i)}
          >
            {i}
            {/* <Key identifier={i} key={i} /> */}
          </div>
        </div>
      );
    }

    return keys;
  }
}