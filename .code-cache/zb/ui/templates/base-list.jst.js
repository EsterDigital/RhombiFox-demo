goog.provide('zb.ui.templates.baseList');


/**
 * @typedef {Object}
 */
zb.ui.templates.BaseListIn;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     wrapper: HTMLDivElement,
 *     slider: HTMLDivElement
 * }}
 */
zb.ui.templates.BaseListOut;


/**
 * @param {*=} opt_templateParams
 * @param {?cuteJS.TemplateOptions=} opt_options
 * @return {zb.ui.templates.BaseListOut}
 */
zb.ui.templates.baseList = function(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null,
		wrapper: null,
		slider: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {zb.ui.templates.BaseListOut} exports
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
			case 'wrapper':
				if (!exports.wrapper) {
					exports.wrapper = value;
				} else {
					cuteJS.onDuplicateExport(key);
				}
				break;
			case 'slider':
				if (!exports.slider) {
					exports.slider = value;
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
	__p += '\n<div class="w-base-list">\n\t<div class="w-base-list__wrap" data-export-id="wrapper">\n\t\t<div class="w-base-list__slider" data-export-id="slider"></div>\n\t</div>\n</div>\n';
	
	return cuteJS.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
