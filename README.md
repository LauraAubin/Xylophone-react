# Xylophone
> A React based xylophone ready to use out of the box

<img src="https://github.com/LauraAubin/Xylophone-react/blob/master/Screenshot/Xylophone%20-%2012%20keys.png" />

## Install

Your app must be using React and ReactDom.

```
$ npm install xylophone-react
```

## Usage

```js
import Xylophone from 'xylophone-react';

return <Xylophone />;
```

## Props

| Prop        | Default   | Values |  Type  | Description |
| ------------ |:---------:| -----:| -----:|  -----:|
| `numberOfKeys`  |    8   | 1 - ∞ | number | The number of keys |
| `colors`  |    8   | No limits | {color?: string, colorPressed?: string, background?: string}[] | The color scheme of all keys |
| `shape`  |   shrinking    | `shrinking`, `growing`, `flat` | string | The shape of the whole xylophone |
| `height`  |   200    | 1 - ∞ | number | The height of the smallest key (px) |
| `width`  |   Stretch to fit container   | 1 - ∞ | number | The width of all keys (px) |
 `startingOctave`  |  2  | 1 - ∞ | number | The starting octave of the first key |
  `pressedKey`  |  None  | None | (number) => void | Returns which key was pressed most recently |


### Props in detail

**numberOfKeys:**

12 colors have been set by default. In order to increase the `numberOfKeys` over 12, you need to create your own custom color scheme.

**colors:**

`colors` will use the last element to paint all remaining keys. For example,

```js
colors={[
  {
    color: 'pink',
    colorPressed: 'grey',
    background: 'salmon'
  },
  {
    color: 'teal'
  }
]}
```

only the first key will be pink, and the remaining will be teal.

This allows you to avoid duplication for colors that are the same for each key.

**pressedKey**:

`pressedKey` allows you to pass in a function which can be used to determine which key was pressed most recently.

```js
constructor(props) {
  super(props);
  this.state = { pressedKey: 0 };
  this.setPressedKey = this.setPressedKey.bind(this);
}

...

<Xylophone
  pressedKey={this.setPressedKey}
/>

...

setPressedKey(key) {
  this.setState({pressedKey: key})
}
```

## Develop

All changes should be made within the `./components` folder.

After making changes, run `yarn build`. This command will compile the files to ES5, convert Sass to CSS, and update any Sass imports.

To test that your changes worked, install this project into a React app using `npm install path/to/this/folder` and render the `<Xylophone />` component.

## Feedback

Feel free to open an issue with feedback or a feature request. All are welcome 🤗!
