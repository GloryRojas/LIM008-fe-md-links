"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _stats = require("./utils/stats.js");

var _validate = require("./utils/validate.js");

var _moduls = require("./utils/moduls.js");

var _link = require("./utils/link.js");

const opciones = {
  validate: true,
  stats: true
};

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  const rutaAbs = (0, _moduls.devolverRutaAbsoluta)(path);
  const objLinks = (0, _link.extraerLinks)((0, _moduls.recorrerCarpeta)(rutaAbs));

  if (options.validate && options.stats) {
    (0, _validate.validarLinks)(objLinks).then(resp => resolve((0, _stats.estadisticas)(resp, 'validate')));
  } else if (options.validate) {
    (0, _validate.validarLinks)(objLinks).then(resp => resolve((0, _moduls.templateDeResultado)(resp)));
  } else if (options.stats) {
    resolve((0, _stats.estadisticas)(objLinks));
  } else {
    resolve((0, _moduls.templateDeResultado)(objLinks));
  }
});

exports.mdLinks = mdLinks;
mdLinks('./src', opciones).then(resp => console.log(resp));