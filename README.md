kraken-config-enumerator
=======================

Simple environment configuration file loader for kraken app

*Note*: This is for tool use and not a normal way to get kraken configs

## Usage
```javascript
var loadEnvConfig = require('kraken-config-enumerator');
loadEnvConfig('development', '/path/to/app');
```

### loadEnvConfig(env, appdir)
* `env` - environment from which you want to load the configuration from.
* `appdir` - path to your kraken application

```javascript
'use strict';

var path = require('path');
var loadEnvConfig = require('kraken-config-enumerator');

var appdir = path.join(__dirname + 'my-kraken-app');
loadEnvConfig('development', appdir); //returns a promise object having loaded environment configuration
