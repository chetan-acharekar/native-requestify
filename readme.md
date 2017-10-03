# native-requestify



```
let Requestifier = require('requestifier');
let requestifiterInstance = new Requestifier();
```

options are expected in format
```
let options = {
    host: '', 
    port: '',
    path: '',
    headers: '', // default content type will be application/json if other, specify in contenttype
    method: '',  // http methods ''GET,'POST','PUT'
    body: ''     // json which can be used to post 
}
```

using promise api
```
let httpPromise = requestifiterInstance.promise(options);

httpPromise
    .then((data) => {

    })
    .catch((error) => {

    });
```

using callback api
```
requestifiterInstance.callback(options, (error, result) => {

});
```


inside generator
```
function* () {
    let response = yield requestifier.promise(options);
}
```


/* with async await*/
```
async function () {
    let response = await requestifier.promise(options);
}
```