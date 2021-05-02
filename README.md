# has-package-imports <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Does the current node version have support for the "imports" field in package.json?

At the time of this writing, node v12.19+ and v14.6+ has support for the ["imports" field in package.json](https://nodejs.org/api/packages.html#packages_imports).

This library exports `true` if the current node version supports it, `false` if it does not, and `null` if it's in a browser.

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/has-package-imports
[npm-version-svg]: https://versionbadg.es/inspect-js/has-package-imports.svg
[deps-svg]: https://david-dm.org/inspect-js/has-package-imports.svg
[deps-url]: https://david-dm.org/inspect-js/has-package-imports
[dev-deps-svg]: https://david-dm.org/inspect-js/has-package-imports/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/has-package-imports#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/has-package-imports.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/has-package-imports.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/has-package-imports.svg
[downloads-url]: https://npm-stat.com/charts.html?package=has-package-imports
