# Shanzhai [![Continuous Integration](https://github.com/jameswilddev/shanzhai/workflows/Continuous%20Integration/badge.svg)](https://github.com/jameswilddev/shanzhai/actions) [![License](https://img.shields.io/github/license/jameswilddev/shanzhai.svg)](https://github.com/jameswilddev/shanzhai/blob/master/license) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjameswilddev%2Fshanzhai.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjameswilddev%2Fshanzhai?ref=badge_shield) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

## NPM packages

Name                                                                                                           | Version                                                                                                                                                                                 | Description                                                                                                                                           | Published
-------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------
[@shanzhai/build-object-input](@shanzhai/build-object-input)                                                   | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/build-object-input.svg)](https://www.npmjs.com/package/@shanzhai/build-object-input)                                                   | A Shanzhai input which builds an object from a number of other inputs.                                                                                | ✔️       
[@shanzhai/change-tracking-helpers](@shanzhai/change-tracking-helpers)                                         | [![0.0.4](https://img.shields.io/npm/v/@shanzhai/change-tracking-helpers.svg)](https://www.npmjs.com/package/@shanzhai/change-tracking-helpers)                                         | Helpers for tracking changes to files during a Shanzhai build.                                                                                        | ✔️       
[@shanzhai/collect-svg-defs-step](@shanzhai/collect-svg-defs-step)                                             | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/collect-svg-defs-step.svg)](https://www.npmjs.com/package/@shanzhai/collect-svg-defs-step)                                             | A Shanzhai step which collects a number of SVG defs into a single document, and generates TypeScript source which can be used to refer to those defs. | ✔️       
[@shanzhai/compile-type-script-step](@shanzhai/compile-type-script-step)                                       | [![0.0.3](https://img.shields.io/npm/v/@shanzhai/compile-type-script-step.svg)](https://www.npmjs.com/package/@shanzhai/compile-type-script-step)                                       | A Shanzhai build step which compiles parsed TypeScript to Javascript.                                                                                 | ✔️       
[@shanzhai/constant-input](@shanzhai/constant-input)                                                           | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/constant-input.svg)](https://www.npmjs.com/package/@shanzhai/constant-input)                                                           | A Shanzhai input which provides a constant input to a build step.                                                                                     | ✔️       
[@shanzhai/convert-json-to-type-script-step](@shanzhai/convert-json-to-type-script-step)                       | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/convert-json-to-type-script-step.svg)](https://www.npmjs.com/package/@shanzhai/convert-json-to-type-script-step)                       | A Shanzhai build step which converts a JSON value to TypeScript source code for ambient declarations.                                                 | ✔️       
[@shanzhai/convert-parsed-csv-to-struct-of-arrays-step](@shanzhai/convert-parsed-csv-to-struct-of-arrays-step) | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/convert-parsed-csv-to-struct-of-arrays-step.svg)](https://www.npmjs.com/package/@shanzhai/convert-parsed-csv-to-struct-of-arrays-step) | A Shanzhai build step which converts a parsed CSV file to a "struct-of-arrays" format where each column is its own array.                             | ✔️       
[@shanzhai/convert-svg-document-to-def-step](@shanzhai/convert-svg-document-to-def-step)                       | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/convert-svg-document-to-def-step.svg)](https://www.npmjs.com/package/@shanzhai/convert-svg-document-to-def-step)                       | A Shanzhai step which converts a SVG document to a def to be embedded in another SVG document.                                                        | ✔️       
[@shanzhai/create-directory-step](@shanzhai/create-directory-step)                                             | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/create-directory-step.svg)](https://www.npmjs.com/package/@shanzhai/create-directory-step)                                             | A Shanzhai step which ensures that a directory exists (as well as all of its parent directories).                                                     | ✔️       
[@shanzhai/delete-step](@shanzhai/delete-step)                                                                 | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/delete-step.svg)](https://www.npmjs.com/package/@shanzhai/delete-step)                                                                 | A Shanzhai step which deletes a file or directory (including any child files or directories) if it exists.                                            | ✔️       
[@shanzhai/global-store](@shanzhai/global-store)                                                               | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/global-store.svg)](https://www.npmjs.com/package/@shanzhai/global-store)                                                               | A Shanzhai store for global variables to be included in Javascript builds.                                                                            | ✔️       
[@shanzhai/interfaces](@shanzhai/interfaces)                                                                   | [![0.0.8](https://img.shields.io/npm/v/@shanzhai/interfaces.svg)](https://www.npmjs.com/package/@shanzhai/interfaces)                                                                   | TypeScript types used as interfaces between the various components of Shanzhai.                                                                       | ✔️       
[@shanzhai/javascript-source-store](@shanzhai/javascript-source-store)                                         | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/javascript-source-store.svg)](https://www.npmjs.com/package/@shanzhai/javascript-source-store)                                         | A Shanzhai store for Javascript source files.                                                                                                         | ✔️       
[@shanzhai/key-value-store](@shanzhai/key-value-store)                                                         | [![0.0.5](https://img.shields.io/npm/v/@shanzhai/key-value-store.svg)](https://www.npmjs.com/package/@shanzhai/key-value-store)                                                         | A store which holds a keyed set of values, with inputs and outputs for interacting with Shanzhai build steps and some helper build steps.             | ✔️       
[@shanzhai/merge-object-input](@shanzhai/merge-object-input)                                                   | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/merge-object-input.svg)](https://www.npmjs.com/package/@shanzhai/merge-object-input)                                                   | A Shanzhai input which builds an object by merging the objects retrieved by other inputs.                                                             | ✔️       
[@shanzhai/minified-javascript-store](@shanzhai/minified-javascript-store)                                     | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/minified-javascript-store.svg)](https://www.npmjs.com/package/@shanzhai/minified-javascript-store)                                     | A Shanzhai store for minified Javascript files.                                                                                                       | ✔️       
[@shanzhai/minify-html-step](@shanzhai/minify-html-step)                                                       | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/minify-html-step.svg)](https://www.npmjs.com/package/@shanzhai/minify-html-step)                                                       | A Shanzhai build step minifies a HTML file.                                                                                                           | ✔️       
[@shanzhai/minify-javascript-step](@shanzhai/minify-javascript-step)                                           | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/minify-javascript-step.svg)](https://www.npmjs.com/package/@shanzhai/minify-javascript-step)                                           | A Shanzhai build step minifies a Javascript file.                                                                                                     | ✔️       
[@shanzhai/minify-step](@shanzhai/minify-step)                                                                 | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/minify-step.svg)](https://www.npmjs.com/package/@shanzhai/minify-step)                                                                 | A Shanzhai build step which can be built upon to create recursive minification build steps.                                                           | ✔️       
[@shanzhai/minify-svg-step](@shanzhai/minify-svg-step)                                                         | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/minify-svg-step.svg)](https://www.npmjs.com/package/@shanzhai/minify-svg-step)                                                         | A Shanzhai build step minifies a SVG file.                                                                                                            | ✔️       
[@shanzhai/null-output](@shanzhai/null-output)                                                                 | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/null-output.svg)](https://www.npmjs.com/package/@shanzhai/null-output)                                                                 | A Shanzhai output which discards any value it is given without taking further action.                                                                 | ✔️       
[@shanzhai/parallel-step](@shanzhai/parallel-step)                                                             | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/parallel-step.svg)](https://www.npmjs.com/package/@shanzhai/parallel-step)                                                             | A Shanzai build step which runs any number of child build steps in parallel.                                                                          | ✔️       
[@shanzhai/parse-csv-step](@shanzhai/parse-csv-step)                                                           | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/parse-csv-step.svg)](https://www.npmjs.com/package/@shanzhai/parse-csv-step)                                                           | A Shanzhai build step which parses CSV files.                                                                                                         | ✔️       
[@shanzhai/parse-json-step](@shanzhai/parse-json-step)                                                         | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/parse-json-step.svg)](https://www.npmjs.com/package/@shanzhai/parse-json-step)                                                         | A Shanzhai build step which parses JSON from a string.                                                                                                | ✔️       
[@shanzhai/parse-pug-step](@shanzhai/parse-pug-step)                                                           | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/parse-pug-step.svg)](https://www.npmjs.com/package/@shanzhai/parse-pug-step)                                                           | A Shanzhai build step which parses Pug files.                                                                                                         | ✔️       
[@shanzhai/parse-type-script-step](@shanzhai/parse-type-script-step)                                           | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/parse-type-script-step.svg)](https://www.npmjs.com/package/@shanzhai/parse-type-script-step)                                           | A Shanzhai build step which compiles parsed TypeScript.                                                                                               | ✔️       
[@shanzhai/parsed-type-script-store](@shanzhai/parsed-type-script-store)                                       | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/parsed-type-script-store.svg)](https://www.npmjs.com/package/@shanzhai/parsed-type-script-store)                                       | A Shanzhai store for parsed TypeScript source files.                                                                                                  | ✔️       
[@shanzhai/plugin-helpers](@shanzhai/plugin-helpers)                                                           | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/plugin-helpers.svg)](https://www.npmjs.com/package/@shanzhai/plugin-helpers)                                                           | Helpers for searching for plugins during a Shanzhai build.                                                                                            | ✔️       
[@shanzhai/production-cli](@shanzhai/production-cli)                                                           | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/production-cli.svg)](https://www.npmjs.com/package/@shanzhai/production-cli)                                                           | A CLI tool which performs a one-off production build of the Shanzhai project in the current directory.                                                | ✔️       
[@shanzhai/read-binary-file-step](@shanzhai/read-binary-file-step)                                             | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/read-binary-file-step.svg)](https://www.npmjs.com/package/@shanzhai/read-binary-file-step)                                             | A Shanzhai step which reads the content of a binary file.                                                                                             | ✔️       
[@shanzhai/read-text-file-step](@shanzhai/read-text-file-step)                                                 | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/read-text-file-step.svg)](https://www.npmjs.com/package/@shanzhai/read-text-file-step)                                                 | A Shanzhai step which reads the content of a UTF-8 encoded text file.                                                                                 | ✔️       
[@shanzhai/render-pug-step](@shanzhai/render-pug-step)                                                         | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/render-pug-step.svg)](https://www.npmjs.com/package/@shanzhai/render-pug-step)                                                         | A Shanzhai build step which renders parsed Pug files.                                                                                                 | ✔️       
[@shanzhai/serial-step](@shanzhai/serial-step)                                                                 | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/serial-step.svg)](https://www.npmjs.com/package/@shanzhai/serial-step)                                                                 | A Shanzai build step which runs any number of child build steps in serial.                                                                            | ✔️       
[@shanzhai/stringify-json-step](@shanzhai/stringify-json-step)                                                 | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/stringify-json-step.svg)](https://www.npmjs.com/package/@shanzhai/stringify-json-step)                                                 | A Shanzhai build step which "stringifies" a JSON value to a string.                                                                                   | ✔️       
[@shanzhai/type-script-compiler-options-store](@shanzhai/type-script-compiler-options-store)                   | [![0.0.1](https://img.shields.io/npm/v/@shanzhai/type-script-compiler-options-store.svg)](https://www.npmjs.com/package/@shanzhai/type-script-compiler-options-store)                   | A Shanzhai store for TypeScript compiler options.                                                                                                     | ✔️       
[@shanzhai/type-script-source-store](@shanzhai/type-script-source-store)                                       | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/type-script-source-store.svg)](https://www.npmjs.com/package/@shanzhai/type-script-source-store)                                       | A Shanzhai store for TypeScript source files.                                                                                                         | ✔️       
[@shanzhai/validate-json-schema-step](@shanzhai/validate-json-schema-step)                                     | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/validate-json-schema-step.svg)](https://www.npmjs.com/package/@shanzhai/validate-json-schema-step)                                     | A Shanzhai build step which validates a JSON value against a JSON schema.                                                                             | ✔️       
[@shanzhai/value-store](@shanzhai/value-store)                                                                 | [![0.0.4](https://img.shields.io/npm/v/@shanzhai/value-store.svg)](https://www.npmjs.com/package/@shanzhai/value-store)                                                                 | A store which holds a single value, with inputs and outputs for interacting with Shanzhai build steps and some helper build steps.                    | ✔️       
[@shanzhai/watch-cli](@shanzhai/watch-cli)                                                                     | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/watch-cli.svg)](https://www.npmjs.com/package/@shanzhai/watch-cli)                                                                     | A CLI tool which performs a build of the Shanzhai project in the current directory, watching for changes and rebuilding automatically.                | ✔️       
[@shanzhai/write-file-step](@shanzhai/write-file-step)                                                         | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/write-file-step.svg)](https://www.npmjs.com/package/@shanzhai/write-file-step)                                                         | A Shanzhai step which writes to a binary or UTF-8 encoded text file, creating it if it does not exist, or replacing it if it does.                    | ✔️       
[@shanzhai/zip-step](@shanzhai/zip-step)                                                                       | [![0.0.2](https://img.shields.io/npm/v/@shanzhai/zip-step.svg)](https://www.npmjs.com/package/@shanzhai/zip-step)                                                                       | A Shanzhai step which creates a zip file from a list of binary or UTF-8 encoded text files.                                                           | ✔️       
[shanzhai](shanzhai)                                                                                           | [![0.0.9](https://img.shields.io/npm/v/shanzhai.svg)](https://www.npmjs.com/package/shanzhai)                                                                                           | This is a stub package.  You probably want a @shanzhai/* package instead.                                                                             | ✔️       

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjameswilddev%2Fshanzhai.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjameswilddev%2Fshanzhai?ref=badge_large)
