var path = require('path');
var join = path.join;


/**
 * @param {Object} config
 * @return {Object}
 */
module.exports = function(config) {
	return {
		appNamespace: 'SmartTv',
		scripts: [
			// 'script.js'
		],
		styles: [
			//'myStyle.css'
		],
		modules: [
			//'some-nodejs-zb-module'
		]
	};
};
