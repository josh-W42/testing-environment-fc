(function () {

  let data = {

      lazy: [],
      cleanLazy: function() {
          data.lazy = Array.prototype.filter.call(data.lazy, function(l){ return l.getAttribute('data-src');});
      },

      apps: [
        {
          name: "dance",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSdMzpkG0TMjHj-MoYmRyr8MyNoF1sPfJTHOvnAdAwWhr9oLmg/viewform",
        },
        {
          name: "workshop",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSf9Gr3k0UCQJcKop4vSzapqUupETBYHwS7OGtYJKNrJSiWO5A/viewform",
        },
        {
          name: 'team',
          link: "https://docs.google.com/forms/d/e/1FAIpQLSc2P8dyY-xKiryb4lYM1NaSqG82DPj5NmAY53SErkFHVUqyBg/viewform",
        },
        {
          name: 'choreoShowcase',
          link: "https://docs.google.com/forms/d/e/1FAIpQLSfuTtGYUJlrAIdEV1bL3EAwVg4s7n_PEOmI9OBoGAxanLF3kg/viewform"
        },
        {
            name: "wintensive",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSesWygJOX2tbpfsrpzqvOnIoARYyGE9808XAQtCIV08EeKjXQ/viewform"
        },
        {
            name: "intern",
            link: "https://tinyurl.com/y2vwlr9n"
        }
      ],
  };

  let model = {

      init: function() {
          // The code below is for implementing a 'lazy loading' strategy,
          // a small place holder is over an image as source then, once the
          // page loads it is replaced with the actual picture.
          model.registerListener('load', model.setLazy);
          model.registerListener('load', model.lazyLoad);
          model.registerListener('scroll', model.lazyLoad);

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

    timerGo: true,

    init: function() {
      // view.runTimmer();
    },


    fillZero: function(num) {
      //This function should "fill zeros" on the display.
      if (num < 10) {
        num = "0" + num;
      }
      return num;
    },

    runTimmer: function() {
      if(view.timerGo) {
        // This function will run in the background, constantly updating the timer.
        const currentDate = new Date();
        view.timeDifference(currentDate);
        setTimeout(view.runTimmer, 200);
      }
    },


    timeDifference: function(time) {
      // Use this function to select your countdown end date.
      const endDate = new Date('February 8, 2018 18:00:00');
      const difference = endDate - time;
      let seconds, minutes, hours, days;
      if(difference <= 0) {
        seconds = 0;
        minutes = 0;
        hours = 0;
        days = 0;

        view.timerGo = false;


      } else {
        seconds = Math.ceil(difference / 1000);
        minutes = Math.floor(seconds / 60);
        hours = Math.floor(minutes / 60);
        days = Math.floor(hours / 24);
        if (seconds > 60) {
          seconds = seconds % 60;
        }
        if (minutes > 60) {
          minutes = minutes % 60;
        }
        if (hours > 24) {
          hours = hours % 24;
        }
      }
      document.querySelector('#dayCase').innerHTML = view.fillZero(days);
      document.querySelector('#hourCase').innerHTML = view.fillZero(hours);
      document.querySelector('#minuteCase').innerHTML = view.fillZero(minutes);
      document.querySelector('#secondCase').innerHTML = view.fillZero(seconds);
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
