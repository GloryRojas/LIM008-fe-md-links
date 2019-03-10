const fs = require('fs');

export const leerArchivo = ruta => fs.readFileSync(ruta, 'utf-8');

//console.log(leerArchivo('.//ejemplo.md'));

export const rutaEsArchivo = ruta => fs.statSync(ruta).isFile();

export const leerDirectorio = ruta => fs.readdirSync(ruta);