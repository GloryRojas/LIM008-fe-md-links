const path = require('path');
const fs = require('fs');

export const rutaEsAbsoluta = (ruta) => {
   return path.isAbsolute(ruta);
};

export const transformarAAbsoluta = (ruta) => {
    return path.resolve(ruta);
 };
 
export const rutaEsArchivo = (ruta) => {
    return fs.statSync(ruta).isFile();
 };
