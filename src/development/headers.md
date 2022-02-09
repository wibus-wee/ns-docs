# The headers setting in request

::: warning
When requesting the interface, if the administrator has logged in, please be sure to add the `Authorization` field in headers and its authorized Token Type is `Bearer`. 
:::

Although detection of this Token is not fully used in backend processing, to prevent future version migration problems, Write the standard headers.

```js {6,7,8}
let axios = require('axios');

let config = {
  method: 'get',
  url: 'http://localhost:3000/api/v1/ping',
  headers: { 
    'Authorization': 'Bearer HereIsToken'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```