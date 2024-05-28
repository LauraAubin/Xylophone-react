# Xylophone
> A React based xylophone ready to use out of the box

<img src="https://github.com/LauraAubin/Xylophone-react/raw/master/Screenshot/Xylophone%20-%2012%20keys.png" />

## Play!

🎶 https://lauraaubin.github.io/Xylophone-react/ 🎶 

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

<br>

**numberOfKeys**

- 12 colors have been set by default. In order to increase the `numberOfKeys` over 12, you need to create your own custom color scheme.

**colors**

- `colors` will use the last element to paint all *remaining* keys. For example, the following will paint the first key pink, and all remaining keys teal:

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

**pressedKey**:

- `pressedKey` allows you to pass in a function which can be used to determine which key was pressed most recently:

```js
const handleKeyPress = (number) => {
  ...
}

...

<Xylophone
  pressedKey={handleKeyPress}
/>
```

## Develop

Changes should *only* be made within the `./components` folder. The ES5 folder is the *compiled* equivalent. ES5 compiles Sass to CSS:

```
yarn compile-files
```

Install package locally via:

```
npm install path/to/this/folder
```

## Feedback

Feel free to open an issue with feedback or a feature request. All are welcome 🤗!
