const path = require('path');
const fs = require('fs');

const rutaEsAbsoluta = (ruta) => path.isAbsolute(ruta);

const transformarAAbsoluta = (ruta) => path.resolve(ruta);
 
const rutaEsArchivo = (ruta) => {
    let arrayRuta = [];
    let esArchivo = fs.statSync(ruta).isFile();
    if (esArchivo === true ){
        arrayRuta.push(ruta);
    }
    return arrayRuta;
 };

const recorrerCarpeta = (ruta) => {
  let listaArchivos = fs.readdirSync(ruta);
  let arrayArchivos = [];
    for(let i=0; i< listaArchivos.length; i++){
     arrayArchivos.push(ruta + '\\' + listaArchivos[i]);
    }
  return arrayArchivos;
}
console.log(recorrerCarpeta('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links'));

