# Interface Rules

## Lists for pages / posts API

To get the lists of pages/posts, you need to pay attention to `Query Params`

The GET request for this interface (/list) requires:

- Type parameter
  - `all` (display all, **default**)
  - `num` (return length)
  - `list` (returns the list without returning the contents)
  - `limit` (limit the list length, need to cooperate with `query.page`)
- Page parameter (when type is `limit`)

<gray>Query is flawed and must be banned</gray>

```js {5}
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://localhost:3000/api/v1/pages/list?type=limit',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

## Comments API


**First point**: In frontend processing, the `isOwner` field needs to be set to `1` in the POST request if the owner is not present. 

> This is the first layer of protection to impersonate the host comment; The second layer will appear in the previous 2 headers setting, with Token authentication, to protect owner comments

**Second point**: you need to do the first layer of `XSS protection`, although the backend has done a layer of XSS protection, but to improve security, please be sure to do XSS processing in the frontend

**Third point**: It is recommended to get the `ipAddress` and the `userAgent` to fill it into the POST form before issuing the request to improve the backend response speed, but this is limited by the *visitor aspect*. 

> You can also choose not to fetch the IP and user agent for this request.

```js {6,9}
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'type': 'post',
  'path': 'hello_well',
  'content': '快递淘宝 <script>alert(\'xss\')</script>',
  'author': 'wibusbot',
  'owner': 'wibusbot',
  'isOwner': '1',
  'email': 'wibus@qq.com',
  'url': 'xxxxx',
  'key': 'xxxxx',
  'hasChild': 'false',
  'ipAddress': 'xxxx',
  'userAgent': 'xxxx',
  'state': '0' 
});
var config = {
  method: 'post',
  url: 'http://localhost:3000/api/v1/comment/create',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

::: warning
The above example does not do `XSS filtering` for the article content, but be aware of this in real development.
:::