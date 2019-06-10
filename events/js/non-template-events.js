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
      {
        title: 'FC Spring 2019 Workshop Series',
        start: '2019-04-12T20:00:00',
        detail: `The sun is shining, the birds are chirping, the flowers are in full bloom. Spring is here, and so is FC’s quarterly workshop series! Bounce down to Lot 4 P1 and learn some cool choreography from a variety of talented choreographers.`,
        imgSrc: "../img/events/workshops/spring/wk_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/266512220895520/'
      },
      {
        title: 'NSUndays Spring Workshops',
        start: '2019-04-14T16:30:00',
        detail: `Come out to NSU's Sunday Workshops!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays_spring.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/282248839359030/'
      },
      {
        title: "Samahang Modern | Friends and Family Night",
        start: '2019-04-18T22:00:00',
        detail: `Come out to Samahang Modern's Friends and Fam Night this Thursday!`,
        imgSrc: "../img/events/Non_fc_events/sama_friends_fam.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/679325635817262/'
      },
      {
        title: 'FC Spring 2019 Workshop Series',
        start: '2019-04-19T18:00:00',
        detail: `The sun is shining, the birds are chirping, the flowers are in full bloom. Spring is here, and so is FC’s quarterly workshop series! Bounce down to Lot 4 P1 and learn some cool choreography from a variety of talented choreographers.`,
        imgSrc: "../img/events/workshops/spring/wk_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/266512220895520/'
      },
      {
        title: "NSU Modern Friends & Family",
        start: '2019-04-19T22:00:00',
        detail: `Come out to NSU Modern's Friends and Fam Night this Friday!`,
        imgSrc: "../img/events/Non_fc_events/nsu_friends_fam.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/443274779547905/'
      },
      {
        title: "FC Spring 2019 Super Smash Bash",
        start: '2019-04-20T19:00:00',
        detail: `Our Super Smash Bash is the perfect way to bond with your new team AND flex your smash skills in front of a crowd. Want to spectate? Try your hand at some board games and watch the drama unfold from the sidelines! All of our Spring 2019 team members are welcome to join in on the fun! Come down to the SAC Gym (2nd floor) from 7-9PM for a great night!`,
        imgSrc: "../img/events/smash_bash.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/1564814063649954/'
      },
      {
        title: 'NSUndays Spring Workshops',
        start: '2019-04-21T16:30:00',
        detail: `Come out to NSU's Sunday Workshops!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays_spring.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/282248839359030/'
      },
      {
        title: 'ACA Hip Hop | Friends & Family (ALL CAL)',
        start: '2019-04-24T22:00:00',
        detail: `Come out to ACA's Friends and Fam Night on Wednesday!`,
        imgSrc: "../img/events/Non_fc_events/aca_friends_fam.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/325497691445382/'
      },
      {
        title: 'Psypher Mental Health Dance Workshops | Spring 2019',
        start: '2019-04-26T18:00:00',
        detail: `Come out to Psypher's Workshops!`,
        imgSrc: "../img/events/Non_fc_events/psypher_workshops_spring.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/453253145217982/'
      },
      {
        title: 'NSUndays Spring Workshops',
        start: '2019-04-28T16:30:00',
        detail: `Come out to NSU's Sunday Workshops!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays_spring.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/282248839359030/'
      },
      {
        title: 'FC Spring 2019 Workshop Series',
        start: '2019-05-03T18:00:00',
        detail: `The sun is shining, the birds are chirping, the flowers are in full bloom. Spring is here, and so is FC’s quarterly workshop series! Bounce down to Lot 4 P1 and learn some cool choreography from a variety of talented choreographers.`,
        imgSrc: "../img/events/workshops/spring/wk_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/266512220895520/'
      },
      {
        title: 'Psypher Mental Health Dance Workshops | Spring 2019',
        start: '2019-05-03T20:00:00',
        detail: `Come out to Psypher's Workshops!`,
        imgSrc: "../img/events/Non_fc_events/psypher_workshops_spring.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/453253145217982/'
      },
      {
        title: 'FC Spring 2019 Dodgeball Tournament + Pie Your LSHIP Fundraiser',
        start: '2019-05-05T15:00:00',
        detail: `Need to release some midterms stress? You’re in luck, because the FC Dodgeball Tournament is back and better than ever! <br/><br/> And this time, we’ve got a special treat lined up for you. Has your LSHIP been pushing you too hard? Makes you run laps when you’re late? Always forcing you to do condition? Here’s your golden opportunity to get back at them: pie your LSHIP! <br/><br/> Come out for some sweet revenge, some dodgeball action, and a chance to win some dope prizes! <br/><br/> Sign up for dodgeball tournament: <br/> <a href="https://forms.gle/R8vZBhtC5bqrE2iX7">https://forms.gle/R8vZBhtC5bqrE2iX7</a> <br/><br/> Sign up to pie your LSHIP: <br/> <a href="https://forms.gle/WP9xAg87iAzK3thn9">https://forms.gle/WP9xAg87iAzK3thn9</a> <br/><br/>`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays_spring.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/282248839359030/'
      },
      {
        title: 'NSUndays Spring Workshops',
        start: '2019-05-05T16:30:00',
        detail: `Come out to NSU's Sunday Workshops!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays_spring.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/282248839359030/'
      },
      {
        title: 'FC LSHIP 2019-20 Info Session',
        start: '2019-05-08T18:00:00',
        detail: `Considering applying for an admin LSHIP position next year, but not sure which one is right for you? <br/><br/> Come to one of our spring admin LSHIP info session to learn more about which positions are available, and how you can get involved! Presentations will cover position expectations, application info, and more! Our current admin LSHIP will also be available for you to talk to if you have any additional questions. <br/><br/> Come out Wednesday, May 8th and Thursday, May 9th and start your Foundations LSHIP journey right. <br/><br/> Applications will be released on Monday, May 6th!`,
        imgSrc: "../img/events/lshipInfoSesh.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/599142433920554/'
      },
      {
        title: 'FC LSHIP 2019-20 Info Session',
        start: '2019-05-09T18:00:00',
        detail: `Considering applying for an admin LSHIP position next year, but not sure which one is right for you? <br/><br/> Come to one of our spring admin LSHIP info session to learn more about which positions are available, and how you can get involved! Presentations will cover position expectations, application info, and more! Our current admin LSHIP will also be available for you to talk to if you have any additional questions. <br/><br/> Come out Wednesday, May 8th and Thursday, May 9th and start your Foundations LSHIP journey right. <br/><br/> Applications will be released on Monday, May 6th!`,
        imgSrc: "../img/events/lshipInfoSesh.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/599142433920554//'
      },
      {
        title: 'FC Spring 2019 Workshop Series',
        start: '2019-05-10T20:00:00',
        detail: `The sun is shining, the birds are chirping, the flowers are in full bloom. Spring is here, and so is FC’s quarterly workshop series! Bounce down to Lot 4 P1 and learn some cool choreography from a variety of talented choreographers.`,
        imgSrc: "../img/events/workshops/spring/wk_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/266512220895520/'
      },
      {
        title: 'Psypher Mental Health Dance Workshops | Spring 2019',
        start: '2019-05-10T20:00:00',
        detail: `Come out to Psypher's Workshops!`,
        imgSrc: "../img/events/Non_fc_events/psypher_workshops_spring.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/453253145217982/'
      },
      {
        title: 'NSUndays Spring Workshops',
        start: '2019-05-12T16:30:00',
        detail: `Come out to NSU's Sunday Workshops!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays_spring.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/282248839359030/'
      },
      {
        title: 'FC Spring 2019 Workshop Series',
        start: '2019-05-17T18:00:00',
        detail: `The sun is shining, the birds are chirping, the flowers are in full bloom. Spring is here, and so is FC’s quarterly workshop series! Bounce down to Lot 4 P1 and learn some cool choreography from a variety of talented choreographers.`,
        imgSrc: "../img/events/workshops/spring/wk_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/266512220895520/'
      },
      {
        title: 'NSUndays Spring Workshops',
        start: '2019-05-19T16:30:00',
        detail: `Come out to NSU's Sunday Workshops!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays_spring.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/282248839359030/'
      },
      {
        title: 'FC Spring 2019 Workshop Series',
        start: '2019-06-01T20:00:00',
        detail: `The sun is shining, the birds are chirping, the flowers are in full bloom. Spring is here, and so is FC’s quarterly workshop series! Bounce down to Lot 4 P1 and learn some cool choreography from a variety of talented choreographers.`,
        imgSrc: "../img/events/workshops/spring/wk_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/266512220895520/'
      },
      {
        title: 'FC Spring 2019 Choreo Showcase',
        start: '2019-05-24T19:00:00',
        detail: `Have you been cooking up the perfect choreography and would love to have a taste of the spotlight? <br/><br/> The FC Spring 2019 Choreo Showcase is the best way to show your creativity and dazzle the audience with your talents! Whether you do a solo performance, or join a group endeavor, you will not regret signing up for Choreo Showcase! <br/><br/> Sign up form will be released on Tuesday, May 7th!`,
        imgSrc: "../img/events/spring_choreo.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/435100040391677/'
      },
      {
        title: 'NSUndays Spring Workshops',
        start: '2019-05-26T16:30:00',
        detail: `Come out to NSU's Sunday Workshops!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays_spring.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/282248839359030/'
      },
      {
        title: 'Voyage: Foundations Choreography Spring 2019 Exhibition',
        start: '2019-06-02T19:00:00',
        detail: `A year in review; <br/><br/> We arose to begin our journey in the fall, and soared to new heights in the winter. Now, as we approach the end of this flight, we gather to reflect on three quarters of growth. <br/><br/> Our five spring teams have been working hard to create beautiful, original sets for your viewing pleasure. <br/><br/> Come to our thirteenth exhibition, Voyage, to see the culmination of three quarters of growing, training, and challenging.`,
        imgSrc: "../img/Banners/thirteenthShowcase.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/2349224062019227/'
      },
      {
        title: 'FC Spring 2019 Workshop Series',
        start: '2019-06-07T20:00:00',
        detail: `The sun is shining, the birds are chirping, the flowers are in full bloom. Spring is here, and so is FC’s quarterly workshop series! Bounce down to Lot 4 P1 and learn some cool choreography from a variety of talented choreographers.`,
        imgSrc: "../img/events/workshops/spring/wk_banner.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/266512220895520/'
      },
      {
        title: 'NSUndays Spring Workshops',
        start: '2019-06-02T16:30:00',
        detail: `Come out to NSU's Sunday Workshops!`,
        imgSrc: "../img/events/Non_fc_events/nsu_sundays_spring.jpg",
        instructor_info: "",
        eventLink: 'https://www.facebook.com/events/282248839359030/'
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
