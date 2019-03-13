"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extraerLinks = void 0;

var _fs = require("./fs.js");

const myMarked = require('marked');

const extraerLinks = arrRutasArchivosMd => {
  const links = [];

  for (let i = 0; i < arrRutasArchivosMd.length; i++) {
    let archivo = arrRutasArchivosMd[i];
    let contArchivo = (0, _fs.leerArchivo)(archivo, 'utf-8');
    const renderer = new myMarked.Renderer();

    renderer.link = (href, title, text) => {
      return links.push({
        href: href,
        text: text,
        file: archivo
      });
    };

    myMarked(contArchivo, {
      renderer: renderer
    });
  }

  return links;
};

exports.extraerLinks = extraerLinks;