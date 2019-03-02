const fs = require('fs');
 
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
  
console.log(rutaEsArchivo('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\src'));
