// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternativeSyntax')
require('./7-mindGrenade');

sayHi('Travis');
sayHi(names.john);
sayHi(names.peter);

