const pluginPkg = require("../../package.json");

const pluginId = pluginPkg.name.replace(/^@colton75\//i, "");

module.exports = pluginId;
