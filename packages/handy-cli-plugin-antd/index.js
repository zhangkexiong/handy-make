const { extendPkgJson } = require("handy-utils-shared");
const pkgExtends = {
  typescript: {
    dependencies: {
      antd: "^3.10.3"
    },
    devDependencies: {
      "ts-import-plugin": "^1.5.5"
    }
  },
  normal: {
    dependencies: {
      antd: "^3.10.3"
    },
    devDependencies: {
      "babel-plugin-import": "^1.11.0"
    }
  }
};

function extendPkg(appDir, useTypescript) {
  const prop = useTypescript ? "typescript" : "normal";
  extendPkgJson(appDir)(pkg => {
    pkg.dependencies = Object.assign(pkg.dependencies, pkgExtends[prop].dependencies);
    pkg.devDependencies = Object.assign(pkg.devDependencies, pkgExtends[prop].devDependencies);
    return pkg;
  });
}

module.exports = (appDir, answer) => {
  const useTypescript = answer.features.includes("typescript");
  extendPkg(appDir, useTypescript);
};
