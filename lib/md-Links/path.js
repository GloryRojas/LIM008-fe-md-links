"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filtrarArchivosMd = exports.transformarAAbsoluta = exports.rutaEsAbsoluta = void 0;

const path = require('path');

const rutaEsAbsoluta = ruta => path.isAbsolute(ruta);

exports.rutaEsAbsoluta = rutaEsAbsoluta;

const transformarAAbsoluta = ruta => path.resolve(ruta);

exports.transformarAAbsoluta = transformarAAbsoluta;

const filtrarArchivosMd = arrRutasArchivos => arrRutasArchivos.filter(arr => path.extname(arr) === '.md');

exports.filtrarArchivosMd = filtrarArchivosMd;