const path = require('path');
const fs = require('fs');
/*
const rutaEsAbsoluta = (ruta) => path.isAbsolute(ruta);

const transformarAAbsoluta = (ruta) => path.resolve(ruta);
 */

const recorrerCarpeta = (ruta) => {
  let listaArchivos = fs.readdirSync(ruta);
  let arrayArchivos = [];
    for(let i=0; i< listaArchivos.length; i++){
      let rutaArchivos = ruta + '\\' + listaArchivos[i];
      if(fs.statSync(rutaArchivos).isFile()){
        arrayArchivos.push(rutaArchivos);
      }else{
        arrayArchivos.push(recorrerCarpeta(rutaArchivos));
      }
    }
  return arrayArchivos;
}

function flattenDeep(arr1) {
  return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

const rutaEsArchivo = (ruta) => {
    let arrayRuta = [];
    let esArchivo = fs.statSync(ruta).isFile();
    if (esArchivo === true ){
      arrayRuta.push(ruta);
    } else{
      arrayRuta.push(recorrerCarpeta(ruta));
    }
    return arrayRuta;
 };

 console.log(flattenDeep(rutaEsArchivo('C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\cli.js')));
 

//console.log(flattenDeep(recorrerCarpeta('C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src')));

