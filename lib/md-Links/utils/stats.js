"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
<<<<<<< HEAD
exports.stats = exports.brokenLinks = exports.uniqueLinks = void 0;
const data = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://www.w3schools.com/jsref/jsref_reduce.asp',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reduce2',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Pruebita',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Refere',
  text: 'Prueba',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 404,
  statusText: 'fail'
}];

const uniqueLinks = arrObj => {
  const arrUniques = arrObj.reduce((acum, ele) => {
    if (acum.indexOf(ele.href) === -1) {
      acum.push(ele.href);
    }

    return acum;
  }, []); // console.log(arrUniques);

  return arrUniques.length;
}; // console.log(uniqueLinks(data));


exports.uniqueLinks = uniqueLinks;

const brokenLinks = arrObj => {
  const arrBroken = arrObj.reduce((acum, ele) => {
    if (ele.statusText === 'fail') {
      acum.push(ele.href);
=======
exports.estadisticas = exports.linksRotos = exports.linksUnicos = void 0;

const linksUnicos = arrObj => {
  const arrUnicos = arrObj.reduce((acum, obj) => {
    if (acum.indexOf(obj.href) === -1) {
      acum.push(obj.href);
>>>>>>> 1e15feb6e88a741fbc1916ee59842cbd0a805aee
    }

    return acum;
  }, []);
<<<<<<< HEAD
  return arrBroken.length;
}; // console.log(brokenLinks(data));


exports.brokenLinks = brokenLinks;

const stats = (arrObj, condition) => {
  const valid = condition;
  let result;

  if (valid === 'validate') {
    result = `
Total: ${arrObj.length}
Unicos: ${uniqueLinks(arrObj)}
Rotos: ${brokenLinks(arrObj)}
        `;
  } else {
    result = `
Total: ${arrObj.length}
Unicos: ${uniqueLinks(arrObj)}
     `;
=======
  return arrUnicos.length;
};

exports.linksUnicos = linksUnicos;

const linksRotos = arrObj => {
  const arrRotos = arrObj.filter(obj => obj.stat === 'FAIL');
  return arrRotos.length;
};

exports.linksRotos = linksRotos;

const estadisticas = (arrObj, opcion) => {
  let result;

  if (opcion === 'validate') {
    result = `Total: ${arrObj.length}
Unicos: ${linksUnicos(arrObj)}
Rotos: ${linksRotos(arrObj)}`;
  } else {
    result = `
Total: ${arrObj.length}
Unicos: ${linksUnicos(arrObj)}`;
>>>>>>> 1e15feb6e88a741fbc1916ee59842cbd0a805aee
  }

  return result;
};

<<<<<<< HEAD
exports.stats = stats;
console.log(stats(data));
console.log(stats(data, 'validate'));
=======
exports.estadisticas = estadisticas;
>>>>>>> 1e15feb6e88a741fbc1916ee59842cbd0a805aee
