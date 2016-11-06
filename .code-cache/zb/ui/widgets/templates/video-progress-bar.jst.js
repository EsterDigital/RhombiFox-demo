goog.provide('zb.ui.widgets.templates.videoProgressBar');


/**
 * @typedef {Object}
 */
zb.ui.widgets.templates.VideoProgressBarIn;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     currentTime: HTMLDivElement,
 *     duration: HTMLDivElement,
 *     value: HTMLDivElement
 * }}
 */
zb.ui.widgets.templates.VideoProgressBarOut;


/**
 * @param {*=} opt_templateParams
 * @param {?cuteJS.TemplateOptions=} opt_options
 * @return {zb.ui.widgets.templates.VideoProgressBarOut}
 */
zb.ui.widgets.templates.videoProgressBar = function(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null,
		currentTime: null,
		duration: null,
		value: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {zb.ui.widgets.templates.VideoProgressBarOut} exports
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
			case 'currentTime':
				if (!exports.currentTime) {
					exports.currentTime = value;
				} else {
					cuteJS.onDuplicateExport(key);
				}
				break;
			case 'duration':
				if (!exports.duration) {
					exports.duration = value;
				} else {
					cuteJS.onDuplicateExport(key);
				}
				break;
			case 'value':
				if (!exports.value) {
					exports.value = value;
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
	__p += '\n<div class="w-video-progress-bar">\n\t<div>\n\t\t<div class="w-video-progress-bar__current" data-export-id="currentTime">00:00:00</div>\n\t\t<div class="w-video-progress-bar__duration" data-export-id="duration">00:00:00</div>\n\t</div>\n\t<div class="w-video-progress-bar__bar">\n\t\t<div class="w-video-progress-bar__value" data-export-id="value"></div>\n\t</div>\n</div>\n';
	
	return cuteJS.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
