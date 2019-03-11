const fs = require('fs');
const path = require('path');
const myMarked = require('marked'); 

export const rutaEsArchivo = (ruta) => {
    let arrayRuta = [];
    let esArchivo = fs.statSync(ruta).isFile();
    if (esArchivo === true ){
        arrayRuta.push(ruta);
    } else{
        let listaArchivos = fs.readdirSync(ruta);
        for(let i=0; i< listaArchivos.length; i++){
            let rutaArchivos = ruta + '\\' + listaArchivos[i];
            if(fs.statSync(rutaArchivos).isFile()){
                arrayRuta.push(rutaArchivos);
            }else{
                arrayRuta = arrayRuta.concat(rutaEsArchivo(rutaArchivos));
                }
        }
    }
    return arrayRuta;
};

const rutas = rutaEsArchivo('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\src\\md-links\\utils');
//console.log(rutas);

const filtrarArchivosMd = (arrRutasArchivos)  => arrRutasArchivos.filter(arr => path.extname(arr) === '.md' );

const arrayMd = filtrarArchivosMd(rutas);
//console.log(arrayMd);

/* const leerArchivo = (ruta) => {
   let array1 = [(fs.readFileSync(ruta, 'utf-8'))];
   return array1;
}
console.log(leerArchivo('.//ejemplo.md')); */

export const extraerLinks = (arrRutasArchivosMd) => {
    const links = [];
    for(let i=0; i<arrRutasArchivosMd.length; i++) {
        let archivo = arrRutasArchivosMd[i];
        let leerArchivo = fs.readFileSync(archivo, 'utf8');
        const renderer = new myMarked.Renderer();
      //myMarked(leerArchivo, { renderer: renderer });
        renderer.link = (href, title, text) => {
           return links.push({
            href: href,
            text: text,
            file: archivo,
            });
        };
        myMarked(leerArchivo, { renderer: renderer });
    }
    return links;
  }

console.log(extraerLinks(arrayMd));
