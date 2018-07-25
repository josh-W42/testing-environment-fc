(function () {

  let data = {

      lazy: [],
      cleanLazy: function() {
          data.lazy = Array.prototype.filter.call(data.lazy, function(l){ return l.getAttribute('data-src');});
      },

  };

  let model = {

      init: function() {
          // The code below is for implementing a 'lazy loading' strategy,
          // a small place holder is over an image as source then, once the
          // page loads it is replaced with the actual picture.
          model.registerListener('load', model.setLazy);
          model.registerListener('load', model.lazyLoad);
          model.registerListener('scroll', model.lazyLoad);

          let soundBox = document.querySelector('#soundBox');
          soundBox.addEventListener('click', function() {
            let mainVideo = document.querySelector('#mainVideo');
            if(mainVideo.muted){
              mainVideo.muted = false;
              document.querySelector('.soundbutton').src = 'img/Animations and Buttons/Speaker_IconOn.svg';
            } else {
              mainVideo.muted = true;
              document.querySelector('.soundbutton').src = 'img/Animations and Buttons/Speaker_IconOff.svg';
            }
          });

      },

      setLazy: function(){
          data.lazy = document.querySelectorAll('.lazy');
          console.log('Found ' + data.lazy.length + ' lazy images');
      },

      registerListener: function(event, func) {
          if (window.addEventListener) {
              window.addEventListener(event, func)
          } else {
              window.attachEvent('on' + event, func)
          }
      },

      lazyLoad: function() {
          for(var i=0; i < data.lazy.length; i++){
              if(model.isInViewport(data.lazy[i])){
                  if (data.lazy[i].getAttribute('data-src')){
                      data.lazy[i].src = data.lazy[i].getAttribute('data-src');
                      data.lazy[i].removeAttribute('data-src');
                  }
              }
          }
          data.cleanLazy();
      },

      isInViewport: function(el){
          var rect = el.getBoundingClientRect();
          return (
              rect.bottom >= 0 &&
              rect.right >= 0 &&
              rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.left <= (window.innerWidth || document.documentElement.clientWidth)
          );
      }
  };

  let view = {

    init: function() {
      //  soundBox placement.

      let soundBox = document.querySelector('#soundBox');

      let offsets = soundBox.getBoundingClientRect();
      let xcord = offsets.left;
      let ycord = offsets.top + window.pageYOffset - soundBox.clientTop;

      soundBox.style.top = ycord + "px";
    },

  };

  let connector = {

      init: function() {
        model.init();
        view.init();
      },

  };

  connector.init();
})();
