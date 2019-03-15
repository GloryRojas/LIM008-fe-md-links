import { validarLinks } from './md-links/validate.js';
import { recorrerCarpeta, transformarAAbsoluta } from './md-links/moduls.js';
import { extraerLinks } from './md-links/link.js';

const mdLinks = (path, options) => new Promise((resolve) => {
  const rutaAbs = transformarAAbsoluta(path);
  const objLinks = extraerLinks(recorrerCarpeta(rutaAbs));
  if (options === undefined) {
    resolve(objLinks);
  } else if (options.validate) {
    validarLinks(objLinks)
      .then(resp => resolve(resp));
  } else {
    console.log('Options deberia tener una propiedad validate con un valor booleano');
  }
});
// mdLinks('./src', {}).then(resp => console.log(resp));
//  mdLinks('./src').then(resp => console.log(resp));
module.exports = mdLinks;