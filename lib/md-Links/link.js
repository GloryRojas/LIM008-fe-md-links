"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extraerLinks = void 0;

const myMarked = require('marked');

const fs = require('fs');

const extraerLinks = arrRutasArchivosMd => {
  const links = [];

  for (let i = 0; i < arrRutasArchivosMd.length; i++) {
    let archivo = arrRutasArchivosMd[i];
    let contArchivo = fs.readFileSync(archivo, 'utf-8');
    const renderer = new myMarked.Renderer();

    renderer.link = (href, title, text) => {
      return links.push({
        href: href,
        text: text.slice(0, 50),
        file: archivo.normalize()
      });
    };

    myMarked(contArchivo, {
      renderer: renderer
    });
  }

  ;
  return links;
};

exports.extraerLinks = extraerLinks;