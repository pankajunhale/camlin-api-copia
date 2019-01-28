//set configuration for enviornment
'use strict';
const enviornments = {};

enviornments.staging ={
    'port':3000,
    'envName':'staging'
};

enviornments.production = {
    'port':5000,
    'envName':'production'
};

//determine current env
const currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';  
//check the current env, else default to staging
const enviornmentToExport = typeof(enviornments[currentEnvironment]) == 'object' ? enviornments[currentEnvironment] : enviornments.staging;
//export the module
module.exports = enviornmentToExport;
