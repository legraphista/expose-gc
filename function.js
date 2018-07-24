var v8 = require("v8");
var vm = require('vm');

v8.setFlagsFromString('--expose_gc');
var gc = vm.runInNewContext('gc');

module.exports = gc;
