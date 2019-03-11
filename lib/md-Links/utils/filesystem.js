"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayArchivos = void 0;

var _fs = require("./fs.js");

const arrayArchivos = ruta => {
  let arrayRuta = [];

  if ((0, _fs.rutaesArchivo)(ruta)) {
    arrayRuta.push(ruta);
  } else {
    let listaArchivos = (0, _fs.leerDirectorio)(ruta);

    for (let i = 0; i < listaArchivos.length; i++) {
      let rutaArchivos = ruta + '\\' + listaArchivos[i];

      if ((0, _fs.rutaesArchivo)(rutaArchivos)) {
        arrayRuta.push(rutaArchivos);
      } else {
        arrayRuta = arrayRuta.concat(arrayArchivos(rutaArchivos));
      }
    }
  }

  return arrayRuta;
};

<<<<<<< HEAD
exports.rutaEsArchivo = rutaEsArchivo;
const rutas = rutaEsArchivo('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\src\\md-links\\utils'); //console.log(rutas);

const filtrarArchivosMd = arrRutasArchivos => arrRutasArchivos.filter(arr => path.extname(arr) === '.md');

const arrayMd = filtrarArchivosMd(rutas); //console.log(arrayMd);

/* const leerArchivo = (ruta) => {
   let array1 = [(fs.readFileSync(ruta, 'utf-8'))];
   return array1;
}
console.log(leerArchivo('.//ejemplo.md')); */

const extraerLinks = arrRutasArchivosMd => {
  const links = [];

  for (let i = 0; i < arrRutasArchivosMd.length; i++) {
    let archivo = arrRutasArchivosMd[i];
    let leerArchivo = fs.readFileSync(archivo, 'utf8');
    const renderer = new myMarked.Renderer(); //myMarked(leerArchivo, { renderer: renderer });

    renderer.link = (href, title, text) => {
      return links.push({
        href: href,
        text: text,
        file: archivo
      });
    };

    myMarked(leerArchivo, {
      renderer: renderer
    });
  }

  return links;
};

exports.extraerLinks = extraerLinks;
console.log(extraerLinks(arrayMd));
=======
exports.arrayArchivos = arrayArchivos;
>>>>>>> 1e15feb6e88a741fbc1916ee59842cbd0a805aee
