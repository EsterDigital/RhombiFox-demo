goog.provide('SmartTv.BaseApplication');
goog.require('zb.Application');

// load scenes
goog.require('SmartTv.scenes.Home');
goog.require('SmartTv.scenes.Videos');

// load platforms
goog.require('zb.device.platforms.webos.Device');
goog.require('zb.device.platforms.pc.Device');

/**
 * @define {string}
 */
var PLATFORM_NAME = '';



/**
 * @constructor
 * @extends {zb.Application}
 */
SmartTv.BaseApplication = function() {
	goog.base(this);
};
goog.inherits(SmartTv.BaseApplication, zb.Application);


/**
 * @return {boolean}
 */
SmartTv.BaseApplication.prototype.isDeviceWebos = function() {
	return this.device instanceof zb.device.platforms.webos.Device;
};


/**
 * @return {boolean}
 */
SmartTv.BaseApplication.prototype.isDevicePc = function() {
	return this.device instanceof zb.device.platforms.pc.Device;
};


/**
 * @protected
 */
SmartTv.BaseApplication.prototype._setupScenes = function() {
	goog.base(this, '_setupScenes');
	app.addScene(new SmartTv.scenes.Home(), 'home');
	app.addScene(new SmartTv.scenes.Videos(), 'videos');
};


/**
 * @inheritDoc
 */
SmartTv.BaseApplication.prototype._loadDevice = function() {
	var device;
	if (PLATFORM_NAME === 'webos') {
		device = new zb.device.platforms.webos.Device();
	} else if (PLATFORM_NAME === 'pc') {
		device = new zb.device.platforms.pc.Device();
	} else {
		// try to detect platform automatically
		if (zb.device.platforms.webos.Device.detect()) {
			device = new zb.device.platforms.webos.Device();
		} else if (zb.device.platforms.pc.Device.detect()) {
			device = new zb.device.platforms.pc.Device();
		} else {}
	}
	if (!device) {
		throw new Error('Can\'t detect platform.');
	}
	device.on(device.EVENT_READY, this._fireEvent.bind(this, this.EVENT_DEVICE_READY, device));
	device.init();
};
