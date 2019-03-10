import {linksUnicos, linksRotos} from '../src/md-Links/utils/stats.js';

const arrLinks = [ 
                { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
                text: 'Perrito',
                file: 'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplo.md',
                stat: 'OK',
                code: 200,
                },
                { href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBA3ZYqSO6GqIcBnCU0mrW8gCQhSC0OE1UsOqTytQoiqVFSf8z',
                text: 'Perrito 2',
                file: 'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplo.md',
                stat: 'OK',
                code: 200,
                },
                { href: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
                text: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
                file: 'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplos-md\\archivo1.md', 
                stat: 'FAIL',
                code: 404
                }
            ];

describe('linksUnicos', () => {
    it('debería ser una función', () => {
        expect(typeof linksUnicos).toBe('function');
    });
    it('Debería retornar true si la ruta es absoluta', () => {
        expect(linksUnicos(arrLinks)).toBe(3)
    });
})
describe('linksRotos', () => {
    it('debería ser una función', () => {
        expect(typeof linksRotos).toBe('function');
    });
    it('Debería retornar true si la ruta es absoluta', () => {
        expect(linksRotos(arrLinks)).toBe(1)
    });
})