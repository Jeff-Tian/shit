var config = {};

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'dev') {
    config = require('./config_dev.js');
} else {
    config = require('./config_prd.js');
}

module.exports = config;