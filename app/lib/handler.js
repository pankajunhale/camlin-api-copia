'use strict';
//dependencies
var fileService = require('./file.service');
const myHandler = {};
myHandler.sample = function(data,callback){
    callback(406,{'Id':1,'CreatedAt':Date.now()})
}
myHandler.notFound = function(data,callback){
    callback(404);    
}

myHandler.createuser = function(data,callback){
    let dirName = 'users';
    let fileName = data.payload.phone + ".json";    
    if(!fileService.isFileExist(dirName,fileName)){
        fileService.create(dirName,fileName,data.payload,function(result){
            callback(200,{'IsSuccess':true});
        });
    }
    else{
        callback(500,{'Error':'User already exist'});
    }
}


  
module.exports.handler = {    
    sample:myHandler.sample,
    notFound:myHandler.notFound,
    createuser:myHandler.createuser      
}


