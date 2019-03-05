import { rutaEsAbsoluta, transformarAAbsoluta, filtrarArchivosMd} from '../src/md-Links/utils/path.js';
import { rutaEsArchivo, extraerLinks } from '../src/md-Links/utils/filesystem.js';

const input1 = [ 
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplo.md',
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplos-md\\archivo1.md',
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplos-md\\archivo2.html',
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplos-md\\archivo3.txt',
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplos-md\\archivo5.js',
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\filesystem.js',
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\path.js' 
                ];

const output2 = [ 
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplo.md',
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplos-md\\archivo1.md' 
                ];

const output3 = [ 
                { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
                  text: 'Perrito',
                  file: 'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplo.md' },
                { href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBA3ZYqSO6GqIcBnCU0mrW8gCQhSC0OE1UsOqTytQoiqVFSf8z',
                  text: 'Perrito 2',
                  file: 'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplo.md' },
                { href: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
                  text: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
                  file: 'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplos-md\\archivo1.md' } 
                ];

describe('rutaEsAbsoluta', () => {
    it('debería ser una función', () => {
        expect(typeof rutaEsAbsoluta).toBe('function');
    });
    it('Debería retornar true si la ruta es absoluta', () => {
        expect(rutaEsAbsoluta('/foo/bar')).toBe(true)
    });
    it('Debería retornar false si la ruta no es absoluta', () => {
        expect(rutaEsAbsoluta('../foo/bar')).toBe(false)
    });
})
describe('transformarAAbsoluta', () => {
    it('debería ser una función', () => {
        expect(typeof transformarAAbsoluta).toBe('function');
    });
    it('Debería transformar una ruta relativa en absoluta', () => {
        expect(transformarAAbsoluta('C:\\Users\\Laboratoria\\Documents\\Projects\\foo\\bar')).toBe('C:\\Users\\Laboratoria\\Documents\\Projects\\foo\\bar')
    });
})
describe('rutaEsArchivo', () => {
    it('debería ser una función', () => {
        expect(typeof rutaEsArchivo).toBe('function');
    });
    it.skip('debería devolver false si ruta no es archivo', () => {
        expect(rutaEsArchivo('C:\\Users\\Laboratoria\\Documents\\Projects')).toBe(false);        
    });
    it.skip('debería devolver true si ruta es archivo', () => {
        expect(rutaEsArchivo('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\package.json')).toBe(true);        
    });
    it('debería devolver un array si ruta es archivo', () => {
        expect(rutaEsArchivo('C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LINKS.docx')).toEqual(['C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LINKS.docx']);        
    });
})
describe('filtrarArchivosMd', () => {
    it('debería ser una función', () => {
        expect(typeof filtrarArchivosMd).toBe('function');
    });
    it('debería devolver un array con todas las rutas de archivos con extensión .md', () => {
        expect(filtrarArchivosMd(input1)).toEqual(output2);
    });
})
describe('extraerLinks', () => {
    it('debería ser una función', () => {
        expect(typeof extraerLinks).toBe('function');
    });
    it('debería devolver un array con todas las rutas de archivos con extensión .md', () => {
        expect(extraerLinks(output2)).toEqual(output3);
    });
})