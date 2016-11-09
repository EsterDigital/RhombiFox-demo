/**
* @param {Object} config 
* @return {Object}
*/

module.exports = function(config) {
  return {
    webos: {
      'ares-package': '/usr/local/share/webOS_TV_SDK/CLI/bin/ares-package',
      'appinfo': {
        'id': 'ru.esterdigital.smarttv',
        'version': '1.0.0',
        'vendor': 'Ester Digital',
        'type': 'web',
        'main': 'index.html',
        'title': 'Smart TV',
        'appDescription': 'SmartTV app',
        'resolution': '1920x1080',
        'transparent': false,
        "icon": "icon_80.png",
        "largeIcon": "icon_130.png"
      }
    }
  };
};
