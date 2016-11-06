goog.provide('zb.ui.templates.playerProgress.playerProgress');


/**
 * @typedef {Object}
 */
zb.ui.templates.playerProgress.PlayerProgressIn;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     currentTime: HTMLDivElement,
 *     duration: HTMLDivElement,
 *     progress: HTMLDivElement
 * }}
 */
zb.ui.templates.playerProgress.PlayerProgressOut;


/**
 * @param {*=} opt_templateParams
 * @param {?cuteJS.TemplateOptions=} opt_options
 * @return {zb.ui.templates.playerProgress.PlayerProgressOut}
 */
zb.ui.templates.playerProgress.playerProgress = function(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null,
		currentTime: null,
		duration: null,
		progress: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {zb.ui.templates.playerProgress.PlayerProgressOut} exports
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
			case 'progress':
				if (!exports.progress) {
					exports.progress = value;
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
	__p += '\n<div class="w-player-progress">\n\t<div class="zb-clear">\n\t\t<div class="w-player-progress__time" data-export-id="currentTime">0:00:00</div>\n\t\t<div class="w-player-progress__duration" data-export-id="duration">0:00:00</div>\n\t</div>\n\t<div class="w-player-progress__bar">\n\t\t<div class="w-player-progress__progress" data-export-id="progress"></div>\n\t</div>\n</div>\n';
	
	return cuteJS.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
