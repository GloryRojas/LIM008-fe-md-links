import { rutaEsAbsoluta, transformarAAbsoluta, filtrarArchivosMd} from '../src/md-Links/path.js';

const input1 = [ 
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\ejemplo.md',
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\ejemplos-md\\archivo1.md',
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\ejemplos-md\\archivo2.html',
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\ejemplos-md\\archivo3.txt',
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\ejemplos-md\\archivo5.js',
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\filesystem.js',
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\path.js' 
                ];

const output2 = [ 
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\ejemplo.md',
                'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\ejemplos-md\\archivo1.md' 
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
        expect(transformarAAbsoluta('..\\LIM008-fe-md-links')).toBe(`${process.cwd()}`)
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

