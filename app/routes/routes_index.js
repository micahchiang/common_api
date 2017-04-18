const routesDirectory = require('./routes_directory');

module.exports = function (app, db) {
    routesDirectory(app,db);
}