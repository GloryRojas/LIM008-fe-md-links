const path = require('path');

export const rutaEsAbsoluta = (ruta) => path.isAbsolute(ruta);

export const transformarAAbsoluta = (ruta) => path.resolve(ruta);

