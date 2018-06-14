"use strict";
const Eris = require("eris");
const cli = require("./cli.js");

module.exports = new Eris(cli.auth.bot.token, cli.config.clientOptions);