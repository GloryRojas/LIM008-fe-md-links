#!/usr/bin/env node

import { estadisticas } from './stats.js';
import { templateDeResultado } from './md-Links/moduls.js';
const mdLinks = require('./md-links');

const [,, ...args] = process.argv;
if (args[1] === '--validate' && args[2] === '--stats') {
  mdLinks(args[0], {validate: true}).then(resp => console.log(estadisticas(resp, 'validate')));
} else if (args[1] === '--stats' && args[2] === '--validate') {
  mdLinks(args[0], {validate: true}).then(resp => console.log(estadisticas(resp, 'validate')));
} else if (args[1] === '--validate') {  
  mdLinks(args[0], {validate: true}).then(resp => console.log(templateDeResultado(resp)));
} else if (args[1] === '--stats') {
  mdLinks(args[0]).then(resp => console.log(estadisticas(resp)));
} else if (args[0] === undefined) {
  console.log('Ingrese la ruta que desea analizar despues de md-links. \n Ejemplo: md-links ./some/example.md ');
} else {
  mdLinks(args[0]).then(resp => console.log(templateDeResultado(resp)));
}


