goog.provide('SmartTv.Application');
goog.require('SmartTv.BaseApplication');



/**
 * @constructor
 * @extends {SmartTv.BaseApplication}
 */
SmartTv.Application = function() {
	zb.console.setLevel(zb.console.Level.ALL);
	goog.base(this);
};
goog.inherits(SmartTv.Application, SmartTv.BaseApplication);


/** @inheritDoc */
SmartTv.Application.prototype.home = function() {
	this.clearHistory();
	var homeScene = this.getLayerManager().getLayer('home');
	return this.getSceneOpener().open(homeScene, function() {
		// Set home scene data here
	});
};


/** @inheritDoc */
SmartTv.Application.prototype.onStart = function() {
	// login, splashscreen, timeout, etc.
	this.home();
};
