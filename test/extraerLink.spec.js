import { extraerLinks } from '../src/md-links/link.js';
const path = require('path');

const output2 = [ 
  path.resolve('./src/md-links/ejemplo.md'),
  path.resolve('./src/md-links/ejemplos-md/archivo1.md')
];

const output3 = [ 
  { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
    text: 'Perrito',
    file: path.resolve('./src/md-links/ejemplo.md') },
  { href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBA3ZYqSO6GqIcBnCU0mrW8gCQhSC0OE1UsOqTytQoiqVFSf8z',
    text: 'Perrito 2',
    file: path.resolve('./src/md-links/ejemplo.md') },
  { href: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
    text: 'https://gloryrojas.github.io/lim-2018-11-bc-core-a',
    file: path.resolve('./src/md-links/ejemplos-md/archivo1.md') } 
];

describe('extraerLinks', () => {
  it('debería ser una función', () => {
    expect(typeof extraerLinks).toBe('function');
  });
  it('debería devolver un array con un objeto por cada link', () => {
    expect(extraerLinks(output2)).toEqual(output3);
  });
});