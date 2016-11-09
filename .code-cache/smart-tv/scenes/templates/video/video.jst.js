goog.provide('SmartTv.scenes.templates.video.video');


/**
 * @typedef {Object}
 */
SmartTv.scenes.templates.video.VideoIn;


/**
 * @typedef {{
 *     root: DocumentFragment
 * }}
 */
SmartTv.scenes.templates.video.VideoOut;


/**
 * @param {*=} opt_templateParams
 * @param {?cuteJS.TemplateOptions=} opt_options
 * @return {SmartTv.scenes.templates.video.VideoOut}
 */
SmartTv.scenes.templates.video.video = function(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {SmartTv.scenes.templates.video.VideoOut} exports
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
			default:
				cuteJS.onUnknownKey(key);
				break;
		}
	};
	var __p = '';
	__p += '\n<h1>Scene Video</h1>\n';
	
	return cuteJS.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
