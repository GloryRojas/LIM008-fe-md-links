import { rutaEsArchivo, leerArchivo, leerDirectorio} from '../src/md-Links/fs.js'; 

// Declarando parametros para las funciones a testear
const rutaArchivo = `${process.cwd()}\\src\\md-Links\\ejemplos-md\\archivo3.txt`;
const rutaDirectorio = `${process.cwd()}\\src\\md-Links`;
const output = 'Hola Mundo';
const output1 = ["ejemplo.md", "ejemplos-md", "fs.js", "link.js", "moduls.js", "path.js", "validate.js"];

// Test unitarios para el método fs
describe('rutaEsArchivo', () => {
    it('debería ser una función', () => {
        expect(typeof rutaEsArchivo).toBe('function');
    });
    it('debería devolver false si ruta no es archivo', () => {
        expect(rutaEsArchivo(rutaDirectorio)).toBe(false);        
    });
    it('debería devolver true si ruta es archivo', () => {
        expect(rutaEsArchivo(rutaArchivo)).toBe(true);        
    });
})
describe('leerArchivo', () => {
    it('debería ser una función', () => {
        expect(typeof leerArchivo).toBe('function');
    });
    it('debería devolver el contenido de un archivo', () => {
        expect(leerArchivo(rutaArchivo)).toBe(output);        
    });
})
describe('leerDirectorio', () => {
    it('debería ser una función', () => {
        expect(typeof leerDirectorio).toBe('function');
    });
    it('debería devolver todos los elementos de un directorio', () => {
        expect(leerDirectorio(rutaDirectorio)).toEqual(output1);        
    });
})
