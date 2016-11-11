goog.provide('SmartTv.scenes.templates.payment.payment');


/**
 * @typedef {Object}
 */
SmartTv.scenes.templates.payment.PaymentIn;


/**
 * @typedef {{
 *     root: DocumentFragment
 * }}
 */
SmartTv.scenes.templates.payment.PaymentOut;


/**
 * @param {*=} opt_templateParams
 * @param {?cuteJS.TemplateOptions=} opt_options
 * @return {SmartTv.scenes.templates.payment.PaymentOut}
 */
SmartTv.scenes.templates.payment.payment = function(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {SmartTv.scenes.templates.payment.PaymentOut} exports
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
	__p += '\n<h1>Scene Payment</h1>\n';
	
	return cuteJS.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
