"use strict";
var path=require('path');

module.exports = function(){
  //production
  //dev
  const configFile = (process.env.NODE_ENV || "dev")+'.config.json';
  const readConfig = function(config,dir){
		const filepath = path.join(dir,configFile);
		if (! path.existsSync(filepath)) { 
			return config;
		}
		try{
			let newConfig = require(path.join(dir,configFile));
			return readConfig(Object.assign(newConfig, config),path.join(dir,'../'));
		}catch(e){
			console.log("error: ",e);
			return config;
		}
  }
  return readConfig({},path.resolve('./'));
}

