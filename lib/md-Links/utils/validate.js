"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validarLinks = exports.estadoLink = void 0;

const fetch = require('node-fetch');

const estadoLink = link => {
  fetch(link).then(response => console.log(response.status));
}; //.catch((err) => err.message)


exports.estadoLink = estadoLink;
console.log(estadoLink('https://www.npmjs.com/package/node-fetch#iface-body'));

const validarLinks = arrayLinks => {
  const arrLinks = arrayLinks;

  for (let i = 0; i < arrLinks.length; i++) {
    let link = arrLinks[i];
  }
};

exports.validarLinks = validarLinks;