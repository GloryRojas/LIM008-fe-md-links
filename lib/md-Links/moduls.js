"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templateDeResultado = exports.recorrerCarpeta = void 0;

const path = require('path');

const fs = require('fs');

const recorrerCarpeta = ruta => {
  let arrayRutasArchivos = [];

  if (fs.statSync(ruta).isFile()) {
    arrayRutasArchivos.push(ruta);
  } else {
    let listaArchivos = fs.readdirSync(ruta);
    listaArchivos.forEach(archivo => {
      let rutaArchivos = path.join(ruta, archivo);
      arrayRutasArchivos = arrayRutasArchivos.concat(recorrerCarpeta(rutaArchivos));
    });
  }

  return arrayRutasArchivos.filter(arr => path.extname(arr) === '.md');
};

exports.recorrerCarpeta = recorrerCarpeta;

const templateDeResultado = arrObj => {
  let templateListOfLinks = '';
  arrObj.forEach(link => {
    let obj = `${link.file}, ${link.href}, ${link.text}, ${link.code ? link.code : ''}, ${link.stat ? link.stat : ''}\n`;
    templateListOfLinks += obj;
  });
  return templateListOfLinks;
};

exports.templateDeResultado = templateDeResultado;