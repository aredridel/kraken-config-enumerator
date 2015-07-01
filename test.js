"use strict";

var loadEnvConfig = require('./');
var path = require('path');
var test = require('tap').test;

test('should load config file', function (t) {
    loadEnvConfig('development', path.resolve(__dirname, 'fixtures', 'kraken-1.0-app')).then(function (config) {
        var middleware = config.conf.get('middleware');
        var middlewares = Object.keys(middleware);
        t.ok(isPresent(middlewares, 'on'));
        t.ok(isPresent(middlewares, 'off'));
        t.ok(isPresent(middlewares, 'unspec'));
        t.ok(isPresent(middlewares, 'byRef'));
        t.ok(isPresent(middlewares, 'fileNotFound'));
        t.ok(isPresent(middlewares, 'serverError'));
        t.end(); 
    });
});

test('should have given environment in the loaded config', function (t) {
    loadEnvConfig('development', path.resolve(__dirname, 'fixtures', 'kraken-1.0-app')).then(function (config) {
        var env = config.env;
        t.equal(env, 'development');
    });
    loadEnvConfig('production', path.resolve(__dirname, 'fixtures', 'kraken-1.0-app')).then(function (config) {
        var env = config.env;
        t.equal(env, 'production');
        t.end();
    });
});

function isPresent (arr, value) {
  return arr.indexOf(value) > -1;
}
