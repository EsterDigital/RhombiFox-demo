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
	return this.getLayerManager().open(homeScene, function() {
		// Set home scene data here
	});
};

SmartTv.Application.prototype.video = function() {
  var videoScene = this.getLayerManager().getLayer('video');
  return this.getLayerManager().open(videoScene);
};

/** @inheritDoc */
SmartTv.Application.prototype.onStart = function() {
	// login, splashscreen, timeout, etc.
	this.home();
};
