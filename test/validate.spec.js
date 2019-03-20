import { validarLinks } from '../src/md-Links/validate.js';
import mockFetch from '../mock_fetch/fetch.js';
global.fetch = mockFetch();

const output3 = [ 
  { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
    text: 'Perrito',
    file: './ejemplo.md' }
];

const output4 = [ 
  { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
    text: 'Perrito',
    file: './ejemplo.md',
    stat: 'OK',
    code: 200,
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