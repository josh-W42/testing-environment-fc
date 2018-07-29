(function () {

  let data = {


      // All that follows is a dataset for lship

      branchID: "",

      branches: {

          executives: {

              // executives are special, they get two images and no admins.
              body: "Since our formation on October 31, 2014, Foundations Choreography has aimed to create an environment for beginning and intermediate dancers to grow, train, and challenge themselves. Based in Westwood, California, we live by the idea that in both dance and life, there is always room to grow and to give back. Our passionate and driven team of leadership work tirelessly to make dance more accessible to everyone-- from the longtime dance fanatics hoping to begin their own dance journeys to the brave simply looking to push themselves to try something new. Through ten-week long training teams and weekly workshops, Foundations Choreography has become a home to an extensive network of incredibly hardworking dancers, some of whom have continued their own growth through joining some of the competitive teams, project teams, and cultural performance groups that UCLA has to offer.",
              director: {
                title: "Executives",
                name: "Miya Sheker and Liana Liang",
                miya: {
                  photo: "img/lship/ShekerMiya.jpg",
                  name: "Miya Sheker",
                  detail: ""
                },
                liana: {
                  photo: "img/lship/LiangLiana.jpg",
                  name: "Liana Liang",
                  detail: ""
                }
              }
          },

          events: {

              body: "The Events Committee is responsible for planning large-scale social events for all general members each quarter. Given how close every team gets each quarter individually, it is important for them to also get to know dancers from other teams in order to maximize their “Foundations experience”. The two Events Chairs are in charge of planning a Clubbing event, an All-Team Amazing Race (in which members represent their teams in competitive outdoor games), and Choreo Showcase (in which members perform their own original choreography). A new addition to the Events Committee is the LSHIP Relations Chair, whose main goal is to facilitate LSHIP bonding and appreciation. They are in charge of planning bonding events within LSHIP, as well as show appreciation of the hard work that every LSHIP member puts in for the organization through gifts, posters, shoutouts etc.",
              director: {
                  photo: "img/lship/WongEllis.jpg",
                  name: "Ellis Wong",
                  title: "Director of Events",
                  detail: "I can raise my eyebrows individually  ( ͡° ͜ʖ ͡°)"
              },
              admins: [
                  {
                      photo: "img/lship/HuynhSylvia.jpg",
                      name: "Sylvia Huynh",
                      title: "LSHIP Relations Chair",
                      detail: "Foundations really is Foundbaetions, I picked up a bae AND a wife! I also like corgi butts. :D"
                  },
                  {
                      photo: "img/lship/ZhuLudi.jpg",
                      name: "Ludi Zhu",
                      title: "Events Chair",
                      detail: '"Me think, why waste time say lot word, when few word do trick." - Kevin Malone'
                  },
                  {
                      photo: "img/temporary/TranMichelle.jpg",
                      name: "Michelle Tran",
                      title: "Events Chair",
                      detail: "I sustain myself on copious amounts of boba and caffeine and probably need 903827182 years of sleep but I'm fat chillin'"
                  },
                  {
                      photo: "img/temporary/SasakiSara.jpg",
                      name: "Sara Sasaki",
                      title: "WorkShop Chair",
                      detail: ""
                  },
              ]

          },

          media: {

              body: "The media committee takes care of everything that you see online -- Facebook, YouTube, Snapchat, Instagram... you name it! These are the faces behind every punny Facebook caption and stunning design work. We showcase the best of Foundations through every video, team photo and website click. When we aren't busy keeping our social media sites poppin', we like to relax with strawberry smoothies and talk about dogs.",
              director: {
                  photo: "img/lship/TanVivian.jpg",
                  name: "Vivian Tan",
                  title: "Director of Media",
                  detail: ""
              },
              admins: [
                  {
                      photo: "img/lship/LiAnya.jpg",
                      name: "Anya Li",
                      title: "Design Chair",
                      detail: "A UX/UI designer and a member of A** Designs"
                  },
                  {
                      photo: "img/temporary/RenSisi.jpg",
                      name: "Sisi Ren",
                      title: "Design Chair",
                      detail: "I grew up in Vancouver, Canada and I'm easily distracted by shiny things."
                  },
                  {
                      photo: "img/temporary/NguyenAndrew.jpg",
                      name: "Andrew Nguyen",
                      title: "Photographer",
                      detail: "Sometimes I sleep with my eyes open xD"
                  },
                  {
                      photo: "img/temporary/LaiJosh.jpg",
                      name: "Josh Lai",
                      title: "Videographer",
                      detail: ""
                  },
                  {
                      photo: "img/temporary/YaoAudrey.jpg",
                      name: "Audrey Yao",
                      title: "Social Media Marketing Chair",
                      detail: ""
                  },
                  {
                      photo: "img/temporary/JacoboCarley.jpg",
                      name: "Carley Jacobo",
                      title: "Social Media Marketing Chair",
                      detail: ""
                  },
                  {
                      photo: "img/temporary/WilsonJosh.jpg",
                      name: "Josh Wilson",
                      title: "Webmaster",
                      detail: "A local from South Pasadena, also a superhero? What? #2020"
                  }
              ]
          },

          finance: {

              body: "Finance is responsible for managing anything involving money for Foundations, which includes handling merchandise sales, Venmo transactions, and getting funding for Foundations activities. We apply for grants from the UCLA student government, reach out to sponsors, and organize fundraisers so that Foundations can provide showcases that are free to the audience as well as hold various events for members each quarter. In addition, we help make sure that the organization stays financially stable by maintaining the budget and properly accounting for expenses. We work closely with the other committees to effectively allocate funding in a way that benefits members the most.",
              director: {
                  photo: "img/lship/TianAnna.jpg",
                  name: "Anna Tian",
                  title: "Director of Finance",
                  detail: ""
              },
              admins: [
                  {
                    photo: "img/temporary/LiDerek.jpg",
                    name: "Derek Li",
                    title: "Finance Chair",
                    detail: "I was born in Charlottesville, Virginia, and I'm jacked...jacked to the tits. Also, I wish my wallet was a thick as my thighs."
                  },
                  {
                    photo: "img/temporary/HuangZachary.jpg",
                    name: "Zachary Huang",
                    title: "Finance Chair",
                    detail: 'As one person, I cannot change the whole world, but I can change the whole world of one person" -Paul Shane Spear. Also, I actually do have 10 toes.'
                  },
              ]

          },

          showcase: {

              body: "Every quarter, Foundations Choreography’s training teams spend 8 weeks putting together full sets that culminate in a Showcase at the end of the quarter. The Showcase Committee, which consists of a Showcase Producer and 3 Showcase Chairs, works to plan and execute three Showcases per year from start to finish. Our responsibilities include devising the theme and names of all Showcases of the year, booking a location for an audience of over 1,000 people, inviting dance teams from the UCLA and surrounding dance community as guest acts, finding MCs, coordinating Showcase day logistics, and more. On the day of Showcase, the committee not only works backstage to direct dancers to stage, but also assists in controlling sound and lighting of all performances. Our goal is to create a platform for our dancers to showcase their countless hours of hard work and growth in dance to friends, family, and the UCLA dance community.",
              director: {
                photo: "img/lship/LiangMichelle.jpg",
                name: "Michelle Liang",
                title: "Showcase Producer",
                detail: ""
              },
              admins: [
                  {
                    photo: "img/temporary/SoonJordan.jpg",
                    name: "Jordan Soon",
                    title: "Showcase Chair",
                    detail: ""
                  },
                  {
                    photo: "img/lship/FidelisJosh.jpg",
                    name: "Josh Fidelis",
                    title: "Showcase Chair",
                    detail: "Fidelis is my middle name, but you can call me whatever you like ;)"
                  },
                  {
                    photo: "img/temporary/TianSarah.jpg",
                    name: "Sarah Tian",
                    title: "Showcase Chair",
                    detail: ""
                  },
              ]

          },

          teamRelations: {

              body: "Dance LShip are responsible for creating a supportive and positive team environment, encouraging dancers to continue to challenge and push themselves throughout the quarter. This committee consists of directors and captains, there to prepare their respective teams for the end-of-the-quarter showcase or concept video. For each team, there are two (or possibly three) directors and two captains present to lead the team. Directors are in charge of set building which includes choreographing, teaching, blocking, cleaning, creating the set mix, and generating ideas for team gear. Captains, on the other hand, are responsible for managing team logistics (i.e. organizing photoshoot, managing team Facebook page, keeping team roster updated) and facilitating intrateam and interteam bonding (i.e. team dinners, ice cream socials, study sessions, etc.), while also learning choreography alongside their teammates. Both positions are integral to team functionality so Dance LShip works together as a team themselves to ensure a rewarding experience for team members. ",
              director: {
                  photo: "img/lship/PizarroAshley.jpg",
                  name: "Ashley Pizarro",
                  title: "Director of Team Relations",
                  detail: ""
              },

              // Team Relations is special, Dance Lship will be added throughout
              // the year.
              admins: [
                  {
                      photo: "",
                      name: "",
                      title: "",
                      detail: ""
                  },
              ]

          }

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

          document.querySelectorAll('.branchLink').forEach(function(link){
            link.addEventListener('click', function() {
              data.branchID = link.innerHTML.toLowerCase();
              if (data.branchID === 'team relations'){
                data.branchID = 'teamRelations';
              }
              connector.scroll();
            });
          });

          // document.querySelector('#sideBarToggle').addEventListener('click', function(e){
          //   e.target.classList.remove('notification');
          //   document.querySelector('#teamNav').style.left = '0px';
          //   e.target.style.left = '100%';
          // });
          //
          // document.querySelector('#sideBarClose').addEventListener('click', function(e){
          //   connector.reset();
          // });
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
        view.render();
        data.branchID = 'events';
        view.render();
        data.branchID = 'media';
        view.render();
        data.branchID = 'finance';
        view.render();
        data.branchID = 'showcase';
        view.render();
        data.branchID = 'teamRelations';
        view.render();

      },

      //This long function will create all the sections for the page based on
      // the dataset defined in the data object. There is no need to call this function
      // unless you're adding another section.

      render: function() {

        //must be in lower case
        let branch = data.branchID;

        let sectionTag = document.createElement('SECTION');
        sectionTag.classList.add('lshipDescription');
        sectionTag.id = branch;
        document.querySelector('main').appendChild(sectionTag);

        let directorName = document.createElement('h4');
        directorName.classList.add('directorName');
        directorName.innerHTML = data.branches[branch].director.name;
        sectionTag.appendChild(directorName);

        let directorTitle = document.createElement('h5');
        directorTitle.classList.add('directorTitle');
        directorTitle.innerHTML = data.branches[branch].director.title;
        sectionTag.appendChild(directorTitle);

        let descriptionHead = document.createElement('div');
        descriptionHead.classList.add('col-md-12');
        descriptionHead.classList.add('descriptionHead');
        sectionTag.appendChild(descriptionHead);

        let imgArrayTitle = document.createElement('h2');
        imgArrayTitle.style.display = 'block';
        imgArrayTitle.classList.add('imgArrayTitle');
        sectionTag.appendChild(imgArrayTitle);

        let directorPhoto = document.createElement('IMG');
        directorPhoto.classList.add('directorPhoto');
        descriptionHead.appendChild(directorPhoto);

        let secondPhoto = document.createElement('IMG');
        secondPhoto.classList.add('execSecondPhoto');
        descriptionHead.appendChild(secondPhoto);

        let branchBody = document.createElement('p');
        branchBody.classList.add('branchBody');
        branchBody.innerHTML = data.branches[branch].body;
        descriptionHead.appendChild(branchBody);

        if (branch != 'executives') {
          imgArrayTitle.innerHTML = 'Admins';
          secondPhoto.style.display = 'none';
          secondPhoto.classList.remove('execPicStyle');
          directorPhoto.classList.remove('execPicStyle');
          directorPhoto.src = data.branches[branch].director.photo;
          directorPhoto.alt = data.branches[branch].director.title;
        } else {
          branchBody.classList.add('bodyExec');
          imgArrayTitle.style.display = 'none';
          secondPhoto.style.display = 'inline-flex';
          directorPhoto.src = data.branches[branch].director.miya.photo;
          directorPhoto.alt = data.branches[branch].director.miya.name;
          if(!(directorPhoto.classList.contains('execPicStyle'))){
            directorPhoto.classList.add('execPicStyle');
          }
          secondPhoto.src = data.branches[branch].director.liana.photo;
          secondPhoto.alt = data.branches[branch].director.liana.name;
          if(!(secondPhoto.classList.contains('execPicStyle'))) {
            secondPhoto.classList.add('execPicStyle');
          }
        } if (branch === 'teamRelations'){
            imgArrayTitle.innerHTML = 'Dance Leadership';
        }


        let portfolio = document.createElement('div');
        portfolio.id = 'portfolio';
        portfolio.classList.add('row');
        sectionTag.appendChild(portfolio);

        let adminDiv;
        adminDiv = document.createElement('div');
        adminDiv.classList.add('adminImgArray');
        adminDiv.classList.add('col-lg-12');
        portfolio.appendChild(adminDiv);

        if (branch != 'executives') {
          data.branches[branch].admins.forEach(function(admin) {

            let parentDiv = document.createElement('div');
            parentDiv.classList.add('portfolio-item');
            adminDiv.appendChild(parentDiv);

            // There is no modal here, I'm just using vbootstrap's way
            // of modal display to create an overlay effect.
            let linkToModal = document.createElement('A');
            linkToModal.classList.add('portfolio-link');
            parentDiv.appendChild(linkToModal);

            let hoverDiv1 = document.createElement('div');
            hoverDiv1.classList.add('portfolio-hover');
            linkToModal.appendChild(hoverDiv1);

            let hoverDiv2 = document.createElement('div');
            hoverDiv2.classList.add('portfolio-hover-content');
            hoverDiv1.appendChild(hoverDiv2);

            let adminBox = document.createElement('div');
            adminBox.classList.add('adminBox');
            adminBox.classList.add('modal-logo');
            hoverDiv2.appendChild(adminBox);

            let boxTitle = document.createElement('h6');
            boxTitle.innerHTML = admin.name;
            let boxSubtitle = document.createElement('h6');
            boxSubtitle.innerHTML = admin.title;
            let smallDetail = document.createElement('span');
            smallDetail.classList.add('adminDetail');
            smallDetail.innerHTML = admin.detail;

            adminBox.appendChild(boxTitle);
            adminBox.appendChild(boxSubtitle);
            adminBox.appendChild(smallDetail);

            let adPic = document.createElement('IMG');

            adPic.classList.add('adminPics');
            // adPic.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
            // adPic.dataset.src = admin.img;
            adPic.src = admin.photo;
            adPic.alt = admin.name;
            linkToModal.appendChild(adPic);

          });
        }
      },

      goToSection: function() {
        // view.resetSideBar();

        let scrollTarget;
        document.querySelectorAll('.lshipDescription').forEach(function(section) {
           if(section.id === data.branchID) {
             let bodyRect = document.body.getBoundingClientRect();
             let sectionRect = section.getBoundingClientRect();
             let offset = sectionRect.top - bodyRect.top;
             scrollTarget = offset;
             $('html, body').animate({ scrollTop: scrollTarget }, 1500);
           }
        });
      },

      // resetSideBar: function() {
      //   document.querySelector('#sideBarToggle').classList.add('notification');
      //   document.querySelector('#sideBarToggle').style.left = '';
      //   document.querySelector('#teamNav').style.left = '';
      //   document.querySelector('#teamNav').style.position = '';
      //   setTimeout(function() {
      //     document.querySelector('#sideBarToggle').classList.remove('notification');
      //   }, 4000);
      // },
  };

  let connector = {

      init: function() {
        model.init();
        view.init();
      },

      scroll: function() {
        view.goToSection();
      },

      reset: function() {
        view.resetSideBar();
      }

  };

  connector.init();
})();
