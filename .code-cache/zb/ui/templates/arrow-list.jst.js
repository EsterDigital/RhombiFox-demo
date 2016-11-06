goog.provide('zb.ui.templates.arrowList');


/**
 * @typedef {Object}
 */
zb.ui.templates.ArrowListIn;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     wrapper: HTMLDivElement,
 *     slider: HTMLDivElement,
 *     arrowUp: HTMLDivElement,
 *     arrowDown: HTMLDivElement,
 *     arrowLeft: HTMLDivElement,
 *     arrowRight: HTMLDivElement
 * }}
 */
zb.ui.templates.ArrowListOut;


/**
 * @param {*=} opt_templateParams
 * @param {?cuteJS.TemplateOptions=} opt_options
 * @return {zb.ui.templates.ArrowListOut}
 */
zb.ui.templates.arrowList = function(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null,
		wrapper: null,
		slider: null,
		arrowUp: null,
		arrowDown: null,
		arrowLeft: null,
		arrowRight: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {zb.ui.templates.ArrowListOut} exports
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
			case 'arrowUp':
				if (!exports.arrowUp) {
					exports.arrowUp = value;
				} else {
					cuteJS.onDuplicateExport(key);
				}
				break;
			case 'arrowDown':
				if (!exports.arrowDown) {
					exports.arrowDown = value;
				} else {
					cuteJS.onDuplicateExport(key);
				}
				break;
			case 'arrowLeft':
				if (!exports.arrowLeft) {
					exports.arrowLeft = value;
				} else {
					cuteJS.onDuplicateExport(key);
				}
				break;
			case 'arrowRight':
				if (!exports.arrowRight) {
					exports.arrowRight = value;
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
	__p += '\n<div class="w-base-list w-arrow-list">\n\t<div class="w-base-list__wrap" data-export-id="wrapper">\n\t\t<div class="w-base-list__slider" data-export-id="slider"></div>\n\t</div>\n\n\t<div class="w-arrow-list__arrow _up" data-export-id="arrowUp"></div>\n\t<div class="w-arrow-list__arrow _down" data-export-id="arrowDown"></div>\n\t<div class="w-arrow-list__arrow _left" data-export-id="arrowLeft"></div>\n\t<div class="w-arrow-list__arrow _right" data-export-id="arrowRight"></div>\n</div>\n';
	
	return cuteJS.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
