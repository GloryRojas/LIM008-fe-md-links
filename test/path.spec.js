import { rutaEsAbsoluta, transformarAAbsoluta, rutaEsArchivo } from '../src/md-Links/utils/path.js';

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
    it('debería devolver false si ruta no es archivo', () => {
        expect(rutaEsArchivo('C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links')).toBe(false);
        console.log(rutaEsArchivo);
        
    });
  })

