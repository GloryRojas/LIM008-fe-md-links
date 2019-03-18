"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templateDeResultado = exports.recorrerCarpeta = exports.filtrarArchivosMd = exports.transformarAAbsoluta = void 0;

const path = require('path');

const fs = require('fs');

const transformarAAbsoluta = ruta => path.resolve(ruta);

exports.transformarAAbsoluta = transformarAAbsoluta;

const filtrarArchivosMd = arrRutasArchivos => arrRutasArchivos.filter(arr => path.extname(arr) === '.md');

exports.filtrarArchivosMd = filtrarArchivosMd;

const recorrerCarpeta = ruta => {
  let arrayRutasArchivos = [];

  if (fs.statSync(ruta).isFile()) {
    arrayRutasArchivos.push(ruta);
  } else {
    let listaArchivos = fs.readdirSync(ruta);

    for (let i = 0; i < listaArchivos.length; i++) {
      let rutaArchivos = path.join(ruta, listaArchivos[i]);
      arrayRutasArchivos = arrayRutasArchivos.concat(recorrerCarpeta(rutaArchivos));
    }
  }

  return filtrarArchivosMd(arrayRutasArchivos);
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