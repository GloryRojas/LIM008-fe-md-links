"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.estadisticas = exports.linksRotos = exports.linksUnicos = void 0;

const linksUnicos = arrObj => {
  const arrUnicos = arrObj.reduce((acum, obj) => {
    if (acum.indexOf(obj.href) === -1) {
      acum.push(obj.href);
    }

    return acum;
  }, []);
  return arrUnicos.length;
};

exports.linksUnicos = linksUnicos;

const linksRotos = arrObj => {
  const arrRotos = arrObj.filter(obj => obj.stat === 'FAIL');
  return arrRotos.length;
};

exports.linksRotos = linksRotos;

const estadisticas = (arrObj, opcion) => {
  let result;

  if (opcion === 'validate') {
    result = `Total: ${arrObj.length}
Unicos: ${linksUnicos(arrObj)}
Rotos: ${linksRotos(arrObj)}`;
  } else {
    result = `
Total: ${arrObj.length}
Unicos: ${linksUnicos(arrObj)}`;
  }

  return result;
};

exports.estadisticas = estadisticas;