"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayArchivos = void 0;

var _fs = require("./fs.js");

const arrayArchivos = ruta => {
  let arrayRuta = [];

  if ((0, _fs.rutaesArchivo)(ruta)) {
    arrayRuta.push(ruta);
  } else {
    let listaArchivos = (0, _fs.leerDirectorio)(ruta);

    for (let i = 0; i < listaArchivos.length; i++) {
      let rutaArchivos = ruta + '\\' + listaArchivos[i];

      if ((0, _fs.rutaesArchivo)(rutaArchivos)) {
        arrayRuta.push(rutaArchivos);
      } else {
        arrayRuta = arrayRuta.concat(arrayArchivos(rutaArchivos));
      }
    }
  }

  return arrayRuta;
};

exports.arrayArchivos = arrayArchivos;