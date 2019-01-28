'use strict';
/*
    - Write data to file
    - Open File
    - Delete File
    - Read from File
*/

//dependencies
var fs = require('fs');
var path = require('path');

//container for the module
let lib = {};
lib.baseDir = path.join(__dirname,'/../.data/');

lib.create = function(dirName,fileName,data,callback){
    //open the file
    const filePath = path.join(__dirname,'..','.data',dirName,fileName);
    console.log(filePath);
    fs.open(filePath,'wx',function(err,fileDescriptor){
        if(!err && fileDescriptor){
            //convert the data to string
            //file always store the data in string format..
            let stringify_data = JSON.stringify(data);
            
            //write the file
            fs.writeFile(fileDescriptor,stringify_data,function(err){
                if(!err){
                    //close the file
                    fs.close(fileDescriptor,function(err){
                        if(!err){
                            callback(false);
                        }
                        else{
                            callback('Error in closing file: ', filePath);
                        }
                    })
                }
                else{
                    callback('Error in writing data to file: ', filePath);
                }
            });
        }
        else{
            callback('Not able to create file, It may be already exist:', filePath);
        }
    });
}
lib.isFileExist = function(dirName,fileName){
    const filePath = path.join(__dirname,'..','.data',dirName,fileName);   
    try {
        return fs.existsSync(filePath);    
    } catch (error) {
       return true; 
    }
}
lib.delete = function(){
    
}

//module & export
module.exports = lib;