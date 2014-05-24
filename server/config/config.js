var path = require('path');
var rootPath = path.normalize(__dirname + '../../../');
// console.log(rootPath);
module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/certastic',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://guzziodb:WVVXk5KuCPDdB3P5@ds041377.mongolab.com:41377/guzziodb',
        port: process.env.PORT || 8080
    }
};