const myMarked = require('marked'); 
import { leerArchivo } from './fs.js';

export const extraerLinks = (arrRutasArchivosMd) => {
  const links = [];
  for (let i = 0; i < arrRutasArchivosMd.length; i++) {
    let archivo = arrRutasArchivosMd[i];
    let contArchivo = leerArchivo(archivo, 'utf-8');
    const renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => {
      return links.push({
        href: href,
        text: text,
        file: archivo,
      });
    };
    myMarked(contArchivo, { renderer: renderer });
  };
  return links;
};