#!/usr/bin/env node

import { mdLinks } from './md-Links/md-links.js';
import { estadisticas } from './stats.js';
import { templateDeResultado } from './md-Links/utils/moduls.js';

const [,, ...args] = process.argv;
if (args[1] === '--validate' && args[2] === '--stats'){
    mdLinks(args[0], {validate: true}).then(resp => console.log(estadisticas(resp, 'validate')))
} else if (args[1] === '--stats' && args[2] === '--validate'){
    mdLinks(args[0], {validate: true}).then(resp => console.log(estadisticas(resp, 'validate')))
} else if(args[1] === '--validate'){  
    mdLinks(args[0], {validate: true}).then(resp => console.log(templateDeResultado(resp)))
} else if (args[1] === '--stats'){
    mdLinks(args[0]).then(resp => console.log(estadisticas(resp)))
} else {
    mdLinks(args[0]).then(resp => console.log(templateDeResultado(resp)))
}
