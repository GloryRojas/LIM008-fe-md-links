import { validarLinks } from '../src/md-Links/validate.js';

const fetchMock = require('../mock_fetch/mock.js');
fetchMock.config.sendAsJson = false;
fetchMock.config.fallbackToNetwork = true;

const input = [ 
  { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg'}];

const output = [ 
  { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
    stat: 'OK',
    code: 200,
  }];
const input1 = [ 
  { href: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;'}];

const output1 = [ 
  { href: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
    stat: 'FAIL',
    code: 404
  }];
describe('validarLinks', () => {
  it('debería ser una función', () => {
    expect(typeof validarLinks).toBe('function');
  });
  it('Debería retornar un array con objetos por cada link con informacion validada', async() => {
    fetchMock.get('http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg', {code: 200, stat: 'OK'});
    const linksValidos = await validarLinks(input);
    expect(linksValidos).toEqual(output);
  });
  it('Debería retornar un array con objetos por cada link con informacion validada', async() => {
    fetchMock.get('https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;', {code: 404, stat: 'FAIL'});
    const linksValidos = await validarLinks(input1);
    expect(linksValidos).toEqual(output1);
  });
});