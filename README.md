# nonfig
适用于nodejs项目的轻量的多层配置读取模块。

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

/shop/index.js：

  var config = require('nonfig')();
  // config : {"a":1,"b":2}
