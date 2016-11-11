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
	});
};

SmartTv.Application.prototype.videos = function() {
  var videosScene = this.getLayerManager().getLayer('videos');
  return this.getLayerManager().open(videosScene, function() {

  });
};

zb.ui.BaseListItem.prototype._renderData = function() {
  var data = this._data === null ? '' : this._data;
  this._container.appendChild(data);
};

/** @inheritDoc */
SmartTv.Application.prototype.onStart = function() {
	// login, splashscreen, timeout, etc.
	this.home();
};

/**
 * @public
 * @type {string}
 */
zb.layers.Layer.prototype._layerName;

/** 
 * @param {object}: layer, 
 * fired when the layer changes
 */
zb.layers.Layer.prototype.changeViewClass = function() {
	var body = document.body;
	body.className = this._layerName + "-body";
};


/**
 * @override
 */
zb.layers.Layer.prototype.focus = function() {
	this.changeViewClass();
	goog.base(this, 'focus');
};

