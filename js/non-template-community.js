(function () {

  let data = {
      lazy: [],

      testimonials: [
          {
              img: "img/TestimonialPhotos/AndrewWang.jpg",
              name: "Andrew Wang",
              subName: "Captain of SOL Winter '18",
              uclaInfo: "Economics Major, UCLA Class of 2019",
              fcInfo: "Dance LSHIP: Captain",
              intro: "When I joined Foundations at the start of last school year, I had no idea how impactful this organization would become in shaping my college experience.",
              body: "I came in with no dance experience but quickly found a very supportive community among the incredible people I’ve met through Foundations, and I also developed a very unexpected passion for dance. During last school year's winter quarter, I joined Dance LSHIP as a captain in the hopes of inspiring others to become better dancers, leaders, and people while also giving them the opportunity to find a home for themselves just like I did. While there were certainly moments of challenge and struggle, the overall experience I had on LSHIP was truly amazing and I don’t regret a single moment of it. If you’re interested in joining LSHIP specifically as a captain, just know that any moments of difficulty or uncertainty are nothing compared to the incredible journey that you go through with your team, along with the fact that you played a big part in shaping that journey for your team."
          },
          {
              img: "img/TestimonialPhotos/Diep_Kyle.jpg",
              name: "Kyle Diep",
              subName: "Captain of REV Fall 2017",
              uclaInfo: "Biology, 4th year",
              fcInfo: "Dance LSHIP: Captain",
              intro: "Like many people in Foundations, I never thought that I would ever dance in my life. But I took a chance. I started freshman year and have been dancing a little over a year and a half.",
              body: "To think the first time I did this, I was unwillingly dragged with 10 friends (who all dropped lmao), but now I'm the one dragging people here. However, I still would never have thought to become a captain because I never thought I was good enough dance-wise for the position. I was blessed that I was able to become a captain even with my fears still lingering in my head. But being a captain was truly something I do not regret. Everyone brought a certain dynamic to the team and it made being a captain easier because everyone was friendly. The experience is so rewarding as you can see the progression of everyone throughout the quarter and know that you helped instill their passion for dance. If you are having second thoughts about being a captain, I would say do it. Don't have regrets later in your head because this experience was something of a lifetime. Foundations has given me everlasting friends and the opportunity to find my love for dance and to go even further, eventually joining VSU Modern. If you ever need to talk about dance or becoming a captain, hit me up I'll always be there to talk~ Shoutout to all my REV bbs, Dual Core, and .PDF dancers xoxo."
          },
          {
              img: "img/TestimonialPhotos/Tran_Michelle.jpg",
              name: "Michelle Tran",
              subName: "Captain of Eta Spring '18 and Events Chair '18-'19",
              uclaInfo: "Second Year Undeclared Life Sciences",
              fcInfo: "Admin LSHIP and Dance LSHIP: Captain",
              intro: "The biggest thing I took away from joining Foundations is that you can find a home and a place where you really feel like you belong with this org.",
              body: "Herro! I'm one of the new Events Chairs for the '18-'19 Admin LSHIP but since that hasn't happened quite yet, I'll write about being a captain! (LET'S GO ETA <3). There are so many people from different walks of life and each one is worlds away different from you, but at the end of each quarter, you've spent countless hours working and dancing side by side with these people, and you build so much from it that those differences don't really matter anymore. Experiencing this first hand as a member, it pushed me to be a part of that process by applying for captain for the Spring quarter! Captaining was certainly an amazing experience and so rewarding because you walk through the whole process by your teammates' sides (even through it can mean dancing in a parking lot for 6 hours). But I wouldn't really have it any other way, because I'm on that stage dancing with some of my best friends who, 9 weeks before, were just complete strangers in my life! I'm really excited to be coming back to this org next year as one of the next Events Chairs! I really wanted to help bring this experience to new and returning members and I can't wait to see what the new year has in store! Cy@ all the events keke c;  P.S. HI ETA ILY K BYE"
          },
          {
              img: "http://thecatapi.com/api/images/get?format=src&type=gif",
              name: "Cat",
              subName: "I'm a cool cat",
              uclaInfo: "Dance Major, UCLA Class of 2020 (hehe)",
              fcInfo: "LSHIP Fan",
              intro: "I'm really just a placeholder, no secrets I swear!",
              body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
      ],


      cleanLazy: function() {
          data.lazy = Array.prototype.filter.call(data.lazy, function(l){ return l.getAttribute('data-src');});
      },

      // In the event we have more testimonials in database than we need displayed
      // we use the displayedTestimonials array, look in the model.init function.
      displayedTestimonials: [],

  };

  let model = {

      init: function() {
          // The code below is for implementing a 'lazy loading' strategy,
          // a small place holder is over an image as source then, once the
          // page loads it is replaced with the actual picture.
          model.registerListener('load', model.setLazy);
          model.registerListener('load', model.lazyLoad);
          model.registerListener('scroll', model.lazyLoad);

          /*
            The rest of the init model section is dedicated to setting up
            which testimonials to display.
          */

          for(let i = 0; i < 12; i++) {
              if(i < 3) {
                  data.displayedTestimonials.push(data.testimonials[i]);
              }
              else {
                  data.displayedTestimonials.push(data.testimonials[3]);
              }
          }
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
      },

      // This method is for insuring that the correct modal info is displayed
      // for each img.
      assignClick: function (link, id) {
          link.addEventListener('click', function(){
              document.querySelector('#modalImg').src = data.displayedTestimonials[id].img;
              document.querySelector('#modalName').innerHTML = data.displayedTestimonials[id].name;
              document.querySelector('#modalSubName').innerHTML = data.displayedTestimonials[id].fcInfo;
              document.querySelector('#modalIntro').innerHTML = data.displayedTestimonials[id].intro;
              document.querySelector('#modalBody').innerHTML = data.displayedTestimonials[id].body;
          });
      }
  };

  let view = {

      /*
         Here we have to create the 12 testimonials there will be 4 rows of 3
         people on desktop. On mobile it will just colapse into one ontop another.
      */

      init: function() {
          let testimonials = connector.getTestimonials();

          /*
            This may be hard to follow, but what I basically wanted here was to
            not have the html be so long to hold all these testimonials. Instead
            we create them and drop them into the #targetContainer.

            The stucture is similar to the bootstrap portfolios and modals found
            on the main home page. I did not use the same strategy there as it is
            only 3 modals, as opposed to 12.

            The only needs to change it's information, which is handled in another
            funtion of the view object.
          */



          testimonials.forEach(function(test, dataID) {
              let parentDiv = document.createElement('div');
              parentDiv.classList.add('col-lg-3');
              parentDiv.classList.add('portfolio-item');

              let linkToModal = document.createElement('A');
              linkToModal.classList.add('portfolio-link');
              linkToModal.classList.add('switchToPic');
              linkToModal.dataset.toggle = 'modal';
              linkToModal.href = '#modal';
              connector.linkClicks(linkToModal, dataID);
              parentDiv.appendChild(linkToModal);

              let hoverDiv1 = document.createElement('div');
              hoverDiv1.classList.add('portfolio-hover');
              linkToModal.appendChild(hoverDiv1);

              let hoverDiv2 = document.createElement('div');
              hoverDiv2.classList.add('portfolio-hover-content');
              hoverDiv1.appendChild(hoverDiv2);

              let hoverImg = document.createElement('IMG');
              hoverImg.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
              hoverImg.dataset.src = "img/Copy of Copy of 2014-12-28 Logo Shapes White Thick 10 pt.png";
              hoverImg.alt = "Foundations Cube";
              hoverImg.classList.add('modal-logo');
              hoverImg.classList.add('lazy');
              hoverDiv2.appendChild(hoverImg);

              let testPhoto = document.createElement('IMG');
              testPhoto.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
              testPhoto.dataset.src = test.img;
              testPhoto.alt = test.name;
              testPhoto.classList.add('testimonialPhoto');
              testPhoto.classList.add('lazy');
              linkToModal.appendChild(testPhoto);

              let captionDiv = document.createElement('div');
              captionDiv.classList.add('portfolio-caption');
              captionDiv.classList.add('text-center');
              parentDiv.appendChild(captionDiv);

              let testName = document.createElement('h4');
              testName.innerHTML = test.name;
              captionDiv.appendChild(testName);

              let uclaPara = document.createElement('p');
              uclaPara.innerHTML = test.uclaInfo;
              uclaPara.classList.add('text-muted');
              captionDiv.appendChild(uclaPara);

              let fcPara = document.createElement('p');
              fcPara.innerHTML = test.fcInfo;
              fcPara.classList.add('text-muted');
              captionDiv.appendChild(fcPara);

              let portfolio = document.querySelector('#targetContainer');
              portfolio.appendChild(parentDiv);
          });
      }

  };

  let connector = {

      init: function() {
          model.init();
          view.init();
      },

      getTestimonials: function () {
          return data.displayedTestimonials;
      },

      linkClicks: function(link, id) {
          model.assignClick(link, id);
      }
  };

  connector.init();
})();
