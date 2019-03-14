"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templateDeResultado = exports.recorrerCarpeta = exports.devolverRutaAbsoluta = void 0;

var _fs = require("./fs.js");

var _path = require("./path.js");

const devolverRutaAbsoluta = ruta => {
  let rutaAbs = '';

  if ((0, _path.rutaEsAbsoluta)(ruta)) {
    rutaAbs = ruta;
  } else {
    rutaAbs = (0, _path.transformarAAbsoluta)(ruta);
  }

  return rutaAbs;
};

exports.devolverRutaAbsoluta = devolverRutaAbsoluta;

const recorrerCarpeta = ruta => {
  let arrayRutasArchivos = [];

  if ((0, _fs.rutaEsArchivo)(ruta)) {
    arrayRutasArchivos.push(ruta);
  } else {
    let listaArchivos = (0, _fs.leerDirectorio)(ruta);

    for (let i = 0; i < listaArchivos.length; i++) {
      let rutaArchivos = ruta + '\\' + listaArchivos[i];

      if ((0, _fs.rutaEsArchivo)(rutaArchivos)) {
        arrayRutasArchivos.push(rutaArchivos);
      } else {
        arrayRutasArchivos = arrayRutasArchivos.concat(recorrerCarpeta(rutaArchivos));
      }
    }
  }

  return (0, _path.filtrarArchivosMd)(arrayRutasArchivos);
};

exports.recorrerCarpeta = recorrerCarpeta;

const templateDeResultado = arrObj => {
  let templateListOfLinks = '';
  arrObj.forEach(link => {
    const objlength = Object.keys(link);
    let obj = '';

    if (objlength.length === 5) {
      obj = `
${link.file}, ${link.href}, ${link.text}, ${link.code}, ${link.stat}
            `;
    } else {
      obj = `
${link.file}, ${link.href}, ${link.text}
            `;
    }

    templateListOfLinks += obj;
  });
  return templateListOfLinks;
};

exports.templateDeResultado = templateDeResultado;