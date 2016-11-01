SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "play-with-vidom/": "webapp/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "core-js": "npm:core-js@2.4.1",
      "babel-runtime": "npm:babel-runtime@6.18.0",
      "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.18.0",
      "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.16.1",
      "babel-preset-es2015": "npm:babel-preset-es2015@6.18.0",
      "babel-preset-stage-2": "npm:babel-preset-stage-2@6.18.0",
      "jspm-caddy-hmr": "npm:jspm-caddy-hmr@0.2.10",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17",
      "babel-plugin-vidom-jsx": "npm:babel-plugin-vidom-jsx@0.3.1"
    },
    "packages": {
      "npm:babel-plugin-vidom-jsx@0.3.1": {
        "map": {
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-runtime@6.18.0": {
        "map": {
          "regenerator-runtime": "npm:regenerator-runtime@0.9.5",
          "core-js": "npm:core-js@2.4.1"
        }
      },
      "npm:jspm-caddy-hmr@0.2.10": {
        "map": {
          "path": "npm:path@0.12.7",
          "lodash": "npm:lodash@4.16.6",
          "css": "github:systemjs/plugin-css@0.1.32"
        }
      },
      "npm:path@0.12.7": {
        "map": {
          "util": "npm:util@0.10.3",
          "process": "npm:process@0.11.9"
        }
      },
      "npm:util@0.10.3": {
        "map": {
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:babel-plugin-transform-class-properties@6.18.0": {
        "map": {
          "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-helper-function-name@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.18.0",
          "babel-template": "npm:babel-template@6.16.0",
          "babel-types": "npm:babel-types@6.18.0"
        }
      },
      "npm:babel-traverse@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "babel-code-frame": "npm:babel-code-frame@6.16.0",
          "babylon": "npm:babylon@6.13.1",
          "babel-messages": "npm:babel-messages@6.8.0",
          "invariant": "npm:invariant@2.2.1",
          "lodash": "npm:lodash@4.16.6",
          "debug": "npm:debug@2.2.0",
          "globals": "npm:globals@9.12.0"
        }
      },
      "npm:babel-helper-get-function-arity@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0"
        }
      },
      "npm:babel-types@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "to-fast-properties": "npm:to-fast-properties@1.0.2",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.16.6"
        }
      },
      "npm:babel-template@6.16.0": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babylon": "npm:babylon@6.13.1",
          "lodash": "npm:lodash@4.16.6"
        }
      },
      "npm:babel-code-frame@6.16.0": {
        "map": {
          "esutils": "npm:esutils@2.0.2",
          "chalk": "npm:chalk@1.1.3",
          "js-tokens": "npm:js-tokens@2.0.0"
        }
      },
      "npm:babel-messages@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:invariant@2.2.1": {
        "map": {
          "loose-envify": "npm:loose-envify@1.3.0"
        }
      },
      "npm:loose-envify@1.3.0": {
        "map": {
          "js-tokens": "npm:js-tokens@2.0.0"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "has-ansi": "npm:has-ansi@2.0.0",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "supports-color": "npm:supports-color@2.0.0",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "ansi-styles": "npm:ansi-styles@2.2.1"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:debug@2.2.0": {
        "map": {
          "ms": "npm:ms@0.7.1"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:babel-preset-es2015@6.18.0": {
        "map": {
          "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.16.1",
          "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.18.0",
          "babel-plugin-transform-es2015-modules-umd": "npm:babel-plugin-transform-es2015-modules-umd@6.18.0",
          "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.9.0",
          "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.18.0",
          "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.18.0",
          "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.18.0",
          "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0",
          "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.8.0",
          "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0",
          "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.18.0",
          "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.18.0",
          "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0",
          "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0",
          "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0",
          "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.18.0",
          "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.8.0",
          "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.8.0",
          "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.8.0",
          "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.8.0",
          "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
          "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.18.0",
          "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.18.0",
          "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.18.0"
        }
      },
      "npm:babel-plugin-transform-regenerator@6.16.1": {
        "map": {
          "private": "npm:private@0.1.6",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-modules-umd@6.18.0": {
        "map": {
          "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:babel-plugin-transform-es2015-destructuring@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-modules-commonjs@6.18.0": {
        "map": {
          "babel-types": "npm:babel-types@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.18.0",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:babel-plugin-transform-es2015-modules-systemjs@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.18.0",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:babel-plugin-transform-es2015-function-name@6.9.0": {
        "map": {
          "babel-types": "npm:babel-types@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-modules-amd@6.18.0": {
        "map": {
          "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0": {
        "map": {
          "babel-types": "npm:babel-types@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-regex": "npm:babel-helper-regex@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "regexpu-core": "npm:regexpu-core@2.0.0",
          "babel-helper-regex": "npm:babel-helper-regex@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-shorthand-properties@6.18.0": {
        "map": {
          "babel-types": "npm:babel-types@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-object-super@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-parameters@6.18.0": {
        "map": {
          "babel-types": "npm:babel-types@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.18.0",
          "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.18.0",
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-plugin-check-es2015-constants@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-typeof-symbol@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-computed-properties@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.18.0",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:babel-plugin-transform-es2015-template-literals@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-plugin-transform-strict-mode@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-literals@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-spread@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-classes@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.18.0",
          "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.18.0",
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.18.0",
          "babel-template": "npm:babel-template@6.16.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-block-scoping@6.18.0": {
        "map": {
          "babel-types": "npm:babel-types@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "lodash": "npm:lodash@4.16.6",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:regexpu-core@2.0.0": {
        "map": {
          "regjsparser": "npm:regjsparser@0.1.5",
          "regenerate": "npm:regenerate@1.3.1",
          "regjsgen": "npm:regjsgen@0.2.0"
        }
      },
      "npm:babel-helper-optimise-call-expression@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0"
        }
      },
      "npm:babel-helper-regex@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "lodash": "npm:lodash@4.16.6"
        }
      },
      "npm:babel-helper-hoist-variables@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0"
        }
      },
      "npm:babel-helper-replace-supers@6.18.0": {
        "map": {
          "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "babel-template": "npm:babel-template@6.16.0",
          "babel-messages": "npm:babel-messages@6.8.0"
        }
      },
      "npm:babel-helper-call-delegate@6.18.0": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.18.0"
        }
      },
      "npm:babel-helper-define-map@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "lodash": "npm:lodash@4.16.6",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0"
        }
      },
      "npm:babel-plugin-transform-es2015-for-of@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:regjsparser@0.1.5": {
        "map": {
          "jsesc": "npm:jsesc@0.5.0"
        }
      },
      "npm:babel-preset-stage-2@6.18.0": {
        "map": {
          "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.13.0",
          "babel-preset-stage-3": "npm:babel-preset-stage-3@6.17.0",
          "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.18.0",
          "babel-plugin-syntax-dynamic-import": "npm:babel-plugin-syntax-dynamic-import@6.18.0"
        }
      },
      "npm:babel-plugin-transform-decorators@6.13.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.18.0",
          "babel-helper-explode-class": "npm:babel-helper-explode-class@6.18.0",
          "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:babel-preset-stage-3@6.17.0": {
        "map": {
          "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.16.0",
          "babel-plugin-transform-async-generator-functions": "npm:babel-plugin-transform-async-generator-functions@6.17.0",
          "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.13.0",
          "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.8.0",
          "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.16.0"
        }
      },
      "npm:babel-plugin-transform-async-generator-functions@6.17.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.18.0",
          "babel-plugin-syntax-async-generators": "npm:babel-plugin-syntax-async-generators@6.13.0"
        }
      },
      "npm:babel-plugin-transform-async-to-generator@6.16.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.18.0",
          "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0"
        }
      },
      "npm:babel-plugin-transform-exponentiation-operator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.18.0",
          "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.13.0"
        }
      },
      "npm:babel-plugin-transform-object-rest-spread@6.16.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.13.0"
        }
      },
      "npm:babel-helper-remap-async-to-generator@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:babel-helper-builder-binary-assignment-operator-visitor@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.18.0"
        }
      },
      "npm:babel-helper-explode-assignable-expression@6.18.0": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0"
        }
      },
      "npm:babel-helper-explode-class@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.18.0"
        }
      },
      "npm:babel-helper-bindify-decorators@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-types": "npm:babel-types@6.18.0"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "es2015": true,
    "stage2": true,
    "plugins": [
      "babel-plugin-transform-regenerator",
      [
        "babel-plugin-vidom-jsx",
        {
          "autoRequire": false
        }
      ]
    ]
  },
  packages: {
    "play-with-vidom": {
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
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vidom": "npm:vidom@0.5.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0"
  },
  packages: {
    "npm:jspm-nodelibs-buffer@0.2.0": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "base64-js": "npm:base64-js@1.2.0",
        "ieee754": "npm:ieee754@1.1.8",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.3.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5",
        "cipher-base": "npm:cipher-base@1.0.3"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0",
        "cipher-base": "npm:cipher-base@1.0.3"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "asn1.js": "npm:asn1.js@4.8.1",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.2"
      }
    },
    "npm:asn1.js@4.8.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    }
  }
});
