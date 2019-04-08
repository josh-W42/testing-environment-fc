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
        title: 'FC Spring Team Application Drops',
        start: '2019-03-30T18:00:00',
        detail: `Want to learn how to dance in a friendly, supportive environment? Apply to join one of our spring training teams and follow your dreams! <br/><br/> Head over to our apply page to open the application when it drops!`,
        imgSrc: "../img/Banners/springAuditions19.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/266512220895520/'
      },
      {
        title: 'FC Spring Pre-Auditions Workshops',
        start: '2019-04-02T18:00:00',
        detail: `Nervous about dancing for the first time? Come to our pre-audition workshops to get a taste of what you’ll be learning on your teams, as well as meet our LSHIP members!`,
        imgSrc: "../img/Banners/springAuditions19.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/266512220895520/'
      },
      {
        title: 'FC Spring Team Auditions Day 1',
        start: '2019-04-03T18:00:00',
        detail: `Want to learn how to dance in a friendly, supportive environment? Apply to join one of our spring training teams and follow your dreams!`,
        imgSrc: "../img/Banners/springAuditions19.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/266512220895520/'
      },
      {
        title: 'FC Spring Team Auditions Day 2',
        start: '2019-04-04T18:00:00',
        detail: `Want to learn how to dance in a friendly, supportive environment? Apply to join one of our spring training teams and follow your dreams!`,
        imgSrc: "../img/Banners/springAuditions19.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/266512220895520/'
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

      setLazy: function() {
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
            document.querySelector('#modalEventLink').href = calEvent.event.def.extendedProps.eventLink;
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
