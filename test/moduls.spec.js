import { recorrerCarpeta } from '../src/md-links/moduls.js';
const path = require('path');

const output = [path.resolve('./src/md-links/ejemplo.md'), path.resolve('./src/md-links/ejemplos-md/archivo1.md')];

describe('recorrerCarpeta', () => {
  it('debería ser una función', () => {
    expect(typeof recorrerCarpeta).toBe('function');
  });
  it('debería devolver un array con un objeto por cada link', () => {
    expect(recorrerCarpeta(path.resolve('./src/md-links'))).toEqual(output);
  });
});
