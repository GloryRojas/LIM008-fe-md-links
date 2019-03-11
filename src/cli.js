#!/usr/bin/env node

console.log("Hello world");

const mdLinks = require("./md-Links/md-links");
const opciones = {
    validate: true,
    stats: false
} 

mdLinks('./src', opciones).then(resp => console.log(resp));