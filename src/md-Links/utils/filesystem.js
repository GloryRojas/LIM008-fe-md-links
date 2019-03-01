const fs = require('fs');

export const recorrerCarpeta = (ruta) => {
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
  
 export const rutaEsArchivo = (ruta) => {
      let arrayRuta = [];
      let esArchivo = fs.statSync(ruta).isFile();
      if (esArchivo === true ){
        arrayRuta.push(ruta);
      } else{
        arrayRuta.push(recorrerCarpeta(ruta));
      }
      return arrayRuta;
   };
  