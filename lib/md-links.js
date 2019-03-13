"use strict";

var _validate = require("./md-Links/utils/validate.js");

var _moduls = require("./md-Links/utils/moduls.js");

var _link = require("./md-Links/utils/link.js");

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  const rutaAbs = (0, _moduls.devolverRutaAbsoluta)(path);
  const objLinks = (0, _link.extraerLinks)((0, _moduls.recorrerCarpeta)(rutaAbs));

  if (options === undefined) {
    resolve(objLinks);
  } else if (options.validate) {
    (0, _validate.validarLinks)(objLinks).then(resp => resolve(resp));
  }
});

mdLinks('./src', {
  validate: true
}).then(resp => console.log(resp));
mdLinks('./src').then(resp => console.log(resp));
module.exports = mdLinks;