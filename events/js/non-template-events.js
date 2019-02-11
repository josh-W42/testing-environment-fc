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
        title: 'NSUdays Winter Workshops',
        start: '2019-02-05T17:00:00',
        detail: `Come out to workshops hosted by NSU Modern!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/2189735164613122/'
      },
      {
        title: 'Psypher Mental Health Dance Workshops',
        start: '2019-02-08T20:00:00',
        detail: `Come out to Psypher's dance workshops!`,
        imgSrc: "../img/events/Non_fc_events/psypher_workshops.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/364316264191786/'
      },
      {
        title: 'FC Winter 2019 Workshop Series',
        start: '2019-02-08T18:00:00',
        detail: `It’s getting pretty cold outside, and we’ve got the perfect thing to help you warm up. Now presenting: FC Winter 2019 Workshop Series! Get ready to grow, train, and challenge yourself with a variety of different styles from choreographers of all backgrounds. It’s about to get hot in here...`,
        imgSrc: "../img/events/workshops/winter/workshop_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/332852180889489/'
      },
      {
        title: 'FC Winter 2019 Dodgeball Tournament',
        start: '2019-02-09T14:00:00',
        detail: `It’s time to pick back up that New Year’s resolution and start hitting the gym again, because it’s here: now presenting FC’s second ever Dodgeball Tournament! Have a taste for some friendly competition? Been hitting the gym since the new year for this very reason? It’s your time to shine! Sign up and battle it out with other members of our 2019 Winter training teams for a chance to win some awesome prizes!`,
        imgSrc: "../img/events/dodgeball_0209.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/407300399841674/'
      },
      {
        title: 'NSUdays Winter Workshops',
        start: '2019-02-10T17:00:00',
        detail: `Come out to workshops hosted by NSU Modern!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/2189735164613122/'
      },
      {
        title: 'FC Winter 2019 Workshop Series',
        start: '2019-02-15T20:00:00',
        detail: `It’s getting pretty cold outside, and we’ve got the perfect thing to help you warm up. Now presenting: FC Winter 2019 Workshop Series! Get ready to grow, train, and challenge yourself with a variety of different styles from choreographers of all backgrounds. It’s about to get hot in here...`,
        imgSrc: "../img/events/workshops/winter/workshop_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/332852180889489/'
      },
      {
        title: 'FC Winter Intensive 2019',
        start: '2019-02-16T13:00:00',
        detail: `Take a break from midterms and relieve all your pent up stress this President’s Day weekend in the best way possible. Join us for two jam-packed days of dancing! Learn from FOUR talented featured choreographers and build, train, and challenge yourself with FC.`,
        imgSrc: "../img/events/wintensive_2019.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/294529687878927/'
      },
      {
        title: 'FC Winter Intensive 2019',
        start: '2019-02-17T13:00:00',
        detail: `Take a break from midterms and relieve all your pent up stress this President’s Day weekend in the best way possible. Join us for two jam-packed days of dancing! Learn from FOUR talented featured choreographers and build, train, and challenge yourself with FC.`,
        imgSrc: "../img/events/wintensive_2019.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/294529687878927/'
      },
      {
        title: 'NSUdays Winter Workshops',
        start: '2019-02-17T17:00:00',
        detail: `Come out to workshops hosted by NSU Modern!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/2189735164613122/'
      },
      {
        title: 'Psypher Mental Health Dance Workshops',
        start: '2019-02-19T20:00:00',
        detail: `Come out to Psypher's dance workshops!`,
        imgSrc: "../img/events/Non_fc_events/psypher_workshops.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/364316264191786/'
      },
      {
        title: 'NSUdays Winter Workshops',
        start: '2019-02-24T17:00:00',
        detail: `Come out to workshops hosted by NSU Modern!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/2189735164613122/'
      },
      {
        title: 'Samahang Modern Friday Night Workshops',
        start: '2019-03-01T20:00:00',
        detail: `Come out to workshops hosted by Samahang Modern`,
        imgSrc: "../img/events/Non_fc_events/sama_winter_wksp.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/590586374718316/'
      },
      {
        title: 'FC Winter 2019 Workshop Series',
        start: '2019-03-02T20:00:00',
        detail: `It’s getting pretty cold outside, and we’ve got the perfect thing to help you warm up. Now presenting: FC Winter 2019 Workshop Series! Get ready to grow, train, and challenge yourself with a variety of different styles from choreographers of all backgrounds. It’s about to get hot in here...`,
        imgSrc: "../img/events/workshops/winter/workshop_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/332852180889489/'
      },
      {
        title: 'NSUdays Winter Workshops',
        start: '2019-03-03T17:00:00',
        detail: `Come out to workshops hosted by NSU Modern!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/2189735164613122/'
      },
      {
        title: 'Psypher Mental Health Dance Workshops',
        start: '2019-03-08T20:00:00',
        detail: `Come out to Psypher's dance workshops!`,
        imgSrc: "../img/events/Non_fc_events/psypher_workshops.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/364316264191786/'
      },
      {
        title: 'Samahang Modern Friday Night Workshops',
        start: '2019-03-08T20:00:00',
        detail: `Come out to workshops hosted by Samahang Modern`,
        imgSrc: "../img/events/Non_fc_events/sama_winter_wksp.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/590586374718316/'
      },
      {
        title: 'FC Winter 2019 Workshop Series',
        start: '2019-03-09T20:00:00',
        detail: `It’s getting pretty cold outside, and we’ve got the perfect thing to help you warm up. Now presenting: FC Winter 2019 Workshop Series! Get ready to grow, train, and challenge yourself with a variety of different styles from choreographers of all backgrounds. It’s about to get hot in here...`,
        imgSrc: "../img/events/workshops/winter/workshop_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/332852180889489/'
      },
      {
        title: 'NSUdays Winter Workshops',
        start: '2019-03-10T17:00:00',
        detail: `Come out to workshops hosted by NSU Modern!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/2189735164613122/'
      },
      {
        title: 'FC Winter 2019 Workshop Series',
        start: '2019-03-15T20:00:00',
        detail: `It’s getting pretty cold outside, and we’ve got the perfect thing to help you warm up. Now presenting: FC Winter 2019 Workshop Series! Get ready to grow, train, and challenge yourself with a variety of different styles from choreographers of all backgrounds. It’s about to get hot in here...`,
        imgSrc: "../img/events/workshops/winter/workshop_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/332852180889489/'
      },
      {
        title: 'NSUdays Winter Workshops',
        start: '2019-03-17T17:00:00',
        detail: `Come out to workshops hosted by NSU Modern!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/2189735164613122/'
      },
      {
        title: 'NSUdays Winter Workshops',
        start: '2019-03-24T17:00:00',
        detail: `Come out to workshops hosted by NSU Modern!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/2189735164613122/'
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
