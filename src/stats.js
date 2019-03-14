export const linksUnicos = (arrObj) => {
  const arrUnicos = arrObj.reduce((ant, obj) => {
    if (ant.indexOf(obj.href) === -1) {
      ant.push(obj.href);
    }
    return ant;
  }, []);
  return arrUnicos.length;
};
    
export const linksRotos = (arrObj) => {
  const arrRotos = arrObj.filter(obj => obj.stat === 'FAIL');
  return arrRotos.length;
};
    
export const estadisticas = (arrObj, opcion) => {
  let result;
  if (opcion === 'validate') {
    result = 
`Total: ${arrObj.length}
Unicos: ${linksUnicos(arrObj)}
Rotos: ${linksRotos(arrObj)}`;
  } else {
    result = `Total: ${arrObj.length}
Unicos: ${linksUnicos(arrObj)}`;
  }
  return result;
};
