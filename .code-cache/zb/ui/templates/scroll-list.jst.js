goog.provide('zb.ui.templates.scrollList');
goog.require('zb.ui.ScrollBar');

/**
 * @typedef {Object}
 */
zb.ui.templates.ScrollListIn;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     bar: zb.ui.ScrollBar,
 *     wrapper: HTMLDivElement,
 *     slider: HTMLDivElement
 * }}
 */
zb.ui.templates.ScrollListOut;


/**
 * @param {*=} opt_templateParams
 * @param {?cuteJS.TemplateOptions=} opt_options
 * @return {zb.ui.templates.ScrollListOut}
 */
zb.ui.templates.scrollList = function(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null,
		bar: null,
		wrapper: null,
		slider: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {zb.ui.templates.ScrollListOut} exports
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
			case 'bar':
				if (!exports.bar) {
					exports.bar = value;
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
	__p += '\n<div class="w-base-list w-scroll-list">\n\t<div class="w-base-list__wrap" data-export-id="wrapper">\n\t\t<div class="w-base-list__slider" data-export-id="slider"></div>\n\t\t' +
	 cuteJS.include('component', zb.ui.ScrollBar,  {}, "bar", templatesData) +
	'\n\t</div>\n</div>\n';
	
	return cuteJS.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
