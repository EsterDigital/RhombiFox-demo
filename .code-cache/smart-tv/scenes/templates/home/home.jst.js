goog.provide('SmartTv.scenes.templates.home.home');
goog.require('zb.ui.BaseList');

/**
 * @typedef {Object}
 */
SmartTv.scenes.templates.home.HomeIn;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     list: zb.ui.BaseList
 * }}
 */
SmartTv.scenes.templates.home.HomeOut;


/**
 * @param {*=} opt_templateParams
 * @param {?cuteJS.TemplateOptions=} opt_options
 * @return {SmartTv.scenes.templates.home.HomeOut}
 */
SmartTv.scenes.templates.home.home = function(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null,
		list: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {SmartTv.scenes.templates.home.HomeOut} exports
	 */
	var exportFunction = function(value, key, exports) {
		switch (key) {
			case 'root':
				if (!exports.root) {
					exports.root = value;
				} else {
					cuteJS.onDuplicateExport(key);
				}
				break;
			case 'list':
				if (!exports.list) {
					exports.list = value;
				} else {
					cuteJS.onDuplicateExport(key);
				}
				break;
			default:
				cuteJS.onUnknownKey(key);
				break;
		}
	};
	var __p = '';
	__p += '\n' +
	 cuteJS.include('component', zb.ui.BaseList,  {}, "list", templatesData) +
	'';
	
	return cuteJS.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
