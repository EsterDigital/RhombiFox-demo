goog.provide('zb.ui.widgets.templates.videoControl');


/**
 * @typedef {{
 *     className: string
 * }}
 */
zb.ui.widgets.templates.VideoControlIn;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     btnPrev: HTMLDivElement,
 *     btnRewind: HTMLDivElement,
 *     btnPlayPause: HTMLDivElement,
 *     btnStop: HTMLDivElement,
 *     btnForward: HTMLDivElement,
 *     btnNext: HTMLDivElement
 * }}
 */
zb.ui.widgets.templates.VideoControlOut;


/**
 * @param {zb.ui.widgets.templates.VideoControlIn} templateParams
 * @param {?cuteJS.TemplateOptions=} opt_options
 * @return {zb.ui.widgets.templates.VideoControlOut}
 */
zb.ui.widgets.templates.videoControl = function(templateParams, opt_options) {
	/**
	 * @this {zb.ui.widgets.templates.VideoControlIn}
	 * @return {zb.ui.widgets.templates.VideoControlOut}
	 */
	var _template = function() {
		var templatesData = {};
		var exports = {
			root: null,
			btnPrev: null,
			btnRewind: null,
			btnPlayPause: null,
			btnStop: null,
			btnForward: null,
			btnNext: null
		};
		/**
		 * @param value
		 * @param {string} key
		 * @param {zb.ui.widgets.templates.VideoControlOut} exports
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
				case 'btnPrev':
					if (!exports.btnPrev) {
						exports.btnPrev = value;
					} else {
						cuteJS.onDuplicateExport(key);
					}
					break;
				case 'btnRewind':
					if (!exports.btnRewind) {
						exports.btnRewind = value;
					} else {
						cuteJS.onDuplicateExport(key);
					}
					break;
				case 'btnPlayPause':
					if (!exports.btnPlayPause) {
						exports.btnPlayPause = value;
					} else {
						cuteJS.onDuplicateExport(key);
					}
					break;
				case 'btnStop':
					if (!exports.btnStop) {
						exports.btnStop = value;
					} else {
						cuteJS.onDuplicateExport(key);
					}
					break;
				case 'btnForward':
					if (!exports.btnForward) {
						exports.btnForward = value;
					} else {
						cuteJS.onDuplicateExport(key);
					}
					break;
				case 'btnNext':
					if (!exports.btnNext) {
						exports.btnNext = value;
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
		__p += '<div class="w-video-control ' +
		 cuteJS.escape(this.className) +
		'">\n\t<div class="w-video-control__item _prev" data-export-id="btnPrev"></div>\n\t<div class="w-video-control__item _rewind" data-export-id="btnRewind"></div>\n\t<div class="w-video-control__item _play" data-export-id="btnPlayPause"></div>\n\t<div class="w-video-control__item _stop" data-export-id="btnStop"></div>\n\t<div class="w-video-control__item _forward" data-export-id="btnForward"></div>\n\t<div class="w-video-control__item _next" data-export-id="btnNext"></div>\n</div>';
		
		return cuteJS.buildResult(__p, templatesData, exportFunction, exports, opt_options);
	};
	return _template.call(templateParams);
};
