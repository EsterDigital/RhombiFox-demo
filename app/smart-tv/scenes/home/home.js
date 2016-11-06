goog.provide('SmartTv.scenes.Home');
goog.require('zb.layers.CuteScene');
goog.require('SmartTv.scenes.templates.home.home');



/**
 * @constructor
 * @extends {zb.layers.CuteScene}
 */
SmartTv.scenes.Home = function() {
	goog.base(this);
};
goog.inherits(SmartTv.scenes.Home, zb.layers.CuteScene);


/** @inheritDoc */
SmartTv.scenes.Home.prototype._renderTemplate = function() {
	return SmartTv.scenes.templates.home.home(this._getTemplateData(), this._getTemplateOptions());
};


/**
 * @type {SmartTv.scenes.templates.home.HomeOut}
 * @protected
 */
SmartTv.scenes.Home.prototype._templateResult;
