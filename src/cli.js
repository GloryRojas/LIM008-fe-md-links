#!/usr/bin/env node
import { estadisticas } from './stats.js';
import { templateDeResultado } from './md-links/moduls.js';
const mdLinks = require('./md-links');

const [,, ...args1] = process.argv;

export const cli = (args) => { 
  if (args[1] === '--validate' && args[2] === '--stats') {
    mdLinks(args[0], {validate: true}).then(resp => console.log('1', estadisticas(resp, 'validate')));
  } else if (args[1] === '--stats' && args[2] === '--validate') {
    mdLinks(args[0], {validate: true}).then(resp => console.log('2', estadisticas(resp, 'validate')));
  } else if (args[1] === '--validate') {  
    mdLinks(args[0], {validate: true}).then(resp => console.log('3', templateDeResultado(resp)));
  } else if (args[1] === '--stats') {
    mdLinks(args[0]).then(resp => console.log('3', estadisticas(resp)));
  } else if (args[0] === undefined) {
    console.log('Ingrese la ruta que desea analizar despues de md-links. \n Ejemplo: md-links ./some/example.md ');
  } else {
    mdLinks(args[0]).then(resp => console.log('4', templateDeResultado(resp)));
  }
};

cli(args1);

