import { validarLinks } from '../src/md-Links/validate.js';

const output3 = [ 
  { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
    text: 'Perrito',
    file: `${process.cwd()}/src/md-links/ejemplo.md` },
  { href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBA3ZYqSO6GqIcBnCU0mrW8gCQhSC0OE1UsOqTytQoiqVFSf8z',
    text: 'Perrito 2',
    file: `${process.cwd()}/src/md-links/ejemplo.md` },
  { href: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
    text: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
    file: `${process.cwd()}/src/md-links/ejemplo.md/archivo1.md` } 
];

const output4 = [ 
  { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
    text: 'Perrito',
    file: `${process.cwd()}/src/md-links/ejemplo.md`,
    stat: 'OK',
    code: 200,
  },
  { href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBA3ZYqSO6GqIcBnCU0mrW8gCQhSC0OE1UsOqTytQoiqVFSf8z',
    text: 'Perrito 2',
    file: `${process.cwd()}/src/md-links/ejemplo.md`,
    stat: 'OK',
    code: 200,
  },
  { href: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
    text: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
    file: `${process.cwd()}/src/md-links/ejemplo.md/archivo1.md`, 
    stat: 'FAIL',
    code: 404
  }
];

describe('validarLinks', () => {
  it('debería ser una función', () => {
    expect(typeof validarLinks).toBe('function');
  });
  it('debería devolver un array con todas las propiedades de los links y agregandole status y code a cada uno', (done) => {
    validarLinks(output3)
      .then(resp => {
        expect(resp).toEqual(output4);
        done();
      });
  });
});