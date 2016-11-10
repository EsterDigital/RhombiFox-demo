goog.provide('SmartTv.scenes.Home');
goog.require('zb.layers.CuteScene');
goog.require('SmartTv.scenes.templates.home.home');

goog.require('zb.ui.ScrollList');
goog.require('zb.xhr.simple');

goog.require('zb.device.platforms.common.HTML5Video');

var fullList = [];
var video;

/**
 * @constructor
 * @extends {zb.layers.CuteScene}
 */
SmartTv.scenes.Home = function() {
  goog.base(this);

  var self = this;

  zb.xhr.simple.send(zb.http.Method.GET, 'http://webcaster.pro/api/firefly/events.json', {}, {})
    .then(function(xhr) {
      var items = JSON.parse(xhr.responseText);

      var res = [];

      items.forEach(function(item) {
        res.push(item.name);

        fullList.push({
          id: item.id
        });
      });

      appendScrollList(self, res);
    })
    .catch(function(xhr) {
      console.error(xhr);
    })

  video = new zb.device.platforms.common.HTML5Video;
  video.bindEvents();
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


zb.device.platforms.common.HTML5Video.prototype.bindEvents = function() {
  this.on(this.EVENT_PAUSE, function() {
    app.hideVideo();
    app.back();
  });

  this.on(this.EVENT_ERROR, function() {
    app.hideVideo();
    app.back();
  });
};

var appendScrollList = function(scene, items) {
  var dataList = new zb.ui.DataList(items);
  var scrollList = new zb.ui.ScrollList({ isVertical: true, source: dataList });

  scene.appendWidget(scrollList);
  scene.getContainer().appendChild(scrollList.getContainer());

  scrollList.on(scrollList.EVENT_CLICK, selectListItem);
};

var selectListItem = function(data) {
  var localIndex = this.getLocalIndex();
  var itemId = fullList[localIndex].id;

  zb.xhr.simple.send(zb.http.Method.GET, 'http://webcaster.pro/api/firefly/event.json', { id: itemId }, {})
    .then(function(xhr) {
      var json = JSON.parse(xhr.responseText);

      app.video();
      app.showVideo();

      video.play(json['m3u8_url']);
    })
    .catch(function(xhr) {
      console.error(xhr);
    })
};
