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

      yearID: "",

      showCaseID: 0,

      years: {
        yearOne: [
          {
            showcase: "Winter 2015",
            photo: "img/Banners/firstShowcase.jpg",
            teams: [
              {
                name: "Alpha Class",
                directors: "Dione Dacuycuy x Julianna Bianes",
                captains: "",
                photo: "img/teams/_14-_15/15W-AlphaClass.jpg",
                video: "https://www.youtube-nocookie.com/embed/FoP_fVAzKl8?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "OOE",
                directors: "Zheng Sun x Michael Bonifacio",
                captains: "",
                photo: "img/teams/_14-_15/15W-OOE.jpg",
                video: "https://www.youtube-nocookie.com/embed/zK6fgx9Lz-M?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "TakeOff",
                directors: "Samantha Amos x Kevin Yeh",
                captains: "",
                photo: "img/teams/_14-_15/15W-Takeoff.jpg",
                video: "https://www.youtube-nocookie.com/embed/oxSHs-DCl8c?rel=0&amp;showinfo=0",
                noModal: false
              },
            ],
          },
          {
            showcase: "Spring 2015",
            photo: "img/Banners/secondShowcase.png",
            video: "",
            teams: [
              {
                name: "Betta Werk",
                directors: "Dione Dacuycuy x Julianna Bianes",
                captains: "",
                photo: "img/teams/_14-_15/15SP-BettaWerk.jpg",
                video: "https://www.youtube-nocookie.com/embed/l0_pOdBwjRI?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Fireworks",
                directors: "Zheng Sun x Justin Lee x Hesed Cabornida",
                captains: "",
                photo: "img/teams/_14-_15/15SP-Fireworks.jpg",
                video: "https://www.youtube-nocookie.com/embed/Qa7Xy-sho-0?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Landing",
                directors: "Samantha Amos x Kevin Yeh",
                captains: "",
                photo: "img/teams/_14-_15/15SP-Landing.jpg",
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
            teams: [
              {
                name: "Squirtle Squad",
                directors: "Benjamin Mark Nabong x Alexandria Arenas x Marlo Manuel Carreon",
                captains: "",
                photo: "img/teams/placeholder.jpg",
                video: "https://www.youtube-nocookie.com/embed/-5Jy4LbDwn8?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Baggage Claim",
                directors: "Kevin Yeh x Samantha Amos",
                captains: "",
                photo: "img/teams/_15-_16/15SUM-BaggageClaim.jpg",
                video: "https://www.youtube-nocookie.com/embed/zUVZ6Upi42Q?rel=0&amp;showinfo=0",
                noModal: false
              }
            ]
          },
          {
            showcase: "Fall 2015",
            photo: "img/Banners/thirdShowcase.jpg",
            teams: [
              {
                name: "Core",
                directors: "Jason Chang x Adeney Zo",
                captains: "Sarah Park",
                photo: "img/teams/_15-_16/15F-CORE.jpg",
                video: "https://www.youtube-nocookie.com/embed/1lGw24rQuEk?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Full Metal Movement",
                directors: "Bashir Hydari x Patrick Tran",
                captains: "Jonnby LaGuardia",
                photo: "img/teams/_15-_16/15F-FullMetalMovement.jpg",
                video: "https://www.youtube-nocookie.com/embed/T5RBaPK_rQE?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Square One",
                directors: "Angela David x Jucel Andrin",
                captains: "",
                photo: "img/teams/_15-_16/15F-SquareOne.jpg",
                video: "ttps://www.youtube-nocookie.com/embed/LYrX6IDqlvE?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Squirtle Squad Gen 2",
                directors: "",
                captains: "",
                photo: "img/teams/_15-_16/15F-SquirtleSquadGen2.jpg",
                video: "",
                noModal: true
              },
              {
                name: "Ultraviolet",
                directors: "Zenon Davis x Kevin Lee",
                captains: "Karen Lee",
                photo: "img/teams/_15-_16/15F-Ultraviolet.jpg",
                video: "https://www.youtube-nocookie.com/embed/yfELyBOjP5M?rel=0&amp;showinfo=0",
                noModal: false
              },
            ]
          },
          {
            showcase: "Winter 2016",
            photo: "img/Banners/fourthShowcase.jpg",
            teams: [
              {
                name: "U-KNIGHTED",
                directors: "Dexter Amande x Patrick Tran x Gene Viloria",
                captains: "Amanat Bal x Steve Chung",
                photo: "img/teams/_15-_16/16W-U-Knighted.jpg",
                video: "https://www.youtube-nocookie.com/embed/BnH-A2ZOTFg?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Infrared",
                directors: "Zenon Davis x Kevs Lee",
                captains: "Belinda Chiu x Andrew Suykry",
                photo: "img/teams/_15-_16/16W-Infrared.jpg",
                video: "https://www.youtube-nocookie.com/embed/XS65c-6q79U?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Squirtle Squad Gen 3",
                directors: "Benjamin Mark Nabong x Dennis Tran",
                captains: "Yena Choi x Emily Ren",
                photo: "img/teams/_15-_16/16W-SquirtleSquadGen3.jpg",
                video: "https://www.youtube-nocookie.com/embed/CtgjSDn2KwQ?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Root Two",
                directors: "",
                captains: "",
                photo: "img/teams/_15-_16/16W-RootTwo.jpg",
                video: "",
                noModal: true
              },
              {
                name: "Groove Factory",
                directors: "",
                captains: "",
                photo: "img/teams/_15-_16/16W-GrooveFactory.jpg",
                video: "",
                noModal: true
              },
            ]
          },
          {
            showcase: "Spring 2016",
            photo: "img/Banners/fifthShowcase.jpg",
            teams: [
              {
                name: ".PDF",
                directors: "Ping Quach x Benedict Dungca",
                captains: "Emily Carter x Allan Qin",
                photo: "img/teams/_15-_16/16SP-pdfteam.jpg",
                video: "https://www.youtube-nocookie.com/embed/N35fF3peZiU?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "EON",
                directors: "Ariana Barker x Ben Yi",
                captains: "Bobni Das x Shona Das",
                photo: "img/teams/_15-_16/16SP-Eon.jpg",
                video: "https://www.youtube-nocookie.com/embed/r8Z41d5VeyM?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Kaleido",
                directors: "Yena Choi x Sarah Park",
                captains: "Antoine Rajkovic x Michelle Lin",
                photo: "img/teams/_15-_16/16SP-Kaleido.jpg",
                video: "https://www.youtube-nocookie.com/embed/CtgjSDn2KwQ?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Heat Wave",
                directors: "Ricardo Davis x Chantel Akrawi",
                captains: "Lorraine Rowe x Emily Ren",
                photo: "img/teams/_15-_16/16SP-HeatWave.jpg",
                video: "https://www.youtube-nocookie.com/embed/o5XowFSMyg0?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Squirtle Squad Gen 4",
                directors: "",
                captains: "",
                photo: "img/teams/_15-_16/16SP-SquirtleSquadGen4.jpg",
                video: "",
                noModal: true
              },
              {
                name: "Quixotics",
                directors: "",
                captains: "",
                photo: "img/teams/_15-_16/16SP-Quixotics.jpg",
                video: "",
                noModal: true
              },
            ]
          },
        ],

        yearThree: [
          {
            showcase: "summer 2016",
            photo: "img/Banners/secondSummer.png",
            teams: [
              {
                name: "Encore",
                directors: "Jason Chang x Adeney Zo",
                captains: "Jennifer Dihenia x Dalarm Han",
                photo: "img/teams/_16-_17/16SM-Encore.jpg",
                video: "https://www.youtube-nocookie.com/embed/ZOPPAh13VCE?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Nocturnal",
                directors: "Michala Li x Gene Viloria",
                captains: "Lisa Chao x Chris Lee",
                photo: "img/teams/_16-_17/16SUM-Nocturnal.jpg",
                video: "https://www.youtube-nocookie.com/embed/2IUbfuU_KzY?rel=0&amp;showinfo=0",
                noModal: false
              }
            ]
          },
          {
            showcase: "Fall 2016",
            photo: "img/Banners/sixthShowcase.jpg",
            teams: [
              {
                name: "Empire",
                directors: "",
                captains: "",
                photo: "img/teams/_16-_17/16F-Empire.jpg",
                video: "",
                noModal: true
              },
              {
                name: "Ikigai",
                directors: "Imesh Samarakoon x Sarah Park x Yena Choi",
                captains: "Dean Sumitro x Jessica Nguyen",
                photo: "img/teams/_16-_17/16F-Ikigai.jpg",
                video: "https://www.youtube-nocookie.com/embed/VEEUS80XbiU?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "RA",
                directors: "Alex Tang x Taleeah Mesa",
                captains: "Antoine Rajkovic x Sophia Wong",
                photo: "img/teams/_16-_17/16F-RA.jpg",
                video: "https://www.youtube-nocookie.com/embed/5H4X48WDImk?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Ripple",
                directors: "Rico Davis x Shawn Lo",
                captains: "Evelyn Ly x Sherry Wang",
                photo: "img/teams/_16-_17/16F-Ripple.jpg",
                video: "https://www.youtube-nocookie.com/embed/vIrbGPERCHc?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Soulstice",
                directors: "Ariana Barker x Dexter Amande",
                captains: "Alex Byun x Ellen Hsieh",
                photo: "img/teams/_16-_17/16F-Soulstice.jpg",
                video: "https://www.youtube-nocookie.com/embed/rQWKViqnj4g?rel=0&amp;showinfo=0",
                noModal: false
              }
            ]
          },
          {
            showcase: "Spring 2017",
            photo: "img/Banners/seventhShowcase.jpg",
            teams: [
              {
                name: "F.A.M.",
                directors: "Gary Bui x Tess Chen",
                captains: "Derek Zhang x Susana Min",
                photo: "img/teams/_16-_17/17SP-FAM.jpg",
                video: "https://www.youtube-nocookie.com/embed/LEitjjcUQNc?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Incognito",
                directors: "Matthew Diep x Lawrence Wang",
                captains: "Evelynn Ly x Tanvi Rane",
                photo: "img/teams/_16-_17/17SP-Incognito.jpg",
                video: "https://www.youtube-nocookie.com/embed/zlcqVJKyBG4?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Lost and Found",
                directors: "Gene Viloria x Ricardo Davis",
                captains: "Sylvia Huynh x Tianai Ren",
                photo: "img/teams/_16-_17/17SP-LostandFound.jpg",
                video: "https://www.youtube-nocookie.com/embed/etKtSxb47UU?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Rezn8",
                directors: "Max Woo x Merton Ung",
                captains: "Alex Do x Miya Sheker",
                photo: "img/teams/_16-_17/17SP-REZN8.jpg",
                video: "https://www.youtube-nocookie.com/embed/AVasUouS-Fc?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Spectra",
                directors: "Kevz Lee x Zenon Davis",
                captains: "Ellen Hsieh x Bert Yeh",
                photo: "img/teams/_16-_17/17SP-Spectra.jpg",
                video: "https://www.youtube-nocookie.com/embed/KQ5MiB8QiFU?rel=0&amp;showinfo=0",
                noModal: false
              }
            ]
          },
        ],

        yearFour: [
          {
            showcase: "summer 2017",
            photo: "img/Banners/thirdSummer.jpg",
            teams: [
              {
                name: "AXIS",
                directors: "Alexxa Vasquez x Yessie Willis",
                captains: "Eric Lin x Terri Shih",
                photo: "img/teams/_17-_18/17SUM-Axis.jpg",
                video: "https://www.youtube-nocookie.com/embed/3VStBamgG-s?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "DUAL CORE",
                directors: "Dexter Amande x John Fernandez",
                captains: "Calvin Ha x Derek Zhang",
                photo: "img/teams/_17-_18/17SUM-DualCore.jpg",
                video: "https://www.youtube-nocookie.com/embed/cjJ8Pf3_ldQ?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Consensus",
                directors: "Nalu Bauman x Timothy Hooker",
                captains: "Bertrand Shao x Lisa Chao",
                photo: "img/teams/_17-_18/17SUM-Consensus.jpg",
                video: "https://www.youtube-nocookie.com/embed/AlrrfAlKOCY?rel=0&amp;showinfo=0",
                noModal: false
              }
            ]
          },
          {
            showcase: "Fall 2017",
            photo: "img/Banners/eighthShowcase.jpg",
            teams: [
              {
                name: "Rev",
                directors: "Patrick Tran x Priscilla McElhinney",
                captains: "Helen-Sage Lee x Kyle Diep",
                photo: "img/teams/_17-_18/17F-Rev.jpg",
                video: "https://www.youtube-nocookie.com/embed/9sv6VjLHpak?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Cerberus",
                directors: "Alex Tang x Brandon Lee x Dean Sumitro",
                captains: "Hansen Qiu x Tanvi Rane",
                photo: "img/teams/_17-_18/17F-Cerberus.jpg",
                video: "https://www.youtube-nocookie.com/embed/iUFYlHj8sBY?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Vision",
                directors: "Kevs Lee x Shona Das",
                captains: "Isaac Yoon x Sylvia Hyunh",
                photo: "img/teams/_17-_18/17F-Vision.jpg",
                video: "https://www.youtube-nocookie.com/embed/PtHFkwzQCPo?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Sporks",
                directors: "Lawrence Wang x Thomas Choi",
                captains: "Ashley Pizarro x Ludi Zhu",
                photo: "img/teams/_17-_18/17F-Sporks.jpg",
                video: "https://www.youtube-nocookie.com/embed/F1SqOkQJzp4?rel=0&amp;showinfo=0",
                noModal: false
              }
            ]
          },
          {
            showcase: "Winter 2018",
            photo: "img/Banners/ninthShowcase.jpg",
            teams: [
              {
                name: "AIM",
                directors: "Alexxa Vasquez x Jonathan Yokomizo x Maree Iligan",
                captains: "Jeremy Quan x Sylvia Huynh",
                photo: "img/teams/_17-_18/18W-AIM.jpg",
                video: "https://www.youtube-nocookie.com/embed/epCEJBUKmxQ?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Nimbus",
                directors: "Benjamin Nabong x Michelle Lin",
                captains: "Sarah Tian x Zachary Huang",
                photo: "img/teams/_17-_18/18W-Nimbus.jpg",
                video: "https://www.youtube-nocookie.com/embed/SxXZGatH09g?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "FYR",
                directors: "Aryanna Ramirez x Colin Hwang",
                captains: "Kari Kawashima x Nate Sookwongse",
                photo: "img/teams/_17-_18/fyr.jpg",
                video: "https://www.youtube-nocookie.com/embed/a8pouPCg8QU?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Swiped",
                directors: "Lawrence Wang x Samuel Cho",
                captains: "Ashley Pizarro x Kathy Chen",
                photo: "img/teams/_17-_18/swiped.jpg",
                video: "https://www.youtube-nocookie.com/embed/EjnEkPHnd-0?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "SOL",
                directors: "",
                captains: "",
                photo: "img/teams/_17-_18/sol.jpg",
                video: "",
                noModal: true
              }
            ]
          },
          {
            showcase: "Spring 2018",
            photo: "img/Banners/tenthShowcase.jpg",
            teams: [
              {
                name: "Kaizen",
                directors: "Matthew Diep x Kristie Liu",
                captains: "Ashley Pizarro x Josh Lai",
                photo: "img/teams/_17-_18/18S-Kaizen.jpg",
                video: "https://www.youtube-nocookie.com/embed/-aI3aC9ajb4?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "PWR",
                directors: "Patrick Tran x Priscilla McElhinney",
                captains: "Carley Jacobo x Cole Ibbotson",
                photo: "img/teams/_17-_18/18S-PWR.jpg",
                video: "https://www.youtube-nocookie.com/embed/Hc4laiDkq-s?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "Nimbus II",
                directors: "Benjamin Nabong x Michelle Lin",
                captains: "Angela Nguyen x Hansen Qiu",
                photo: "img/teams/_17-_18/18S-NimbusII.jpg",
                video: "https://www.youtube-nocookie.com/embed/I_I77i6VtXk?rel=0&amp;showinfo=0",
                noModal: false
              },
              {
                name: "ETA",
                directors: "",
                captains: "",
                photo: "img/teams/_17-_18/18S-Eta.jpg",
                video: "",
                noModal: true
              }
            ]
          },
        ],
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

          document.querySelectorAll('.listlink').forEach(function(link) {
            link.addEventListener('click', function(e){
              data.yearID = e.target.dataset.year;
              data.showCaseID = parseInt(e.target.dataset.showcase, 10);
              connector.ready();
            });
          });

          document.querySelector('#sideBarToggle').addEventListener('click', function(e){
            e.target.classList.remove('notification');
            document.querySelector('#teamNav').style.left = '0px';
            e.target.style.left = '100%';
          });

          document.querySelector('#sideBarClose').addEventListener('click', function(e){
            connector.reset();
          });

      },

      // This method is for insuring that the correct modal info is displayed
      // for each img.
      assignClick: function (link, teamID) {
          link.addEventListener('click', function(){
            let showCase = data.years[data.yearID][data.showCaseID];
              document.querySelector('#modalName').innerHTML = showCase.teams[teamID].name;
              if(showCase.teams[teamID].captains === "") {
                document.querySelector('#captainDiv').style.display = 'none';
                document.querySelector('#directorDiv').classList = "";
                document.querySelector('#directorDiv').classList.add('col-lg-12');
              } else {
                document.querySelector('#captainDiv').style.display = '';
                document.querySelector('#directorDiv').classList = "";
                document.querySelector('#directorDiv').classList.add('col-lg-6');
              }
              document.querySelector('#modalCaptains').innerHTML = showCase.teams[teamID].captains;
              document.querySelector('#modalDirectors').innerHTML = showCase.teams[teamID].directors;
              document.querySelector('#modal-video').src = showCase.teams[teamID].video;
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

      // Here I wanted the first showcase shown to be the most recent.
      init: function() {
        data.yearID = 'yearFour';
        data.showCaseID = '3'
        view.render();
      },


      //This function should be called every time you want a new showcase displayed.
      render: function() {

        view.resetSideBar();

        let showCase = data.years[data.yearID][data.showCaseID];

        document.querySelector('#showCaseTitle').innerHTML = showCase.showcase;
        document.querySelector('#bannerImg').src = showCase.photo;

        //if there is an array of teams, remove them from DOM.

        let portfolioItems = document.querySelectorAll('.portfolio-item');
        if(portfolioItems.length != 0) {
          portfolioItems.forEach(function(item){
            item.remove();
          });
        }

        // Takes the array of teams for each showcase and creates portfolio items
        // that work with Bootstrap.

        let teams = showCase.teams;

        teams.forEach(function(team, teamID) {
            let parentDiv = document.createElement('div');
            parentDiv.classList.add('col-lg-3');
            parentDiv.classList.add('portfolio-item');

            let linkToModal = document.createElement('A');
            linkToModal.classList.add('portfolio-link');
            linkToModal.classList.add('switchToPic');
            linkToModal.dataset.toggle = 'modal';
            if(team.noModal) {
              linkToModal.href = '#';
            } else {
              linkToModal.href = '#modal';
            }
            connector.linkClicks(linkToModal, teamID);
            parentDiv.appendChild(linkToModal);

            let hoverDiv1 = document.createElement('div');
            hoverDiv1.classList.add('portfolio-hover');
            linkToModal.appendChild(hoverDiv1);

            let hoverDiv2 = document.createElement('div');
            hoverDiv2.classList.add('portfolio-hover-content');
            hoverDiv1.appendChild(hoverDiv2);

            let hoverImg = document.createElement('IMG');
            hoverImg.src = "img/Copy of Copy of 2014-12-28 Logo Shapes White Thick 10 pt.png";
            hoverImg.alt = "Foundations Cube";
            hoverImg.classList.add('modal-logo');
            hoverImg.classList.add('lazy');
            hoverDiv2.appendChild(hoverImg);

            let teamPhoto = document.createElement('IMG');
            teamPhoto.src = team.photo;
            teamPhoto.alt = team.name;
            teamPhoto.classList.add('teamPhoto');
            teamPhoto.classList.add('lazy');
            linkToModal.appendChild(teamPhoto);

            let captionDiv = document.createElement('div');
            captionDiv.classList.add('portfolio-caption');
            captionDiv.classList.add('text-center');
            parentDiv.appendChild(captionDiv);

            let teamName = document.createElement('h4');
            teamName.innerHTML = team.name;
            captionDiv.appendChild(teamName);

            let portfolio = document.querySelector('#targetContainer');
            portfolio.appendChild(parentDiv);
        });

      },

      resetSideBar: function() {
        document.querySelector('#sideBarToggle').classList.add('notification');
        document.querySelector('#sideBarToggle').style.left = '';
        document.querySelector('#teamNav').style.left = '';
        document.querySelector('#teamNav').style.position = '';
        setTimeout(function() {
          document.querySelector('#sideBarToggle').classList.remove('notification');
        }, 4000);
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

      linkClicks: function(link, id) {
          model.assignClick(link, id);
      },

      reset: function() {
        view.resetSideBar();
      }

  };

  connector.init();
})();
