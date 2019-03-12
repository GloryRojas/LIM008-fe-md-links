#!/usr/bin/env node

import { mdLinks } from "./md-Links/md-links.js"
import { estadisticas } from '../src/stats.js';
//mdLinks('./src', opciones).then(resp => console.log(resp));

const [,, ...args] = process.argv;
/* console.log(`Hola ${args}`);
console.log(args[0]);
console.log(args[1]);
console.log(args[2]); */
if (args[1] === '--validate' && args[2] === '--stats'){
    // console.log('1', opciones);
    mdLinks(args[0], {validate: true, stats: true}).then(resp => console.log(resp))
} else if(args[1] === '--validate'){
    // console.log('2', opciones);  
    mdLinks(args[0], {validate: true, stats: false}).then(resp => console.log(resp))
} else if (args[1] === '--stats'){
    // console.log('3', opciones);
    mdLinks(args[0], {validate: false, stats: true}).then(resp => console.log(resp))
} else {
    // console.log('4', opciones);
    mdLinks(args[0], {validate: false, stats: false}).then(resp => console.log(resp))
}
