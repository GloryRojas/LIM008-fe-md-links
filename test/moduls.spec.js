import { transformarAAbsoluta, filtrarArchivosMd} from '../src/md-Links/moduls.js';

const input1 = [ 
  '.\\md-links\\ejemplo.md',
  '.\\md-links\\ejemplos-md\\archivo1.md',
  '.\\md-links\\ejemplos-md\\archivo2.html',
  '.\\md-links\\ejemplos-md\\archivo3.txt',
  '.\\md-links\\ejemplos-md\\archivo5.js',
  '.\\md-links\\filesystem.js',
  '.\\md-links\\path.js' 
];

const output2 = [ 
  '.\\md-links\\ejemplo.md',
  '.\\md-links\\ejemplos-md\\archivo1.md' 
];

describe('transformarAAbsoluta', () => {
  it('debería ser una función', () => {
    expect(typeof transformarAAbsoluta).toBe('function');
  });
  it('Debería transformar una ruta relativa en absoluta', () => {
    expect(transformarAAbsoluta('..\\LIM008-fe-md-links')).toBe(`${process.cwd()}`);
  });
});
describe('filtrarArchivosMd', () => {
  it('debería ser una función', () => {
    expect(typeof filtrarArchivosMd).toBe('function');
  });
  it('debería devolver un array con todas las rutas de archivos con extensión .md', () => {
    expect(filtrarArchivosMd(input1)).toEqual(output2);
  });
});

