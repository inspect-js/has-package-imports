'use strict';

var yes = false;
try {
	yes = require('#yes'); // eslint-disable-line global-require
} catch (e) { /**/ }

module.exports = yes;
