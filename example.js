let querystring = require('querystring')
let Requestifier = require('native-requestify');
let requestifiterInstance = new Requestifier();


/**
 * lets say we have get restful endpoint at url http://127.0.0.1:3000/native
 */
let options = {
    host: '127.0.0.1',
    port: 3000,
    path: '/native',
    headers: '', // default content type will be application/json if other, specify in contenttype
    method: 'GET', // http methods ''GET,'POST','PUT'
    body: '' // json which can be used to post 
}


/**
 * in promise way
 */
let httpPromise = requestifiterInstance.promise(options);
httpPromise
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    });


/**
 * in callback way
 */
requestifiterInstance.callback(options, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
});