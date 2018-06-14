"use strict";
process.env.TZ = "bst";

const patron = require('patron.js');
const path = require('path');
const cli = require('./services/cli.js');
const Logger = require('./utilities/Logger.js');

async function requirePathJoin(dir) {
    return patron.RequireAll(path.join(__dirname, dir));
}

(async () => {
    await cli.fetchIni();

    const client = require('./services/client.js');
    const registry = require('./services/registry.js');
})