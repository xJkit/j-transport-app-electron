# Transportation Lookup System
大台北交通路況查詢實作，使用工具詳見 ``package.json``. 我使用 [request](https://github.com/request/request) 在 express 中轉發請求，繞過瀏覽器的 AJAX 同源政策。

### Installation
```shell
$ yarn
```

### Fire up server
```shell
$ yarn dev
$ yarn start
```
Server fires up at http://localhost:3000.

You can use ``$ yarn start:auto`` via [nodemon](https://github.com/remy/nodemon) to watch the server whenever making changes.
