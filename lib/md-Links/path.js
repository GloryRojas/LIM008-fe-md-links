"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filtrarArchivosMd = void 0;

const path = require('path');

const filtrarArchivosMd = arrRutasArchivos => arrRutasArchivos.filter(arr => path.extname(arr) === '.md');

exports.filtrarArchivosMd = filtrarArchivosMd;