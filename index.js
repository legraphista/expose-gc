var gc = require('./function');

if (typeof global.gc !== 'function') {
  global.gc = gc;
}

module.exports = gc;
