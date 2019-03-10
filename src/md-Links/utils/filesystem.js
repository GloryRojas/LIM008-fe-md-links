import {rutaesArchivo, leerDirectorio} from './fs.js';

export const arrayArchivos = (ruta) => {
    let arrayRuta = [];
    if (rutaesArchivo(ruta)){
        arrayRuta.push(ruta);
    } else{
        let listaArchivos = leerDirectorio(ruta);
        for(let i=0; i< listaArchivos.length; i++){
            let rutaArchivos = ruta + '\\' + listaArchivos[i];
            if(rutaesArchivo(rutaArchivos)){
                arrayRuta.push(rutaArchivos);
            }else{
                arrayRuta = arrayRuta.concat(arrayArchivos(rutaArchivos));
                }
        }
    }
    return arrayRuta;
};