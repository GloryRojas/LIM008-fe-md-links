"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leerDirectorio = exports.rutaEsArchivo = exports.leerArchivo = void 0;

const fs = require('fs');

const leerArchivo = ruta => fs.readFileSync(ruta, 'utf-8');

exports.leerArchivo = leerArchivo;

const rutaEsArchivo = ruta => fs.statSync(ruta).isFile();

exports.rutaEsArchivo = rutaEsArchivo;

const leerDirectorio = ruta => fs.readdirSync(ruta);

exports.leerDirectorio = leerDirectorio;