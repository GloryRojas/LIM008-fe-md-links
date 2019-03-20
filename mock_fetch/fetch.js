const fetch = () => new Promise((resolve) => {
    resolve([ 
        { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
          text: 'Perrito',
          file: './ejemplo.md',
          stat: 'OK',
          code: 200,
        }
      ]);
});

export default jest.fn(() => {
    return fetch;
})