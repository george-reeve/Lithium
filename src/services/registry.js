"use strict";
const {Library, Registry} = require("patron.js");
const cli = require("./cli.js");

module.exports = new Registry({...cli.config.registryOptions, library: Library.Eris});