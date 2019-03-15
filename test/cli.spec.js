import { cli } from '../src/cli.js';

const input = ['./src/', '--validate', '--stats'];
const input4 = ['./src/', '--stats', '--validate'];
const input1 = ['./src/', '--stats'];
const input2 = ['./src/', '--validate'];
const input3 = ['./src/'];
const output1 = 'Total: 3\nUnicos: 3\nRotos: 1';
const output2 = 'Total: 3\nUnicos: 3';
const output3 = `${process.cwd()}\\src\\md-links\\ejemplo.md, http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg, Perrito, 200, OK\n${process.cwd()}\\src\\md-links\\ejemplo.md, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBA3ZYqSO6GqIcBnCU0mrW8gCQhSC0OE1UsOqTytQoiqVFSf8z, Perrito 2, 200, OK\n${process.cwd()}\\src\\md-links\\ejemplos-md\\archivo1.md, https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;, https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;, 404, FAIL\n`;
const output4 = `${process.cwd()}\\src\\md-links\\ejemplo.md, http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg, Perrito, , \n${process.cwd()}\\src\\md-links\\ejemplo.md, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBA3ZYqSO6GqIcBnCU0mrW8gCQhSC0OE1UsOqTytQoiqVFSf8z, Perrito 2, , \n${process.cwd()}\\src\\md-links\\ejemplos-md\\archivo1.md, https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;, https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;, , \n`;

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
  it('debería devolver un template con estadisticas de los links validados', (done) => {
    return cli(input4).then(resp => {
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
  it('debería devolver un template con estadisticas de los links', (done) => {
    return cli(input2).then(resp => {
      expect(resp).toEqual(output3);
      done();
    });
  });
  it('debería devolver un template con estadisticas de los links', (done) => {
    return cli(input3).then(resp => {
      expect(resp).toEqual(output4);
      done();
    });
  });
});