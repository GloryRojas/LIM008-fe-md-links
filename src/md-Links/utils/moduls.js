import { rutaEsArchivo, leerDirectorio } from './fs.js';
import { rutaEsAbsoluta, transformarAAbsoluta, filtrarArchivosMd } from './path.js';

export const devolverRutaAbsoluta = (ruta) => {
    let rutaAbs = '';
    if (rutaEsAbsoluta(ruta)){
        rutaAbs = ruta;
    } else {
        rutaAbs = transformarAAbsoluta(ruta);
    }
    return rutaAbs;
};

export const recorrerCarpeta = (ruta) => {
    let arrayRutasArchivos = [];
    if (rutaEsArchivo(ruta)){
        arrayRutasArchivos.push(ruta);
    } else{
        let listaArchivos = leerDirectorio(ruta);
        for(let i=0; i< listaArchivos.length; i++){
            let rutaArchivos = ruta + '\\' + listaArchivos[i];
            if(rutaEsArchivo(rutaArchivos)){
                arrayRutasArchivos.push(rutaArchivos);
            }else{
                arrayRutasArchivos = arrayRutasArchivos.concat(recorrerCarpeta(rutaArchivos));
                }
        }
    }
    return filtrarArchivosMd(arrayRutasArchivos);
};

export const templateDeResultado = (arrObj) => {
    let templateListOfLinks = '';
    arrObj.forEach((link) => {
        const objlength = Object.keys(link);
        let obj = ``;
        if(objlength.length === 5){
            obj = `
            ${link.file}, ${link.href}, ${link.text}, ${link.code}, ${link.stat}
            `;
        }else{
            obj = `
            ${link.file}, ${link.href}, ${link.text}
            `;  
        }
      templateListOfLinks += obj;
    });
    return templateListOfLinks;
};
