import { recorrerCarpeta } from '../src/md-links/moduls.js';

const output = [`${process.cwd()}\\src\\md-links\\ejemplo.md`, `${process.cwd()}\\src\\md-links\\ejemplos-md\\archivo1.md`];

describe('recorrerCarpeta', () => {
  it('debería ser una función', () => {
    expect(typeof recorrerCarpeta).toBe('function');
  });
  it('debería devolver un array con un objeto por cada link', () => {
    expect(recorrerCarpeta(`${process.cwd()}\\src\\md-links`)).toEqual(output);
  });
});
