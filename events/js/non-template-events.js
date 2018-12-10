import './fullcalendar-4.0.0-alpha.2/fullcalendar-4.0.0-alpha.2/fullcalendar.min.js';


(function () {

  let data = {
    lazy: [],

    cleanLazy: function() {
      data.lazy = Array.prototype.filter.call(data.lazy, function(l){ return l.getAttribute('data-src');});
    },

    bannerID: 0,
    bannerName: 'August Calendar',

    events: [
      {
        title: 'Arise 2018 Showcase',
        start: '2018-12-03T18:00:00',
        detail: 'This quarter, Foundations Choreography has guided five teams down this path of self-discovery, but the end of the journey is near: our 2018 Fall Exhibition, Arise. All five teams will showcase the culmination of their hard work in a special one-time performance on stage. Witness this unforgettable moment at our first showcase of the academic year!',
        imgSrc: "../img/Banners/eleventhShowcase.jpg",
      },
      {
        title: 'Last Workshop of The Quarter',
        start: '2018-12-07T20:00:00',
        detail: "Sebastien Le of Rooks, ACA Hip-Hop, and co-director of siniGANG is coming to Lot 4 P1 TONIGHT from 8PM-10PM. Don't miss out!",
        imgSrc: "../img/Banners/fallWorkShop18.jpg",
      },
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

          document.addEventListener('load', connector.ready);
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
        view.renderCalendar();
      },

      // this function is designed for the slideshow.

      renderCalendar: function () {
        // let eventArray = Window.frames['f1763bea1bc79c4'].document.querySelectorAll('.clearfix');

        const currentDate = new Date();

        const eventsToPlace = data.events;

        var calendarEl = document.querySelector('#calendar');


        var calendar = new FullCalendar.Calendar(calendarEl, {
          eventClick: function(calEvent, jsEvent, view) {
            document.querySelector('#modalImg').src = calEvent.event.def.extendedProps.imgSrc;
            calEvent.el.dataset.toggle = "modal";
            calEvent.el.href= "#eventModal";
            document.querySelector('#modalHeader').innerHTML = calEvent.el.textContent;
            document.querySelector('#modalBody').innerHTML = calEvent.event.def.extendedProps.detail;
            console.log(calEvent, jsEvent, view);
          },

          defaultDate: currentDate ,
          editable: false,
          eventLimit: true, // allow "more" link when too many events
          events: eventsToPlace
          });

        calendar.render();

      },

  };

  let connector = {

      init: function() {
          model.init();
          view.init();
      },

      ready: function() {
        view.renderCalendar();
      },


  };

  connector.init();
})();
