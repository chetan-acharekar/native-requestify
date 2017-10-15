# native-requestify

Why ?
Performance of native packages is better than bluebird or Q.
Freedom of selecting content type.
Also single library which works for both callback and promises.

[Check this blog post for details] (https://medium.com/@chetan.acharekar/js-native-promises-performance-3010a64459dd)


```
let Requestifier = require('native-requestify');
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
    let response = yield requestifiterInstance.promise(options);
}
```


 with async await
```
async function () {
    let response = await requestifiterInstance.promise(options);
}
```
Sample example is available in exmaple.js
