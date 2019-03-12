"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = require("./utils/validate.js");

var _moduls = require("./utils/moduls.js");

var _link = require("./utils/link.js");

var _default = (path, options) => new Promise((resolve, reject) => {
  const rutaAbs = (0, _moduls.devolverRutaAbsoluta)(path);
  const objLinks = (0, _link.extraerLinks)((0, _moduls.recorrerCarpeta)(rutaAbs));

  if (options === undefined) {
    resolve(objLinks);
  } else if (options.validate) {
    (0, _validate.validarLinks)(objLinks).then(resp => resolve(resp));
  }
}); //mdLinks('./src', {validate: true}).then(resp => console.log(resp));
//mdLinks('./src').then(resp => console.log(resp));


exports.default = _default;