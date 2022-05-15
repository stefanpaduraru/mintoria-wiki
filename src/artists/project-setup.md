# Project Setup

Each project must meet certain criteria to get published on the Mintoria platform, as follows:

## Deterministic

This means given the same entropy input (or hash string), the project will always generate the same output.

## Dimension Agnostic

This means the output must always be the same, regardless of the dimension of the browser it is rendered in.

## Consistency Over Browsers

Browsers sometimes render certain things differently. This is especially true for certain features of P5JS. Make sure to test your project in all major browsers: Chrome, Firefox, Safari, Brave, Opera, Edge.

## Dependencies

Each project must make use of a max of one dependency.<br />
Currently Mintoria supports only vanilla JS and [P5JS@1.4.1](https://p5js.org), but more libraries will be made available soon.

## Copyright and Attribution

In case your project contains bits and pieces of code written by other people, please make sure to consult the license under which it has been publishes, as well as to include this information in the project description.

## Deriving Randomness

In order to derive randomness in your project, and produce unique and deterministic outputs, when rendering your content, Mintoria will inject a token data object in the top level context, which can be safely read by the project code. <br />
This object will contain a hash - which is a unique 64 char seed, and a token id - which is a number (ie: if your project id is 14 and the max iterations is 555, the token id could go from 1,400,000 to 1,400,554)<br /><br />
When testing locally, you can generate a random hash using the following code:

```js
const getRandomHex = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

const tokenId = parseInt(
  `${Math.floor(Math.random() * (199999 - 100000) + 100000)}`,
  10
);

const tokenData = { hash: `0x${getRandomHex(64)}`, tokenId };
```

<br />
Using a Xorshift pseudo-random generator to derive randomness in a project.<br />
There a several types of algorythms than can generate pseudo-random numbers based on a seed string.
Here's one of them:

```js
class Random {
  constructor(seed) {
    this.seed = seed;
  }
  dec() {
    this.seed ^= this.seed << 13;
    this.seed ^= this.seed >> 17;
    this.seed ^= this.seed << 5;
    return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000;
  }
  num(a, b) {
    return a + (b - a) * this.dec();
  }
  int(a, b) {
    return Math.floor(this.num(a, b + 1));
  }
}

// usage
const seed = parseInt(tokenData.hash.slice(50, 66), 16);
const Rand = new Random(seed);
console.log(Rand.int(0, 10));
// running this code with the same hash will always generate the same int between 0 and 10
```

<b>Can I use Math.random()?</b><br />
The short answer: NO. Each parameter for a token must always be generated from the unique seed associated to the token.

## Traits or Features

The traits (or features) of a token (or iteration) must be exposed in the top context of your script through a function named `getFeatures`. <br />
This function will always take the tokenData object asa parameter and will output the same results for the same object.<br />
Here's a short example of a possible implementation for a project that has only 2 features: a palette name and a fill mode.

```js
function getFeatures(tokenData) {
  const fillModes = ["No fill", "Intermediate", "Full"];
  const palettes = [...];
  const paletteNames = [...];

  const seed = parseInt(tokenData.hash.slice(50, 66), 16);
  const Rand = new Random(seed);

  const paletteId = Rand.int(0, palettes.length - 1);
  const fillMode = Rand.int(0, 2);

  return {
    palette: paletteNames[paletteId],
    fillMode: fillModes[fillMode],
  };
}
```
