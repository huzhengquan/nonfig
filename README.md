# nonfig
适用于nodejs项目的轻量的多层配置读取模块。

  [![NPM version][npm-image]][npm-url]

## 安装

```
npm install nonfig
```

## 配置

process.env.NODE_ENV = production/dev

##  例

项目结构：

    /  
    /dev.config.json  
    /shop/  
    /shop/dev.config.json  
    /shop/index.js

/dev.config.json

    {"a":1}

/shop/dev.config.json

    {"b":2}

/shop/index.js

    var config = require('nonfig')(__dirname);
    // config : {"a":1,"b":2}

# License

  MIT

[npm-image]: https://img.shields.io/npm/v/nonfig.svg?style=flat-square
[npm-url]: https://npmjs.org/package/nonfig
