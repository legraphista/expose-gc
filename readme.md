# Expose GC at runtime!
_Have your cake and eat it too_

If for some reason you don't have access to how node is started or you haven't bothered with setting v8 flags, this module exposes the real `gc` for you.

## Install
`npm i expose-gc`

## I want my GC to be global!
```js
require('expose-gc');

global.gc();
```

## I just want a function, no global please!
```
const gc = require('expose-gc/function');

gc();
```
