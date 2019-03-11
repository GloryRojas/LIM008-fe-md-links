#!/usr/bin/env node

import {mdLinks} from '../lib/md-Links/md-links';

console.log("Hello world");

const opciones = {
    validate: true,
    stats: false
} 

mdLinks('./src', opciones).then(resp => console.log(resp));