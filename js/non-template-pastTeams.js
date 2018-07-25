(function () {

  let data = {

      // All that follows is a dataset for teams
      /*
        When adding teams you only need to copy and paste the right things
        together. Each year is an array of objects (corresponding to a quarter).
        each object will have a set of properties (self-explanitory) but noModal
        is used in the event that a team doesn't have all required information
        to complete a model.
      */

      teamID: "",

      years: {
        yearOne: [
          {
            showcase: "build yourself",
            photo: "img/Banners/firstShowcase.jpg",
            video: "",
            teams: [
              {
                name: "Alpha Class",
                directors: "Dione Dacuycuy | Julianna Bianes",
                captains: "",
                photo: "img/teams/_14_15/15W - Alpha Class.jpg",
                video: "https://www.youtube-nocookie.com/embed/FoP_fVAzKl8?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "OOE",
                directors: "Zheng Sun | Michael Bonifacio",
                captains: "",
                photo: "img/teams/_14_15/15W - OOE.jpg",
                video: "https://www.youtube-nocookie.com/embed/zK6fgx9Lz-M?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "TakeOff",
                directors: "Samantha Amos | Kevin Yeh",
                captains: "",
                photo: "img/teams/_14_15/15W - Takeoff.jpg",
                video: "https://www.youtube-nocookie.com/embed/oxSHs-DCl8c?rel=0&amp;showinfo=0",
                noModal: false
              },
            ],
          },
          {
            showcase: "emerge",
            photo: "img/Banners/secondShowcase.jpg",
            video: "",
            teams: [
              {
                name: "Betta Werk",
                directors: "Dione Dacuycuy | Julianna Bianes",
                captains: "",
                photo: "img/teams/_14_15/15W - Betta Werk.jpg",
                video: "https://www.youtube-nocookie.com/embed/l0_pOdBwjRI?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Fireworks",
                directors: "Zheng Sun | Justin Lee | Hesed Cabornida",
                captains: "",
                photo: "img/teams/_14_15/15W - Fireworks.jpg",
                video: "https://www.youtube-nocookie.com/embed/Qa7Xy-sho-0?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Landing",
                directors: "Samantha Amos | Kevin Yeh",
                captains: "",
                photo: "img/teams/_14_15/15W - Landing.jpg",
                video: "https://www.youtube-nocookie.com/embed/9oS-880lHjg?rel=0&amp;showinfo=0",
                noModal: false
              },
            ],
          }
        ],

        yearTwo: [
          {
            showcase: "summer 2015",
            photo: "img/Banners/firstSummer.jpg",
            video: "",
            teams: [
              {
                name: "Squirtle Squad",
                directors: "Benjamin Mark Nabong | Alexandria Arenas | Marlo Manuel Carreon",
                captains: "",
                photo: "img/teams/placeholder.jpg",
                video: "https://www.youtube-nocookie.com/embed/-5Jy4LbDwn8?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Baggage Claim",
                directors: "Kevin Yeh | Samantha Amos",
                captains: "",
                photo: "img/teams/_15_16/15SUM - Baggage Claim.jpg",
                video: "https://www.youtube-nocookie.com/embed/zUVZ6Upi42Q?rel=0&amp;showinfo=0",
                noModal: false
              }
            ]
          },
          {
            showcase: "Freefall",
            photo: "img/Banners/thirdShowcase.jpg",
            video: "",
            teams: [
              {
                name: "Core",
                directors: "Jason Chang | Adeney Zo",
                captains: "Sarah Park",
                photo: "img/teams/_15_16/15F - CORE.jpg",
                video: "https://www.youtube-nocookie.com/embed/1lGw24rQuEk?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Full Metal Movement",
                directors: "Bashir Hydari | Patrick Tran",
                captains: "Jonnby LaGuardia",
                photo: "img/teams/_15_16/15F - Full Metal Movement.jpg",
                video: "https://www.youtube-nocookie.com/embed/T5RBaPK_rQE?rel=0&amp;showinfo=0"
                noModal: false
              },
              {
                name: "Square One",
                directors: "Angela David | Jucel Andrin",
                captains: "",
                photo: "img/teams/_15_16/15F - SquareOne.jpg",
                video: "ttps://www.youtube-nocookie.com/embed/LYrX6IDqlvE?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Squirtle Squad Gen 2",
                directors: "",
                captains: "",
                photo: "img/teams/_15_16/15F - Squirtle Squad Gen 2.jpg",
                video: ""
                noModal: true,
              },
              {
                name: "Ultraviolet",
                directors: "Zenon Davis | Kevin Lee",
                captains: "Karen Lee",
                photo: "img/teams/_15_16/15F - Ultraviolet.jpg",
                video: "https://www.youtube-nocookie.com/embed/yfELyBOjP5M?rel=0&amp;showinfo=0",
                noModal: false
              },
            ]
          },
          {
            showcase: "Cascade",
            photo: "img/Banners/fourthShowcase.jpg",
            video: "https://www.youtube-nocookie.com/embed/yTcrYQWzYmk?rel=0&amp;showinfo=0",
            teams: [
              {
                name: "U-KNIGHTED",
                directors: "Dexter Amande | Patrick Tran | Gene Viloria",
                captains: "Amanat Bal | Steve Chung",
                photo: "img/teams/_15_16/16W - U-Knighted.jpg",
                video: "https://www.youtube-nocookie.com/embed/BnH-A2ZOTFg?rel=0&amp;showinfo=0"
                noModal: false
              },
              {
                name: "Infrared",
                directors: "Zenon Davis | Kevs Lee",
                captains: "Belinda Chiu | Andrew Suykry",
                photo: "img/teams/_15_16/16W - Infrared.jpg",
                video: "https://www.youtube-nocookie.com/embed/XS65c-6q79U?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Squirtle Squad Gen 3",
                directors: "Benjamin Mark Nabong | Dennis Tran",
                captains: "Yena Choi | Emily Ren",
                photo: "img/teams/_15_16/16W - Squirtle Squad Gen 3.jpg",
                video: "https://www.youtube-nocookie.com/embed/CtgjSDn2KwQ?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Root Two",
                directors: "",
                captains: "",
                photo: "img/teams/_15_16/16W - RootTwo.jpg",
                video: "",
                noModal: true
              },
              {
                name: "Groove Factory",
                directors: "",
                captains: "",
                photo: "img/teams/_15_16/16W - Groove Factory.jpg",
                video: "",
                noModal: true
              },
            ]
          },
        ]
      },


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


      },

      adminContent: function() {
        document.querySelectorAll('.adminPics').forEach(function(pic){
          pic.addEventListener('mouseout', function(e){
            document.querySelector('#adminBox').remove();
          });
          pic.addEventListener('mouseover', function(e){
            let offsets = e.target.getBoundingClientRect();
            let xcord = offsets.left;
            let ycord = offsets.top + window.pageYOffset - e.target.clientTop;
            let name = e.target.alt;

            connector.createTextBox(xcord,ycord,name);
          });
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
        data.branchID = 'executives';
        document.querySelector('#lshipDescription').classList.add('flyIn');
        view.render();
      },

      render: function() {

        //must be in lower case

      }
  };

  let connector = {

      init: function() {
        model.init();
        view.init();
      },

      ready: function() {
        view.render();
      },


  };

  connector.init();
})();
