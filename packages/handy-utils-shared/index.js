function getPkgVersion(path) {
  return require(path).version;
}

module.exports = {
  symlink: require("./lib/symlink"),
  installDeps: require("./lib/installDeps"),
  extendPkgJson: require("./lib/extendPackageJson.js"),
  getPkgVersion
};
