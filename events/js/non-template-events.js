// import { Calendar } from './js/fullcalendar-4.0.0-alpha.2/fullcalendar-4.0.0-alpha.2/fullcalendar.js';

(function () {

  let data = {
    lazy: [],

    cleanLazy: function() {
      data.lazy = Array.prototype.filter.call(data.lazy, function(l){ return l.getAttribute('data-src');});
    },

    bannerID: 0,
    bannerName: 'August Calendar',

    banners: [
      {
        img: '../img/events/augustCalendar.png',
        name: 'August Calendar'
      },
      {
        img: '../img/events/septemberCalendar.png',
        name: 'September Calendar'
      }
    ]

  };

  let model = {

      init: function() {
          // The code below is for implementing a 'lazy loading' strategy,
          // a small place holder is over an image as source then, once the
          // page loads it is replaced with the actual picture.
          model.registerListener('load', model.setLazy);
          model.registerListener('load', model.lazyLoad);
          model.registerListener('scroll', model.lazyLoad);

          // document.querySelector('#previousBanner').addEventListener('click', model.previousBanner);
          // document.querySelector('#nextBanner').addEventListener('click', model.nextBanner);
      },


      nextBanner: function() {
        data.bannerID++;
        if(data.bannerID >= data.banners.length) {
          data.bannerID = 0;
        }
        data.bannerName = data.banners[data.bannerID];
        model.bannerTransform('right');
      },

      bannerTransform: function(dir) {
        if(dir === 'right'){
          document.querySelector('#calendarImg').classList.add('flyOutRight');
          document.querySelector('#calendarImg').classList.remove('flyInLeft');
          setTimeout(function() {
            document.querySelector('#calendarImg').classList.remove('flyOutRight');
            document.querySelector('#calendarImg').classList.add('flyInRight');
            connector.ready();
          }, 750)
        } else {
          document.querySelector('#calendarImg').classList.add('flyOutLeft');
          document.querySelector('#calendarImg').classList.remove('flyInRight');
          setTimeout(function() {
            document.querySelector('#calendarImg').classList.remove('flyOutLeft');
            document.querySelector('#calendarImg').classList.add('flyInLeft');
            connector.ready();
          }, 750)
        }
      },

      previousBanner: function() {
        data.bannerID--;
        if(data.bannerID < 0) {
          data.bannerID = (data.banners.length - 1);
        }
        data.bannerName = data.banners[data.bannerID];
        model.bannerTransform();
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
          for(var i = 0; i < data.lazy.length; i++){
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

        document.querySelector('#facebookFrame').onload = view.renderCalendar();
      },

      // this function is designed for the slideshow.

      renderCalendar: function () {
        // let eventArray = Window.frames['f1763bea1bc79c4'].document.querySelectorAll('.clearfix');
        console.log(window.frames['facebookFrame'].contentDocument.innerHTML);

        // let calendar = document.querySelector('#calendar');

        // for( let i = 0; i < 4; i++) {
        //   let row = document.createElement('tr');
        //   calendar.appendChild(row);
        //   for( let k = 0; k < 7; k++) {
        //     let col = document.createElement('td');
        //     let date = new Date('November 3, 2018 00:00:00')
        //
        //   }
        // }
      },

  };

  let connector = {

      init: function() {
          model.init();
          view.init();
      },

      ready: function() {
        view.renderCalendar();
      }


  };

  connector.init();
})();
