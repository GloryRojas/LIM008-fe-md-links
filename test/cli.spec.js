import { cli } from '../src/cli.js';

const input = ['.\\src\\', '--validate', '--stats'];
const input1 = ['.\\src\\', '--stats'];
const output1 = 'Total: 3\nUnicos: 3\nRotos: 1';
const output2 = 'Total: 3\nUnicos: 3';

describe('CLI', () => {
  it('debería ser una función', () => {
    expect(typeof cli).toBe('function');
  });
  it('debería devolver un template con estadisticas de los links validados', (done) => {
    return cli(input).then(resp => {
      expect(resp).toEqual(output1);
      done();
    });
  });
  it('debería devolver un template con estadisticas de los links', (done) => {
    return cli(input1).then(resp => {
      expect(resp).toEqual(output2);
      done();
    });
  });
});