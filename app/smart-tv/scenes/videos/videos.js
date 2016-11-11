goog.provide('SmartTv.scenes.Videos');
goog.require('SmartTv.scenes.templates.videos.videos');
goog.require('zb.layers.CuteScene');

goog.require('zb.ui.BaseList');
goog.require('zb.xhr.simple');

goog.require('zb.device.platforms.common.HTML5Video');

var fullList = [];
var video;

/**
 * @constructor
 * @extends {zb.layers.CuteScene}
 */
SmartTv.scenes.Videos = function() {
	goog.base(this);
	this._addContainerClass('s-videos');
  this._layerName = "videos";

  var self = this;

  zb.xhr.simple.send(zb.http.Method.GET, 'http://webcaster.pro/api/firefly/events.json', {}, {})
    .then(function(xhr) {
      var items = JSON.parse(xhr.responseText);

      var res = [];

      for(var j = 0; j < 10; j++){
        items.forEach(function(item) {
          var node = zb.html.node('div');

          if(item.images.small) {
            var img = zb.html.node('img', 'video-thumb');
            img.setAttribute('src', item.images.big);
            node.appendChild(img);
          }

          var title = zb.html.node('span', 'video-title', item.name);
          node.appendChild(title);

          res.push(node);

          fullList.push({
            id: item.id
          });
        });
      }

      appendListInfo(self, res);
      appendScrollList(self, res);
    })
    .catch(function(xhr) {
      console.error(xhr);
    })

  video = new zb.device.platforms.common.HTML5Video;
  video.bindEvents();
};
goog.inherits(SmartTv.scenes.Videos, zb.layers.CuteScene);


/**
 * @inheritDoc
 */
SmartTv.scenes.Videos.prototype._renderTemplate = function() {
	return SmartTv.scenes.templates.videos.videos(this._getTemplateData(), this._getTemplateOptions());
};


/**
 * @type {SmartTv.scenes.templates.videos.VideosOut}
 * @protected
 */
SmartTv.scenes.Videos.prototype._exported;


zb.device.platforms.common.HTML5Video.prototype.bindEvents = function() {
  this.on(this.EVENT_PAUSE, function() {
    app.hideVideo();
  });

  this.on(this.EVENT_ERROR, function() {
    app.hideVideo();
  });
};

var appendScrollList = function(scene, items) {
  var dataList = new zb.ui.DataList(items);
  var list = new zb.ui.BaseList({
    isVertical: false,
    source: dataList
  }, {
    padding: 1
  });

  scene.appendWidget(list);
  scene.getContainer().appendChild(list.getContainer());

  list.updateView();

  list.on(list.EVENT_CLICK, selectListItem);
};

var appendListInfo = function(scene, data) {
  var node = zb.html.node('div');
  var categoryName = new zb.html.node('h1','category-name','food');
  var categorySize = new zb.html.node('p','category-size', data.length + (data.length == 1 ? ' video' : ' videos'))
  node.appendChild(categoryName);
  node.appendChild(categorySize);

  scene.getContainer().appendChild(node);
};

var selectListItem = function(data) {
  var localIndex = this.getLocalIndex();
  var itemId = fullList[localIndex].id;

  zb.xhr.simple.send(zb.http.Method.GET, 'http://webcaster.pro/api/firefly/event.json', { id: itemId }, {})
    .then(function(xhr) {
      var json = JSON.parse(xhr.responseText);

      app.showVideo();

      video.play(json['m3u8_url']);
    })
    .catch(function(xhr) {
      console.error(xhr);
    })
};
