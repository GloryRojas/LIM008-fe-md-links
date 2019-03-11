#!/usr/bin/env node
"use strict";

var _mdLinks = require("./md-Links/md-links.js");

const opciones = {
  validate: true,
  stats: false
};
(0, _mdLinks.mdLinks)('./src', opciones).then(resp => console.log(resp));