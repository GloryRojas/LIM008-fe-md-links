import { recorrerCarpeta } from '../src/md-links/moduls.js';

const output = ['C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\ejemplo.md', 'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\ejemplos-md\\archivo1.md'];

describe('recorrerCarpeta', () => {
  it('debería ser una función', () => {
    expect(typeof recorrerCarpeta).toBe('function');
  });
  it('debería devolver un array con un objeto por cada link', () => {
    expect(recorrerCarpeta(`${process.cwd()}\\src\\md-links`)).toEqual(output);
  });
});
