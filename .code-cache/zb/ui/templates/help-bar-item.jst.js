goog.provide('zb.ui.templates.helpBarItem');


/**
 * @typedef {{
 *     cssClass: string,
 *     label: string
 * }}
 */
zb.ui.templates.HelpBarItemIn;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     label: HTMLDivElement
 * }}
 */
zb.ui.templates.HelpBarItemOut;


/**
 * @param {zb.ui.templates.HelpBarItemIn} templateParams
 * @param {?cuteJS.TemplateOptions=} opt_options
 * @return {zb.ui.templates.HelpBarItemOut}
 */
zb.ui.templates.helpBarItem = function(templateParams, opt_options) {
	/**
	 * @this {zb.ui.templates.HelpBarItemIn}
	 * @return {zb.ui.templates.HelpBarItemOut}
	 */
	var _template = function() {
		var templatesData = {};
		var exports = {
			root: null,
			label: null
		};
		/**
		 * @param value
		 * @param {string} key
		 * @param {zb.ui.templates.HelpBarItemOut} exports
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
				case 'label':
					if (!exports.label) {
						exports.label = value;
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
		__p += '<div class="w-help-bar-item ' +
		(this.cssClass) +
		'" data-export-id="label">' +
		(this.label) +
		'</div>\n';
		
		return cuteJS.buildResult(__p, templatesData, exportFunction, exports, opt_options);
	};
	return _template.call(templateParams);
};
