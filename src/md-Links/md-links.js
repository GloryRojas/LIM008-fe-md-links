import { estadisticas } from './utils/stats.js';
import { validarLinks } from './utils/validate.js';
import { devolverRutaAbsoluta, recorrerCarpeta, templateDeResultado } from './utils/moduls.js';
import { extraerLinks } from './utils/link.js';

export const mdLinks = (path, options) => new Promise ((resolve, reject) =>{
    const rutaAbs = devolverRutaAbsoluta(path);
    const objLinks = extraerLinks(recorrerCarpeta(rutaAbs));
    if(options.validate && options.stats){
        validarLinks(objLinks)
        .then(resp => resolve(estadisticas(resp, 'validate')));
    } else if (options.validate){
        validarLinks(objLinks)
        .then(resp => resolve(templateDeResultado(resp)))
    } else if (options.stats){
        resolve(estadisticas(objLinks))
    } else {
        resolve(templateDeResultado(objLinks))
    }
});

mdLinks('./src', {validate: true}).then(resp => console.log(resp));
mdLinks('./src', {validate: false}).then(resp => console.log(resp));