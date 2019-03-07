const fetch = require('node-fetch') ;  

/* export const estadoLink = (link) => {
    fetch(link)
        .then((response) => {
            console.log(response.status)
            return response;
        });
}
        //.catch((err) => err.message)

console.log(estadoLink('https://www.npmjs.com/package/node-fetch#iface-body'));
 */
const output4 = [ 
    { href: 'http://as01.epimg.net/epik/imagenes/2018/04/28/portada/1524913221_572475_1524913364_noticia_normal.jpg',
    text: 'Perrito',
    file: 'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplo.md'
    },
    { href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBA3ZYqSO6GqIcBnCU0mrW8gCQhSC0OE1UsOqTytQoiqVFSf8z',
    text: 'Perrito 2',
    file: 'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplo.md'
    },
    { href: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
    text: 'https://gloryrojas.github.io/lim-2018-11-bc-core-am-cipher/src/&quot;',
    file: 'C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\md-links\\utils\\ejemplos-md\\archivo1.md'
    }
    ];

export const validarLinks = (arrayObjetos) => {
    const arrObj = arrayObjetos;
    const arrPromesas = arrObj.map(link => fetch(link.href)
   .then((response)=>{
        if(response.status >= 200 && response.status < 400){
            link.code = response.status;
            link.stat = 'OK';
        }else if(response.status >= 400 && response.status < 600){
            link.code = response.status;
            link.stat = 'FAIL';
        }
   }))
    Promise.all(arrPromesas)
        .then(() => console.log(arrObj))
        .catch((err) => err.message)
 }

 validarLinks(output4);
