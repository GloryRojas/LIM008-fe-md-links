const path = require('path');

export const filtrarArchivosMd = (arrRutasArchivos)  => {
   return arrRutasArchivos.filter(arr => path.extname(arr) === '.md' );
}

