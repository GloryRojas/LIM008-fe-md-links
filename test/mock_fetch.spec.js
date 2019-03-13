import { validarLinks } from '../src/md-Links/utils/validate.js';

const fetchMock = require('../mock_fetch/mock.js');
fetchMock.config.sendAsJson = false;
fetchMock.config.fallbackToNetwork = true;

const input = [ 
    { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
      text: 'Perrito',
      file: `${process.cwd()}\\src\\md-links\\utils\\ejemplo.md` }];

const output = [ 
    { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
    text: 'Perrito',
    file: `${process.cwd()}\\src\\md-links\\utils\\ejemplo.md`,
    stat: 'OK',
    code: 200,
    }];
const input1 = [ 
    { href: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
    text: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
    file: `${process.cwd()}\\src\\md-links\\utils\\ejemplos-md\\archivo1.md` }];

const output1 = [ 
    { href: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
    text: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
    file: `${process.cwd()}\\src\\md-links\\utils\\ejemplos-md\\archivo1.md`, 
    stat: 'FAIL',
    code: 404
    }];
describe('validarLinks', () => {
    it('debería ser una función', () => {
        expect(typeof validarLinks).toBe('function');
    });
    it('Debería retornar un array con objetos por cada link con informacion validada', async () => {
        fetchMock.get('http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg', {status: 200, statusText: 'OK'});
        const linksValidos = await validarLinks(input)
        expect(linksValidos).toEqual(output)
    });
    it('Debería retornar un array con objetos por cada link con informacion validada', async () => {
        fetchMock.get('https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;', {status: 404, statusText: 'FAIL'});
        const linksValidos = await validarLinks(input1)
        expect(linksValidos).toEqual(output1)
    });
})