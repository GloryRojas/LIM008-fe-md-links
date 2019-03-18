import {linksUnicos, linksRotos, estadisticas } from '../src/stats.js';

const arrLinks = [ 
  { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
    text: 'Perrito',
    file: 'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\ejemplo.md',
    stat: 'OK',
    code: 200,
  },
  { href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBA3ZYqSO6GqIcBnCU0mrW8gCQhSC0OE1UsOqTytQoiqVFSf8z',
    text: 'Perrito 2',
    file: 'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\ejemplo.md',
    stat: 'OK',
    code: 200,
  },
  { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
    text: 'Perrito2',
    file: 'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\ejemplo.md',
    stat: 'OK',
    code: 200,
  },
  { href: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
    text: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
    file: 'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\ejemplos-md\\archivo1.md', 
    stat: 'FAIL',
    code: 404
  }
];

const output = 'Total: 4\nUnicos: 3\nRotos: 1';
const output1 = 'Total: 4\nUnicos: 3';

describe('linksUnicos', () => {
  it('debería ser una función', () => {
    expect(typeof linksUnicos).toBe('function');
  });
  it('Debería retornar la cantidad de links unicos', () => {
    expect(linksUnicos(arrLinks)).toBe(3);
  });
});
describe('linksRotos', () => {
  it('debería ser una función', () => {
    expect(typeof linksRotos).toBe('function');
  });
  it('Debería retornar la cantidad de links rotos', () => {
    expect(linksRotos(arrLinks)).toBe(1);
  });
});
describe('estadisticas', () => {
  it('debería ser una función', () => {
    expect(typeof estadisticas).toBe('function');
  });
  it('Debería retornar un template con informacion de los links', () => {
    expect(estadisticas(arrLinks)).toEqual(output1);
  });
  it('Debería retornar un template con informacion de los links validados', () => {
    expect(estadisticas(arrLinks, 'validate')).toEqual(output);
  });
});