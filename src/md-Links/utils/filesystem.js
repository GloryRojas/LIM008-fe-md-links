const fs = require('fs');
const path = require('path');
const marked = require('marked'); 

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

const rutas = rutaEsArchivo('C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils');
//console.log(rutas);

const filtrarArchivosMd = (arrRutasArchivos)  => arrRutasArchivos.filter(arr => path.extname(arr) === '.md' );

const arrayMd = filtrarArchivosMd(rutas);
//console.log(arrayMd);

/* const leerArchivo = (ruta) => {
   let array1 = [(fs.readFileSync(ruta, 'utf-8'))];
   return array1;
}
console.log(leerArchivo('.//ejemplo.md')); */

export const extraerLinks = (arrFiles) => {
    const links = [];
    arrFiles.forEach(file => {
      const leerArchivo = fs.readFileSync(file, 'utf8');
      const renderer = new marked.Renderer();
      renderer.link = (href, title, text) => {
        links.push({
          href: href,
          text: text,
          file: file,
        });
      };
      marked(leerArchivo, { renderer });
    })
    return links;
  }

//console.log(extraerLinks(arrayMd));
