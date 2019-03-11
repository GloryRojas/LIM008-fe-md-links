#!/usr/bin/env node

import { mdLinks } from "./md-Links/md-links.js"

const opciones = {
    validate: true,
    stats: false
} 

mdLinks('./src', opciones).then(resp => console.log(resp));