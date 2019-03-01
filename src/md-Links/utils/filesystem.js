const fs = require('fs');

const recorrerCarpeta = (ruta) => {
    let listaArchivos = fs.readdirSync(ruta);
    let arrayArchivos = [];
        for(let i=0; i< listaArchivos.length; i++){
        let rutaArchivos = ruta + '\\' + listaArchivos[i];
        if(fs.statSync(rutaArchivos).isFile()){
            arrayArchivos.push(rutaArchivos);
        }else{
            arrayArchivos = arrayArchivos.concat(recorrerCarpeta(rutaArchivos));
        }
        }
    return arrayArchivos;
};

 // console.log(recorrerCarpeta('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\src'));
  
const rutaEsArchivo = (ruta) => {
    let arrayRuta = [];
    let esArchivo = fs.statSync(ruta).isFile();
    if (esArchivo === true ){
        arrayRuta.push(ruta);
    } else{
        arrayRuta = arrayRuta.concat(recorrerCarpeta(ruta));
    }
    return arrayRuta;
};
  
console.log(rutaEsArchivo('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\src'));
