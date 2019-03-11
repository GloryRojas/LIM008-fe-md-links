#!/usr/bin/env node
"use strict";

var _mdLinks = require("../lib/md-Links/md-links");

console.log("Hello world");
const opciones = {
  validate: true,
  stats: false
};
(0, _mdLinks.mdLinks)('./src', opciones).then(resp => console.log(resp));