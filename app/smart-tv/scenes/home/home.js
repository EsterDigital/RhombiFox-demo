goog.provide('SmartTv.scenes.Home');
goog.require('zb.layers.CuteScene');
goog.require('SmartTv.scenes.templates.home.home');
goog.require('zb.ui.BaseList');

var categories = [
  {
    name: 'Food',
    background: '/app/smart-tv/img/food-cat.jpg',
    sceneTarget: 'videos'
  },
  {
    name: 'Recipes',
    background: '/app/smart-tv/img/recipes-cat.jpg'
  },
  {
    name: 'Recommended',
    background: '/app/smart-tv/img/recom-cat.jpg'
  }
];

/**
 * @constructor
 * @extends {zb.layers.CuteScene}
 */
SmartTv.scenes.Home = function() {
  goog.base(this);
  this._addContainerClass('s-home');
  this._layerName = "home";
  var items = [];

  categories.forEach(function(category) {
    var node = zb.html.node('div');
    var title = zb.html.node('span', 'category-title', category.name);
    node.style.backgroundImage = "url("+category.background+")";
    node.classList.add('category-container');
    node.appendChild(title);
    items.push(node);
  });

  var dataList = new zb.ui.DataList(items);
  this._exported.list.setSource(dataList);

  this._exported.list.on(this._exported.list.EVENT_CLICK, function(data) {
    var index = this.getLocalIndex();

    if (!categories[index].sceneTarget) {
      return false;
    }

    var scene = app.getLayerManager().getLayer(categories[index].sceneTarget);
    app.getLayerManager().open(scene, function() {

    });
  })

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
