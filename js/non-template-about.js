
(function () {

  let data = {
    lazy: [],

    cleanLazy: function() {
      data.lazy = Array.prototype.filter.call(data.lazy, function(l){ return l.getAttribute('data-src');});
    },

    bannerID: 0,
    bannerName: "First Exhibition",

    banners: [
      {
        img: "img/Banners/firstShowcase.jpg",
        name: "First Exhibition",
        title: "Build Yourself"
      },
      {
        img: "img/Banners/secondShowcase.png",
        name: "Second Exhibition",
        title: "Emerge"
      },
      {
        img: "img/Banners/firstFamNight.jpg",
        name: "First Fam Night",
        title: "Winter 2015"
      },
      {
        img: "img/Banners/thirdShowcase.jpg",
        name: "Third Exhibition",
        title: "Freefall"
      },
      {
        img: "img/Banners/oneYearAnniversary.jpg",
        name: "ONE YEAR ANNIVERSARY",
        title: ""
      },
      {
        img: "img/Banners/fourthShowcase.jpg",
        name: "Fourth Exhibition",
        title: "Cascade"
      },
      {
        img: "img/Banners/fifthShowcase.jpg",
        name: "Fifth Exhibition",
        title: "Ignite"
      },
      {
        img: "img/Banners/sixthShowcase.jpg",
        name: "Sixth Exhibition",
        title: "Eclipse"
      },
      {
        img: "img/Banners/seventhShowcase.jpg",
        name: "Seventh Exhibition",
        title: "Aurora"
      },
      {
        img: "img/Banners/friendsAndFam.jpg",
        name: "Friends and Fam Night",
        title: "Spring 2017"
      },
      {
        img: "img/Banners/eighthShowcase.jpg",
        name: "Eighth Exhibition",
        title: "Elysia"
      },
      {
        img: "img/Banners/ninthShowcase.jpg",
        name: "Ninth Exhibition",
        title: "Theoria"
      },
      {
        img: "img/Banners/firstWintensive.jpg",
        name: "First Wintensive",
        title: ""
      },
      {
        img: "img/Banners/tenthShowcase.jpg",
        name: "Tenth Exhibition",
        title: "Kairos"
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
          model.passiveSlide();
      },

      passiveSlide: function() {
        model.nextBanner();
        setTimeout(model.passiveSlide, 7000);
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
          document.querySelector('#slider').classList.add('flyOutRight');
          document.querySelector('#slider').classList.remove('flyInLeft');
          setTimeout(function() {
            document.querySelector('#slider').classList.remove('flyOutRight');
            document.querySelector('#slider').classList.add('flyInRight');
            connector.ready();
          }, 750)
        } else {
          document.querySelector('#slider').classList.add('flyOutLeft');
          document.querySelector('#slider').classList.remove('flyInRight');
          setTimeout(function() {
            document.querySelector('#slider').classList.remove('flyOutLeft');
            document.querySelector('#slider').classList.add('flyInLeft');
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

        let words = document.querySelectorAll('.word');
        words.forEach(function(word) {
          word.style.top = 0;
        });

        fArray = [
          document.querySelector('#ellisWong'),
          document.querySelector('#michelleTran'),
          document.querySelector('#michelleLiang'),
          document.querySelector('#joshuaFidelis'),
          document.querySelector('#ashleyPizarro'),
          document.querySelector('#lianaLiang'),
          document.querySelector('#jeremyQuan'),
          document.querySelector('#tennShaun'),
          document.querySelector('#sarahTian'),
          document.querySelector('#miyaSheker'),
        ];
        displayed = false;
        fDisplayed = false;

        // We need an iterator since we're essentially making a slow Ajax loop.
        let i = 0;

        //Because we're using setTimeout we need functions to pass through as call backs.
        // and because the function bellow is recursive.
        function buildCube() {
          setTimeout( function (){
            if (i < words.length && !fDisplayed) {
              words[i].classList.toggle('displayWord');
              words[i].style.top = null;
            }
            else if (!displayed) {
              displayed = true;
              i = 0;
              setTimeout(displayFC, 500);
            }
            if(!displayed){
              i++;
              buildCube();
            }
          }, 400);
        }

        function displayFC() {
          setTimeout( function (){
            if (i < fArray.length && !fDisplayed) {
              fArray[i].classList.toggle('displayF');
              i++;
            }
            else if (!fDisplayed) {
              displayed = true;
              i = 0;
            }
            if(!fDisplayed){
              displayFC();
            }
          }, 500);
        }

        buildCube();

        view.render();
      },


      // this function is designed for the slideshow.

      render: function () {

        let banner = data.banners[data.bannerID];

        let bannerCap = document.querySelector('#bannerCaption');
        bannerCap.innerHTML = banner.name;

        let bannerTitle = document.querySelector('#bannerCaptionTitle');
        bannerTitle.innerHTML = banner.title;

        let bannerImg = document.querySelector('#bannerSlideshow');
        bannerImg.src = banner.img;
        bannerImg.alt = banner.name + " " + banner.title;
      },

  };

  let connector = {

      init: function() {
          model.init();
          view.init();
      },

      ready: function() {
        view.render();
      }


  };

  connector.init();
})();
