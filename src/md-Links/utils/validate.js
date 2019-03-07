const fetch = require('node-fetch') ;  

export const estadoLink = (link) => {
    fetch(link).then((response) => console.log(response.status));
}
        //.catch((err) => err.message)

console.log(estadoLink('https://www.npmjs.com/package/node-fetch#iface-body'));

export const validarLinks = (arrayLinks) => {
    const arrLinks = arrayLinks;

    for(let i=0; i<arrLinks.length; i++){
        let link = arrLinks[i];
    
    }
 }
