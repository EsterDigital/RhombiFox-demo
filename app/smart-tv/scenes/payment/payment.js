goog.provide('SmartTv.scenes.Payment');
goog.require('SmartTv.scenes.templates.payment.payment');
goog.require('zb.layers.CuteScene');



/**
 * @constructor
 * @extends {zb.layers.CuteScene}
 */
SmartTv.scenes.Payment = function() {
	goog.base(this);
	this._addContainerClass('s-payment');
};
goog.inherits(SmartTv.scenes.Payment, zb.layers.CuteScene);


/**
 * @inheritDoc
 */
SmartTv.scenes.Payment.prototype._renderTemplate = function() {
	return SmartTv.scenes.templates.payment.payment(this._getTemplateData(), this._getTemplateOptions());
};


/**
 * @type {SmartTv.scenes.templates.payment.PaymentOut}
 * @protected
 */
SmartTv.scenes.Payment.prototype._exported;
