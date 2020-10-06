'use strict';

var test = require('tape');
var semver = require('semver');

var hasPackageImports = require('..');

test('hasPackageImports', function (t) {
	/* eslint-env browser */
	var expected = typeof window === 'undefined' ? semver.satisfies(process.version, '^12.19 || >= 14.6') : null;

	t.equal(hasPackageImports, expected, 'package "imports" support expected value: ' + expected);

	t.end();
});
