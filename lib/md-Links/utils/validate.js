"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validarLinks = void 0;

const fetch = require('node-fetch');

const validarLinks = arrayObjetos => {
  const arrPromesas = arrayObjetos.map(objLink => fetch(objLink.href).then(response => {
    if (response.status >= 200 && response.status < 400) {
      objLink.code = response.status;
      objLink.stat = 'OK';
    } else if (response.status >= 400 && response.status < 600) {
      objLink.code = response.status;
      objLink.stat = 'FAIL';
    }

<<<<<<< HEAD
    return response;
=======
    return objLink;
>>>>>>> 1e15feb6e88a741fbc1916ee59842cbd0a805aee
  }));
  return Promise.all(arrPromesas);
}; //validarLinks(output3).then(resp => console.log(resp));


exports.validarLinks = validarLinks;