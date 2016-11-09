goog.provide('SmartTv.scenes.Video');
goog.require('SmartTv.scenes.templates.video.video');
goog.require('zb.layers.CuteScene');



/**
 * @constructor
 * @extends {zb.layers.CuteScene}
 */
SmartTv.scenes.Video = function() {
	goog.base(this);
	this._addContainerClass('s-video');
};
goog.inherits(SmartTv.scenes.Video, zb.layers.CuteScene);


/**
 * @inheritDoc
 */
SmartTv.scenes.Video.prototype._renderTemplate = function() {
	return SmartTv.scenes.templates.video.video(this._getTemplateData(), this._getTemplateOptions());
};


/**
 * @type {SmartTv.scenes.templates.video.VideoOut}
 * @protected
 */
SmartTv.scenes.Video.prototype._exported;
