goog.provide('SmartTv.scenes.templates.videos.videos');


/**
 * @typedef {Object}
 */
SmartTv.scenes.templates.videos.VideosIn;


/**
 * @typedef {{
 *     root: DocumentFragment
 * }}
 */
SmartTv.scenes.templates.videos.VideosOut;


/**
 * @param {*=} opt_templateParams
 * @param {?cuteJS.TemplateOptions=} opt_options
 * @return {SmartTv.scenes.templates.videos.VideosOut}
 */
SmartTv.scenes.templates.videos.videos = function(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {SmartTv.scenes.templates.videos.VideosOut} exports
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
	__p += '';
	
	return cuteJS.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
