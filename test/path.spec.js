import { rutaEsAbsoluta, transformarAAbsoluta} from '../src/md-Links/utils/path.js';
import { rutaEsArchivo } from '../src/md-Links/utils/filesystem.js';
import { filtrarArchivosMd } from '../src/md-Links/utils/md.js';

const output = ['C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\src\\md-links\\index.js',
                'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\src\\md-links\\utils\\filesystem.js',  
                "C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\src\\md-links\\utils\\md.js", 
                "C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\src\\md-links\\utils\\path.js"
            ];
const input1 = ['.\\Documents\\Projects\\.gitignore',
                '.\\Documents\\Projects\\arch2.txt',
                '.\\Documents\\Projects\\arch3.md',
                '.\\Documents\\Projects\\arch4.exe',
                '.\\Documents\\Projects\\src\\arch5.md'
            ];
const output2 = ['.\\Documents\\Projects\\arch3.md',
                '.\\Documents\\Projects\\src\\arch5.md'
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
        expect(rutaEsArchivo('C:\\Users\\Laboratoria\\Documents\\pruebas.txt')).toEqual(["C:\\Users\\Laboratoria\\Documents\\pruebas.txt"]);        
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
