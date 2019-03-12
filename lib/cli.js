#!/usr/bin/env node
"use strict";

var _mdLinks = _interopRequireDefault(require("./md-Links/md-links.js"));

var _stats = require("./stats.js");

var _moduls = require("./md-Links/utils/moduls.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const [,, ...args] = process.argv;

if (args[1] === '--validate' && args[2] === '--stats') {
  (0, _mdLinks.default)(args[0], {
    validate: true
  }).then(resp => console.log((0, _stats.estadisticas)(resp, 'validate')));
} else if (args[1] === '--stats' && args[2] === '--validate') {
  (0, _mdLinks.default)(args[0], {
    validate: true
  }).then(resp => console.log((0, _stats.estadisticas)(resp, 'validate')));
} else if (args[1] === '--validate') {
  (0, _mdLinks.default)(args[0], {
    validate: true
  }).then(resp => console.log((0, _moduls.templateDeResultado)(resp)));
} else if (args[1] === '--stats') {
  (0, _mdLinks.default)(args[0]).then(resp => console.log((0, _stats.estadisticas)(resp)));
} else {
  (0, _mdLinks.default)(args[0]).then(resp => console.log((0, _moduls.templateDeResultado)(resp)));
}