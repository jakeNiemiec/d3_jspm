SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "src/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "d3-scale": "npm:d3-scale@1.0.3"
  },
  packages: {
    "npm:d3-scale@1.0.3": {
      "map": {
        "d3-time-format": "npm:d3-time-format@2.0.2",
        "d3-interpolate": "npm:d3-interpolate@1.1.1",
        "d3-collection": "npm:d3-collection@1.0.1",
        "d3-format": "npm:d3-format@1.0.2",
        "d3-color": "npm:d3-color@1.0.1",
        "d3-time": "npm:d3-time@1.0.2",
        "d3-array": "npm:d3-array@1.0.1"
      }
    },
    "npm:d3-time-format@2.0.2": {
      "map": {
        "d3-time": "npm:d3-time@1.0.2"
      }
    },
    "npm:d3-interpolate@1.1.1": {
      "map": {
        "d3-color": "npm:d3-color@1.0.1"
      }
    }
  }
});
