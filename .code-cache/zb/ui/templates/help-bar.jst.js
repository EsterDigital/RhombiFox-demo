goog.provide('zb.ui.templates.helpBar');


/**
 * @typedef {Object}
 */
zb.ui.templates.HelpBarIn;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     items: HTMLDivElement
 * }}
 */
zb.ui.templates.HelpBarOut;


/**
 * @param {*=} opt_templateParams
 * @param {?cuteJS.TemplateOptions=} opt_options
 * @return {zb.ui.templates.HelpBarOut}
 */
zb.ui.templates.helpBar = function(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null,
		items: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {zb.ui.templates.HelpBarOut} exports
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
			case 'items':
				if (!exports.items) {
					exports.items = value;
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
	__p += '<div class="w-help-bar zb-clear">\n\t<div class="w-help-bar__wrap" data-export-id="items"></div>\n</div>\n';
	
	return cuteJS.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
