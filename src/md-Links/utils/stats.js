export const linksUnicos = (arrObj) => {
    const arrUnicos = arrObj.reduce((acum, obj) => {
        if(acum.indexOf(obj.href) === -1){
            acum.push(obj.href);
        }
        return acum;
    }, []);
    return arrUnicos.length;
}
    
export const linksRotos = (arrObj) => {
    const arrRotos = arrObj.filter(obj => obj.stat === 'FAIL');
    return arrRotos.length;
}
    
export const estadisticas = (arrObj, opcion) => {
    const valid = opcion;
    let result;
    if(valid === 'validate'){
        result = `
        Total: ${arrObj.length}
        Unicos: ${linksUnicos(arrObj)}
        Rotos: ${linksRotos(arrObj)}
        `;
    }else{
        result = `
        Total: ${arrObj.length}
        Unicos: ${linksUnicos(arrObj)}
        `;
    }
    return result;
}
