const myMarked = require('marked'); 
const fs = require('fs');

export const extraerLinks = (arrRutasArchivosMd) => {
  const links = [];
  for (let i = 0; i < arrRutasArchivosMd.length; i++) {
    let archivo = arrRutasArchivosMd[i];
    let contArchivo = fs.readFileSync(archivo, 'utf-8');
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