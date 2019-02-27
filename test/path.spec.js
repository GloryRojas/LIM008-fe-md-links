import { rutaEsAbsoluta, transformarAAbsoluta } from '../src/md-Links/utils/path.js';

describe('rutaEsAbsoluta', () => {
    it('debería ser una función', () => {
        expect(typeof rutaEsAbsoluta).toBe('function');
    });
    it('Debería retornar true si la ruta es absoluta', () => {
        expect(rutaEsAbsoluta('C:\\foo\\bar.js')).toBe(true)
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
        expect(transformarAAbsoluta('../foo/bar')).toBe('C:\\Users\\Laboratoria\\Documents\\Projects\\foo\\bar')
    });
  })

