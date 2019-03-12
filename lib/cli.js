#!/usr/bin/env node
"use strict";

var _stats = require("./stats.js");

var _moduls = require("./md-Links/utils/moduls.js");

const mdLinks = require('./md-links');

const [,, ...args] = process.argv;

if (args[1] === '--validate' && args[2] === '--stats') {
  mdLinks(args[0], {
    validate: true
  }).then(resp => console.log((0, _stats.estadisticas)(resp, 'validate')));
} else if (args[1] === '--stats' && args[2] === '--validate') {
  mdLinks(args[0], {
    validate: true
  }).then(resp => console.log((0, _stats.estadisticas)(resp, 'validate')));
} else if (args[1] === '--validate') {
  mdLinks(args[0], {
    validate: true
  }).then(resp => console.log((0, _moduls.templateDeResultado)(resp)));
} else if (args[1] === '--stats') {
  mdLinks(args[0]).then(resp => console.log((0, _stats.estadisticas)(resp)));
} else if (args[0] === undefined) {
  console.log('Ingrese la ruta que desea analizar despues de md-links. \n Ejemplo: md-links ./some/example.md ');
} else {
  mdLinks(args[0]).then(resp => console.log((0, _moduls.templateDeResultado)(resp)));
}