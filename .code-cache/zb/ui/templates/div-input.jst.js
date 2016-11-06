goog.provide('zb.ui.templates.divInput');


/**
 * @typedef {Object}
 */
zb.ui.templates.DivInputIn;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     slider: HTMLDivElement,
 *     placeholder: HTMLDivElement,
 *     textBeforeCaret: HTMLDivElement,
 *     inputText: HTMLDivElement
 * }}
 */
zb.ui.templates.DivInputOut;


/**
 * @param {*=} opt_templateParams
 * @param {?cuteJS.TemplateOptions=} opt_options
 * @return {zb.ui.templates.DivInputOut}
 */
zb.ui.templates.divInput = function(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null,
		slider: null,
		placeholder: null,
		textBeforeCaret: null,
		inputText: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {zb.ui.templates.DivInputOut} exports
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
			case 'slider':
				if (!exports.slider) {
					exports.slider = value;
				} else {
					cuteJS.onDuplicateExport(key);
				}
				break;
			case 'placeholder':
				if (!exports.placeholder) {
					exports.placeholder = value;
				} else {
					cuteJS.onDuplicateExport(key);
				}
				break;
			case 'textBeforeCaret':
				if (!exports.textBeforeCaret) {
					exports.textBeforeCaret = value;
				} else {
					cuteJS.onDuplicateExport(key);
				}
				break;
			case 'inputText':
				if (!exports.inputText) {
					exports.inputText = value;
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
	__p += '\n<div class="w-zbui-div-input__wrapper" data-export-id="slider">\n\t<div class="w-zbui-div-input__input _placeholder" data-export-id="placeholder"></div>\n\t<div class="w-zbui-div-input__input _fake" data-export-id="textBeforeCaret"></div>\n\t<div class="w-zbui-div-input__input" data-export-id="inputText"></div>\n</div>\n';
	
	return cuteJS.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
