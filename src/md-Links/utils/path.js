const path = require('path');

export const rutaEsAbsoluta = (ruta) => {
   return path.isAbsolute(ruta);
};

export const transformarAAbsoluta = (ruta) => {
    return path.resolve(ruta);
 };
 