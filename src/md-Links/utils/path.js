const path = require('path');

export const rutaEsAbsoluta = (ruta) => path.isAbsolute(ruta);

export const transformarAAbsoluta = (ruta) => path.resolve(ruta);

export const filtrarArchivosMd = (arrRutasArchivos)  => arrRutasArchivos.filter(arr => path.extname(arr) === '.md' );