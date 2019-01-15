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
        title: 'Winter Team App Drops',
        start: '2019-01-02T18:00:00',
        detail: `Fill out the audition form BEFORE the audition dates. Apply to join one of our Winter training teams for a unique, unforgettable experience. Our training teams will not only teach you dance fundamentals--they will be building a set throughout the quarter that will be performed on-stage at our end-of-the-quarter exhibition!`,
        imgSrc: "../img/Banners/winterAuditions19.jpg",
        eventLink: 'https://www.facebook.com/events/464363797423661/'
      },
      {
        title: 'ACA Midyear Auditions',
        start: '2019-01-07T18:00:00',
        detail: `Come out to ACA's midyear audition workshop!`,
        imgSrc: "../img/events/Non_fc_events/aca_midyear.jpg",
        eventLink: 'https://www.facebook.com/events/368512440385264/'
      },
      {
        title: 'Koreos Midyear Pre-Audition Workshop',
        start: '2019-01-07T20:30:00',
        detail: `Come out to Koreos' midyear pre-audition workshop!`,
        imgSrc: "../img/events/Non_fc_events/koreos_midyear.jpg",
        eventLink: 'https://www.facebook.com/events/763395274038308/?event_time_id=763395280704974'
      },
      {
        title: 'Koreos Midyear Audition Workshop',
        start: '2019-01-08T20:30:00',
        detail: `Come out to Koreos' midyear audition workshop!`,
        imgSrc: "../img/events/Non_fc_events/koreos_midyear.jpg",
        eventLink: 'https://www.facebook.com/events/763395277371641'
      },
      {
        title: 'Winter Pre-Audition Workshop 1',
        start: '2019-01-08T18:00:00',
        end: '2019-01-08T20:00:00',
        detail: "The holidays have come and gone, but you still have a few things left on your wishlist... and what better way to welcome the new year than with a brand new experience? Our Winter teams are almost here, but before they get the quarter started they need YOU!",
        imgSrc: "../img/Banners/winterAuditions19.jpg",
        eventLink: 'https://www.facebook.com/events/464363797423661/?event_time_id=465380280655346'
      },
      {
        title: 'Winter Pre-Audition Workshop 2',
        start: '2019-01-08T20:00:00',
        end: '2019-01-08T22:00:00',
        detail: "The holidays have come and gone, but you still have a few things left on your wishlist... and what better way to welcome the new year than with a brand new experience? Our Winter teams are almost here, but before they get the quarter started they need YOU!",
        imgSrc: "../img/Banners/winterAuditions19.jpg",
        eventLink: 'https://www.facebook.com/events/465380283988679'
      },
      {
        title: 'Winter Auditions Day 1',
        start: '2019-01-09T18:00:00',
        detail: "The holidays have come and gone, but you still have a few things left on your wishlist... and what better way to welcome the new year than with a brand new experience? Our Winter teams are almost here, but before they get the quarter started they need YOU!",
        imgSrc: "../img/Banners/winterAuditions19.jpg",
        eventLink: 'https://www.facebook.com/events/464363807423660'
      },
      {
        title: 'Winter Auditions Day 2',
        start: '2019-01-10T18:00:00',
        detail: "The holidays have come and gone, but you still have a few things left on your wishlist... and what better way to welcome the new year than with a brand new experience? Our Winter teams are almost here, but before they get the quarter started they need YOU!",
        imgSrc: "../img/Banners/winterAuditions19.jpg",
        eventLink: 'https://www.facebook.com/events/464363800756994'
      },
      {
        title: 'NSU Modern Midyear Auditions',
        start: '2019-01-10T19:00:00',
        detail: `Come out to NSU Modern's midyear audition workshop!`,
        imgSrc: "../img/events/Non_fc_events/nsu_midyear.jpg",
        eventLink: 'https://www.facebook.com/events/544968559246410/'
      },
      {
        title: 'SEOULA Midyear Auditions',
        start: '2019-01-10T18:30:00',
        detail: `Come out to SEOULA's midyear audition workshop!`,
        imgSrc: "../img/events/Non_fc_events/seoula_midyear.jpg",
        eventLink: 'https://www.facebook.com/events/2251966451714270/'
      },
      {
        title: 'VSU Modern Midyear Auditions',
        start: '2019-01-11T20:00:00',
        detail: `Come out to VSU Modern's midyear audition workshop!`,
        imgSrc: "../img/events/Non_fc_events/vsu_midyear.jpg",
        eventLink: 'https://www.facebook.com/events/544968559246410/'
      },
      {
        title: 'Samahang Modern Midyear Auditions',
        start: '2019-01-14T19:00:00',
        detail: `Come out to Samahang Modern's midyear audition workshop!`,
        imgSrc: "../img/events/Non_fc_events/sama_midyear.jpg",
        eventLink: 'https://www.facebook.com/events/544968559246410/'
      },
      {
        title: 'FC Winter 2019 Workshop Series',
        start: '2019-01-18T20:00:00',
        detail: `It’s getting pretty cold outside, and we’ve got the perfect thing to help you warm up. Now presenting: FC Winter 2019 Workshop Series! Get ready to grow, train, and challenge yourself with a variety of different styles from choreographers of all backgrounds. It’s about to get hot in here...`,
        imgSrc: "../img/events/workshops/winter/workshop_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/332852180889489/'
      },
      {
        title: 'FC Winter 2019 Board Game Night',
        start: '2019-01-19T20:00:00',
        detail: `Looking for a chill, wholesome way to bond with your brand new team? Too early in the quarter for a crazy Saturday night out? Come to Hedrick Movement Studio on Saturday, January 19th for an all-team board game night! This is the perfect chance to get to know your teammates, people from other teams, and even your lship! Board games, free snacks, new friends..it's all waiting for you at our 2019 Winter board game night!`,
        imgSrc: "../img/events/board_game_night.jpg",
        eventLink: 'https://www.facebook.com/events/2164569110265823/'
      },
      {
        title: 'FC Winter 2019 Workshop Series',
        start: '2019-01-25T20:00:00',
        detail: `It’s getting pretty cold outside, and we’ve got the perfect thing to help you warm up. Now presenting: FC Winter 2019 Workshop Series! Get ready to grow, train, and challenge yourself with a variety of different styles from choreographers of all backgrounds. It’s about to get hot in here...`,
        imgSrc: "../img/events/workshops/winter/workshop_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/332852180889489/'
      },
      {
        title: 'FC Winter 2019 Workshop Series',
        start: '2019-02-01T20:00:00',
        detail: `It’s getting pretty cold outside, and we’ve got the perfect thing to help you warm up. Now presenting: FC Winter 2019 Workshop Series! Get ready to grow, train, and challenge yourself with a variety of different styles from choreographers of all backgrounds. It’s about to get hot in here...`,
        imgSrc: "../img/events/workshops/winter/workshop_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/332852180889489/'
      },
      {
        title: 'FC Winter 2019 Workshop Series',
        start: '2019-02-08T20:00:00',
        detail: `It’s getting pretty cold outside, and we’ve got the perfect thing to help you warm up. Now presenting: FC Winter 2019 Workshop Series! Get ready to grow, train, and challenge yourself with a variety of different styles from choreographers of all backgrounds. It’s about to get hot in here...`,
        imgSrc: "../img/events/workshops/winter/workshop_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/332852180889489/'
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
        title: 'FC Winter 2019 Workshop Series',
        start: '2019-03-02T20:00:00',
        detail: `It’s getting pretty cold outside, and we’ve got the perfect thing to help you warm up. Now presenting: FC Winter 2019 Workshop Series! Get ready to grow, train, and challenge yourself with a variety of different styles from choreographers of all backgrounds. It’s about to get hot in here...`,
        imgSrc: "../img/events/workshops/winter/workshop_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/332852180889489/'
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
        title: 'FC Winter 2019 Workshop Series',
        start: '2019-03-15T20:00:00',
        detail: `It’s getting pretty cold outside, and we’ve got the perfect thing to help you warm up. Now presenting: FC Winter 2019 Workshop Series! Get ready to grow, train, and challenge yourself with a variety of different styles from choreographers of all backgrounds. It’s about to get hot in here...`,
        imgSrc: "../img/events/workshops/winter/workshop_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/332852180889489/'
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
