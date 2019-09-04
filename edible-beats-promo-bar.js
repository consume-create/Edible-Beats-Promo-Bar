(function() {
  var bar = document.getElementById('edible-beats-promo-bar'),
      url = 'www.elfivedenver.com' //window.location.host,
      regx = /(elfivedenver)|(lingerdenver)|(opheliasdenver)|(rootdowndenver)|(rootdowndia)|(vitalrootdenver)|[^]/gi,
      name = url.replace(regx, '$1$2$3$4$5$6'),
      styles = JSON.parse(bar.getAttribute('data-settings')),

      // modify site specific settings
      settings = {
        'elfivedenver': {
          'shown': true,
          'flash': 'Check out our new zine!',
          'url': 'http://www.ediblebeats.com'
        },
        'lingerdenver': {
          'shown': true,
          'flash': 'Check out our new zine!',
          'url': 'http://www.ediblebeats.com'
        },
        'opheliasdenver': {
          'shown': true,
          'flash': 'Check out our new zine!',
          'url': 'http://www.ediblebeats.com'
        },
        'rootdowndenver': {
          'shown': true,
          'flash': 'Check out our new zine!',
          'url': 'http://www.ediblebeats.com'
        },
        'rootdowndia': {
          'shown': true,
          'flash': 'Check out our new zine!',
          'url': 'http://www.ediblebeats.com'
        },
        'vitalrootdenver': {
          'shown': true,
          'flash': 'Check out our new zine!',
          'url': 'http://www.ediblebeats.com'
        }
      };

  if(typeof settings[name] !== 'undefinded' && settings[name].shown) {
    // handler
    bar.addEventListener('click', function() {
      window.open(settings[name].url);
    }, false);

    // style
    bar.style.backgroundColor = styles.backgroundColor;
    bar.style.color = styles.fontColor;
    bar.style.cursor = 'pointer';
    bar.style.fontFamily = styles.fontFamily;
    bar.style.fontSize = '14px';
    bar.style.lineHeight = '40px';
    bar.style.textAlign = 'center';
    bar.style.position = styles.position;

    // content
    bar.innerText = settings[name].flash;
  } else {
    // hide
    bar.style.display = 'none';
  }
})();
