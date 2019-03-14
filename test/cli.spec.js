import { cli } from '../src/cli.js';

const input = ['./src', '--validate', '--stats'];
const output1 = 'C:\Users\Laboratoria\Documents\Projects\LIM008-fe-md-links\src\md-links\ejemplo.md, http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal524913364_noticia_normal.jpg, Perrito'

describe('CLI', () => {
    it('debería ser una función', () => {
      expect(typeof cli).toBe('function');
    });
    it('debería devolver false si ruta no es archivo', () => {
      expect(cli(input)).toEqual(output1);
    });
});