#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cli = void 0;

var _stats = require("./stats.js");

var _moduls = require("./md-links/moduls.js");

const mdLinks = require('./md-links');

const [,, ...args1] = process.argv;

const cli = args => new Promise(resolve => {
  if (args[1] === '--validate' && args[2] === '--stats') {
    mdLinks(args[0], {
      validate: true
    }).then(resp => resolve((0, _stats.estadisticas)(resp, 'validate')));
  } else if (args[1] === '--stats' && args[2] === '--validate') {
    mdLinks(args[0], {
      validate: true
    }).then(resp => resolve((0, _stats.estadisticas)(resp, 'validate')));
  } else if (args[1] === '--validate') {
    mdLinks(args[0], {
      validate: true
    }).then(resp => resolve((0, _moduls.templateDeResultado)(resp)));
  } else if (args[1] === '--stats') {
    mdLinks(args[0]).then(resp => resolve((0, _stats.estadisticas)(resp)));
  } else if (args[0] === undefined) {
    resolve('Ingrese la ruta que desea analizar despues de md-links. \n Ejemplo: md-links ./some/example.md ');
  } else if (args[1] === undefined) {
    mdLinks(args[0]).then(resp => resolve((0, _moduls.templateDeResultado)(resp)));
  } else {
    mdLinks(args[0]).then(resp => resolve((0, _moduls.templateDeResultado)(resp)));
  }
});

exports.cli = cli;
cli(args1).then(resp => console.log(resp));