
(function () {

  let data = {
    lazy: [],

    cleanLazy: function() {
      data.lazy = Array.prototype.filter.call(data.lazy, function(l){ return l.getAttribute('data-src');});
    },

    bannerID: 0,
    bannerName: 'July Calendar',

    banners: [
      {
        img: 'img/events/julyCalendar.png',
        name: 'July Calendar'
      },
      {
        img: 'img/events/augustCalendar.png',
        name: 'August Calendar'
      },
      {
        img: 'img/events/septemberCalendar.png',
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

          document.querySelector('#previousBanner').addEventListener('click', model.previousBanner);
          document.querySelector('#nextBanner').addEventListener('click', model.nextBanner);
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
        // view.runTimmer();
      },


      fillZero: function(num) {
        //This function should
        if (num < 10) {
          num = "0" + num;
        }
        return num;
      },

      // runTimmer: function() {
      //   // This function will run in the background, constantly updating the timer.
      //   const currentDate = new Date();
      //   const seconds = view.fillZero(currentDate.getSeconds());
      //   const minutes = view.fillZero(currentDate.getMinutes());
      //   const hours = view.fillZero(currentDate.getHours());
      //   view.timeDifference(currentDate);
      //   setTimeout(view.runTimmer, 500);
      // },


      // timeDifference: function(time) {
      //   // Use this function to select your countdown end date.
      //   const endDate = new Date('August 5, 2018 18:00:00');
      //   const difference = endDate - time;
      //   let seconds = Math.ceil(difference / 1000);
      //   let minutes = Math.floor(seconds / 60);
      //   let hours = Math.floor(minutes / 60)
      //   let days = Math.floor(hours / 24);
      //   if (seconds > 60) {
      //     seconds = seconds % 60;
      //   }
      //   if (minutes > 60) {
      //     minutes = minutes % 60;
      //   }
      //   if (hours > 24) {
      //     hours = hours % 24;
      //   }
      //   document.querySelector('#dayCase').innerHTML = view.fillZero(days);
      //   document.querySelector('#hourCase').innerHTML = view.fillZero(hours);
      //   document.querySelector('#minuteCase').innerHTML = view.fillZero(minutes);
      //   document.querySelector('#secondCase').innerHTML = view.fillZero(seconds);
      // },


      // this function is designed for the slideshow.

      renderCalendar: function () {

        let banner = data.banners[data.bannerID];

        let bannerImg = document.querySelector('#calendarImg');
        bannerImg.src = banner.img;
        bannerImg.alt = banner.name;
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
