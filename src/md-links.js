import { validarLinks } from './md-links/validate.js';
import { devolverRutaAbsoluta, recorrerCarpeta } from './md-links/moduls.js';
import { extraerLinks } from './md-links/link.js';

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  const rutaAbs = devolverRutaAbsoluta(path);
  const objLinks = extraerLinks(recorrerCarpeta(rutaAbs));
  if (options === undefined) {
    resolve(objLinks);
  } else if (options.validate) {
    validarLinks(objLinks)
      .then(resp => resolve(resp));
  }
});
//  mdLinks('./src', {validate: true}).then(resp => console.log(resp));
//  mdLinks('./src').then(resp => console.log(resp));
module.exports = mdLinks;