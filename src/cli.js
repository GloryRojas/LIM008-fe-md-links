#!/usr/bin/env node
import { estadisticas } from './stats.js';
import { templateDeResultado } from './md-links/moduls.js';
const mdLinks = require('./md-links');

const [,, ...args1] = process.argv;

export const cli = (args) => new Promise((resolve) => { 
  if (args[1] === '--validate' && args[2] === '--stats') {
    mdLinks(args[0], {validate: true}).then(resp => resolve(estadisticas(resp, 'validate')));
  } else if (args[1] === '--stats' && args[2] === '--validate') {
    mdLinks(args[0], {validate: true}).then(resp => resolve(estadisticas(resp, 'validate')));
  } else if (args[1] === '--validate') {  
    mdLinks(args[0], {validate: true}).then(resp => resolve(templateDeResultado(resp)));
  } else if (args[1] === '--stats') {
    mdLinks(args[0]).then(resp => resolve(estadisticas(resp)));
  } else if (args[0] === undefined) {
    resolve('Ingrese la ruta que desea analizar despues de md-links. \n Ejemplo: md-links ./some/example.md ');
  } else if (args[1] === undefined) {
    mdLinks(args[0]).then(resp => resolve(templateDeResultado(resp)));
  } else {
    mdLinks(args[0]).then(resp => resolve(templateDeResultado(resp)));
  }
});

cli(args1).then(resp => console.log(resp));

