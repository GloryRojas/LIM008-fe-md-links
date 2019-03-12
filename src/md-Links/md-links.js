import { validarLinks } from './utils/validate.js';
import { devolverRutaAbsoluta, recorrerCarpeta } from './utils/moduls.js';
import { extraerLinks } from './utils/link.js';

export const mdLinks = (path, options) => new Promise ((resolve, reject) =>{
    const rutaAbs = devolverRutaAbsoluta(path);
    const objLinks = extraerLinks(recorrerCarpeta(rutaAbs));
    if (options.validate){
        validarLinks(objLinks)
        .then(resp => resolve(resp))
    } else {
        resolve(objLinks)
    }
});

/* mdLinks('./src', {validate: true}).then(resp => console.log(resp));
mdLinks('./src', {validate: false}).then(resp => console.log(resp));
 */