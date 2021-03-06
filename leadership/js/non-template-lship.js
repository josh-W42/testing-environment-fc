(function () {

  let data = {


      // All that follows is a dataset for lship

      branchID: "",

      allPhotos: [],

      branches: {

          executives: {

              // executives are special, they get two images and no admins.
              body: "Since our formation on October 31, 2014, Foundations Choreography has aimed to create an environment for beginning and intermediate dancers to grow, train, and challenge themselves. Based in Westwood, California, we live by the idea that in both dance and life, there is always room to grow and to give back. Our passionate and driven team of leadership work tirelessly to make dance more accessible to everyone-- from the longtime dance fanatics hoping to begin their own dance journeys to the brave simply looking to push themselves to try something new. Through ten-week long training teams and weekly workshops, Foundations Choreography has become a home to an extensive network of incredibly hardworking dancers, some of whom have continued their own growth through joining some of the competitive teams, project teams, and cultural performance groups that UCLA has to offer.",
              director: {
                title: "Executives",
                name: "Miya Sheker and Liana Liang",
                miya: {
                  photo: "../img/lship/lship_headshots/ShekerMiya.jpg",
                  name: "Miya Sheker",
                  title: "Executive",
                  detail: "I've lived in California my entire life! When I'm not dancing, you can find me testing out new recipes or looking up pictures of manatees."
                },
                liana: {
                  photo: "../img/lship/lship_headshots/LiangLiana.jpg",
                  name: "Liana Liang",
                  title: "Executive",
                  detail: "a queen from Queens (jk not really but I'm from the same neighborhood as spiderman so that's cool)"
                }
              }
          },

          events: {

              body: "The Events Committee is responsible for planning large-scale social events for all general members each quarter. Given how close every team gets each quarter individually, it is important for them to also get to know dancers from other teams in order to maximize their “Foundations experience”. The two Events Chairs are in charge of planning a Clubbing event, an All-Team Amazing Race (in which members represent their teams in competitive outdoor games), and Choreo Showcase (in which members perform their own original choreography). A new addition to the Events Committee is the LSHIP Relations Chair, whose main goal is to facilitate LSHIP bonding and appreciation. They are in charge of planning bonding events within LSHIP, as well as show appreciation of the hard work that every LSHIP member puts in for the organization through gifts, posters, shoutouts etc.",
              director: {
                  photo: "../img/lship/lship_headshots/WongEllis.jpg",
                  name: "Ellis Wong",
                  title: "Director of Events",
                  detail: "I can raise my eyebrows individually  ( ͡° ͜ʖ ͡°)"
              },
              admins: [
                  {
                      photo: "../img/lship/lship_headshots/HuynhSylvia.jpg",
                      name: "Sylvia Huynh",
                      title: "LSHIP Relations Chair",
                      detail: "Foundations really is Foundbaetions, I picked up a bae AND a wife! I also like corgi butts. :D"
                  },
                  {
                      photo: "../img/lship/ZhuLudi.jpg",
                      name: "Ludi Zhu",
                      title: "Events Chair",
                      detail: '"Me think, why waste time say lot word, when few word do trick." - Kevin Malone'
                  },
                  {
                      photo: "../img/lship/TranMichelle.jpg",
                      name: "Michelle Tran",
                      title: "Events Chair",
                      detail: "I sustain myself on copious amounts of boba and caffeine and probably need 903827182 years of sleep but I'm fat chillin'"
                  },
                  {
                      photo: "../img/lship/SasakiSara.jpg",
                      name: "Sara Sasaki",
                      title: "WorkShop Chair",
                      detail: "hi my name is Sara, I’m 5ft tall, have a pet corgi, and make EPIC burps. please send music, anime recommendations, and wholesome memes thru Facebook or IG @sarasasaki"
                  },
                  {
                      photo: "../img/temporaryPhotos/PaduaJosh.jpg",
                      name: "Josh Padua",
                      title: "Spring Events Intern",
                      detail: ""
                  },
                  {
                      photo: "../img/lship/TsudamaKiana.jpg",
                      name: "Kiana Tsudama",
                      title: "Spring Events Intern",
                      detail: ""
                  },
              ]

          },

          media: {

              body: "The media committee takes care of everything that you see online -- Facebook, YouTube, Snapchat, Instagram... you name it! These are the faces behind every punny Facebook caption and stunning design work. We showcase the best of Foundations through every video, team photo and website click. When we aren't busy keeping our social media sites poppin', we like to relax with strawberry smoothies and talk about dogs.",
              director: {
                  photo: "../img/lship/TanVivian.jpg",
                  name: "Vivian Tan",
                  title: "Director of Media",
                  detail: "What’s Forrest Grumps’ password? 1forrest1 *badumtsssss* (follow me on IG for more of my *~sparkling~* personality @viviantan_)"
              },
              admins: [
                  {
                      photo: "../img/lship/LiAnya.jpg",
                      name: "Anya Li",
                      title: "Design Chair",
                      detail: "A UX/UI designer and a member of A** Designs"
                  },
                  {
                      photo: "../img/lship/RenSisi.jpg",
                      name: "Sisi Ren",
                      title: "Design Chair",
                      detail: "I grew up in Vancouver, Canada and I'm easily distracted by shiny things."
                  },
                  {
                    photo: "../img/temporaryPhotos/TaVanessa.jpg",
                    name: "Vanessa Ta",
                    title: "Spring Design Intern",
                    detail: ""
                  },
                  {
                      photo: "../img/lship/NguyenAndrew.jpg",
                      name: "Andrew Nguyen",
                      title: "Photographer",
                      detail: "Sometimes I sleep with my eyes open xD"
                  },
                  {
                      photo: "../img/temporaryPhotos/PanSelina.jpg",
                      name: "Selina Pan",
                      title: "Spring Photographer Intern",
                      detail: ""
                  },
                  {
                      photo: "../img/temporaryPhotos/LaiJosh.jpg",
                      name: "Josh Lai",
                      title: "Videographer",
                      detail: "I have a personal goal to eat at every restaurant within a 10 mile radius of UCLA... where should I go next? "
                  },
                  {
                      photo: "../img/temporaryPhotos/LamLinus.jpg",
                      name: "Linus Lam",
                      title: "Videographer Intern",
                      detail: ""
                  },
                  {
                      photo: "../img/lship/YaoAudrey.jpg",
                      name: "Audrey Yao",
                      title: "Social Media Marketing Chair",
                      detail: "I spent too much time at the optometrist's"
                  },
                  {
                      photo: "../img/lship/JacoboCarley.jpg",
                      name: "Carley Jacobo",
                      title: "Social Media Marketing Chair",
                      detail: "I joined Foundations for the dancing, but stayed for the family."
                  },
                  {
                      photo: "../img/temporaryPhotos/NessipbekovDavid.jpg",
                      name: "David Nessipbekov",
                      title: "Spring Marketing Intern",
                      detail: ""
                  },
                  {
                      photo: "../img/lship/WilsonJosh.jpg",
                      name: "Josh Wilson",
                      title: "Webmaster",
                      detail: "A local from South Pasadena, also a superhero? What? #2020"
                  }
              ]
          },

          finance: {

              body: "Finance is responsible for managing anything involving money for Foundations, which includes handling merchandise sales, Venmo transactions, and getting funding for Foundations activities. We apply for grants from the UCLA student government, reach out to sponsors, and organize fundraisers so that Foundations can provide showcases that are free to the audience as well as hold various events for members each quarter. In addition, we help make sure that the organization stays financially stable by maintaining the budget and properly accounting for expenses. We work closely with the other committees to effectively allocate funding in a way that benefits members the most.",
              director: {
                  photo: "../img/lship/TianAnna.jpg",
                  name: "Anna Tian",
                  title: "Director of Finance",
                  detail: "I like cats, cake, and cute cafes!"
              },
              admins: [
                  {
                    photo: "../img/lship/LiDerek.jpg",
                    name: "Derek Li",
                    title: "Finance Chair",
                    detail: "I was born in Charlottesville, Virginia, and I'm jacked...jacked to the tits. Also, I wish my wallet was a thick as my thighs."
                  },
                  {
                    photo: "../img/lship/HuangZachary.jpg",
                    name: "Zachary Huang",
                    title: "Finance Chair",
                    detail: 'As one person, I cannot change the whole world, but I can change the whole world of one person" -Paul Shane Spear. Also, I actually do have 10 toes.'
                  },
                  {
                    photo: "../img/temporaryPhotos/VuongJennifer.jpg",
                    name: "Jennifer Vuong",
                    title: "Spring Finance Intern",
                    detail: ""
                  },
                  {
                    photo: "../img/TestimonialPhotos/Chang_Myles.jpg",
                    name: "Myles Chang",
                    title: "Spring Finance Intern",
                    detail: ""
                  },
              ]

          },

          showcase: {

              body: "Every quarter, Foundations Choreography’s training teams spend 8 weeks putting together full sets that culminate in a Showcase at the end of the quarter. The Showcase Committee, which consists of a Showcase Producer and 3 Showcase Chairs, works to plan and execute three Showcases per year from start to finish. Our responsibilities include devising the theme and names of all Showcases of the year, booking a location for an audience of over 1,000 people, inviting dance teams from the UCLA and surrounding dance community as guest acts, finding MCs, coordinating Showcase day logistics, and more. On the day of Showcase, the committee not only works backstage to direct dancers to stage, but also assists in controlling sound and lighting of all performances. Our goal is to create a platform for our dancers to showcase their countless hours of hard work and growth in dance to friends, family, and the UCLA dance community.",
              director: {
                photo: "../img/lship/LiangMichelle.jpg",
                name: "Michelle Liang",
                title: "Showcase Producer",
                detail: ""
              },
              admins: [
                  {
                    photo: "../img/lship/SoonJordan.jpg",
                    name: "Jordan Soon",
                    title: "Showcase Chair",
                    detail: "Favorite line from my favorite show: \"Fool me once shame on you, but teach a man to fool me and I'll be fooled for the rest of my life\""
                  },
                  {
                    photo: "../img/lship/FidelisJosh.jpg",
                    name: "Josh Fidelis",
                    title: "Showcase Chair",
                    detail: "Fidelis is my middle name, but you can call me whatever you like ;)"
                  },
                  {
                    photo: "../img/lship/TianSarah.jpg",
                    name: "Sarah Tian",
                    title: "Showcase Chair",
                    detail: "When I was in 5th grade I got an A on my essay on sea cucumbers. I’m still pretty proud of it."
                  },
                  {
                    photo: "../img/temporaryPhotos/NevinsAlex.jpg",
                    name: "Alex Nevins",
                    title: "Spring Showcase Intern",
                    detail: ""
                  },
              ]

          },

          teamrelations: {

              body: "Dance LShip are responsible for creating a supportive and positive team environment, encouraging dancers to continue to challenge and push themselves throughout the quarter. This committee consists of directors and captains, there to prepare their respective teams for the end-of-the-quarter showcase or concept video. For each team, there are two (or possibly three) directors and two captains present to lead the team. Directors are in charge of set building which includes choreographing, teaching, blocking, cleaning, creating the set mix, and generating ideas for team gear. Captains, on the other hand, are responsible for managing team logistics (i.e. organizing photoshoot, managing team Facebook page, keeping team roster updated) and facilitating intrateam and interteam bonding (i.e. team dinners, ice cream socials, study sessions, etc.), while also learning choreography alongside their teammates. Both positions are integral to team functionality so Dance LShip works together as a team themselves to ensure a rewarding experience for team members. ",
              director: {
                  photo: "../img/lship/PizarroAshley.jpg",
                  name: "Ashley Pizarro",
                  title: "Director of Team Relations",
                  detail: "*finger guns*"
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
        },

        advisors: {
            // Currently Advisors don't have any description, so I'll just list
            // They'll need a special render function.
            admins: [
                {
                    photo: "../img/lship/SuwandiMarcea.jpg",
                    name: "Marcea Suwandi",
                    title: 'advisor',
                    detail: "I love to bake cookies (Lship can testify to that), and I am an avid TV show binger."
                },
                {
                    photo: "../img/lship/LeeKevs.jpg",
                    name: "Kevin Lee",
                    title: 'advisor',
                    detail: "I like to untie people's shoelaces."
                },
                {
                    photo: "../img/lship/SumitroDean.jpg",
                    name: "Dean Sumitro",
                    title: 'advisor',
                    detail: "I was born in New York, I'm red-green colorblind and apparently my existence is a meme."
                },
            ]
        },

        danceID: 'summer',

        danceLship: {
          quarter: [
            {
              name: 'summer',
              teams: [
                {
                  name: "Apex",
                  directors: [
                    {
                      photo: "../img/TestimonialPhotos/Kim_Joshua.jpg",
                      name:  "Joshua Kim",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/TestimonialPhotos/Aguilar_Brandon.jpg",
                      name:  "Brandon Aguilar",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/TestimonialPhotos/Hsieh_Ellen.jpg",
                      name:  "Ellen Hsieh",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/TestimonialPhotos/Martinez_Martha.jpg",
                      name:  "Martha Martinez",
                      title: 'captain',
                      detail: "",
                    },
                  ],
                },
                {
                  name: "MEH",
                  directors: [
                    {
                      photo: "../img/TestimonialPhotos/Zhang_Derek.jpg",
                      name:  "Derek Zhang",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/TestimonialPhotos/Amande_Dexter.jpg",
                      name:  "Dexter Amande",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/TestimonialPhotos/Quan_Jeremy.jpg",
                      name:  "Jeremy Quan",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/TestimonialPhotos/Mejia_Mary2.jpg",
                      name:  "Mary Mejia",
                      title: 'captain',
                      detail: "",
                    }
                  ],
                },
                {
                  name: "YURNT",
                  directors: [
                    {
                      photo: "../img/TestimonialPhotos/Julian_Ria.jpg",
                      name:  "Ria Julian",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/TestimonialPhotos/Ung_Merton.jpg",
                      name:  "Merton Ung",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/temporaryPhotos/DubeyMeghal.jpg",
                      name:  "Meghal Dubey",
                      title: 'captain',
                      detail: "I was born and raised in India, and the parking lots in UCLA are my second home!",
                    },
                    {
                      photo: "../img/TestimonialPhotos/Chang_Myles.jpg",
                      name:  "Myles Chang",
                      title: 'captain',
                      detail: "What did the mother cow say to her calf?  It's pasture bedtime",
                    }
                  ],
                },
                {
                  name: "RL8",
                  directors: [
                    {
                      photo: "../img/TestimonialPhotos/Vasquez_Alexxa.jpg",
                      name:  "Alexxa Vasquez",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/TestimonialPhotos/Funtanilla_Noelle.jpg",
                      name:  "Noelle Funtanilla",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/TestimonialPhotos/Wang_Andy.jpg",
                      name:  "Andy Wang",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/TestimonialPhotos/Tamondong_Louise.jpg",
                      name:  "Louise Tamondong",
                      title: 'captain',
                      detail: "Hi, I’m Louise, I’m 21, and I never learned how to drive. Also, I’m from the SFV, I’m currently operating UCLA’s first spacecraft, and I have a 1 year old chinchilla named Chili!",
                    }
                  ],
                },
              ],
            },
            {
              name: 'fall',
              teams: [
                {
                  name: "KOI",
                  directors: [
                    {
                      photo: "../img/temporaryPhotos/NgIsabel.jpg",
                      name:  "Isabel Ng",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/temporaryPhotos/ChoiThomas.jpg",
                      name:  "Thomas Choi",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/temporaryPhotos/LeeIvan.jpg",
                      name:  "Ivan Lee",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/temporaryPhotos/ZhuAmy.jpg",
                      name:  "Amy Zhu",
                      title: 'captain',
                      detail: "",
                    }
                  ],
                },
                {
                  name: "Plus Ultra",
                  directors: [
                    {
                      photo: "../img/lship/LeeBrandon.jpg",
                      name:  "Brandon Lee",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/temporaryPhotos/WangLawrence.jpg",
                      name:  "Lawrence Wang",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/lship/ManipudNick.jpg",
                      name:  "Nick Manipud",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/temporaryPhotos/FarzanMona.jpg",
                      name:  "Mona Farzan",
                      title: 'captain',
                      detail: "",
                    }
                  ],
                },
                {
                  name: "Pocket Monsters",
                  directors: [
                    {
                      photo: "../img/lship/SuwandiMarcea.jpg",
                      name:  "Marcea Suwandi",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/JudoBrandon.jpg",
                      name:  "Brandon Judoprasetijo",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/lship/HtutSwan.jpg",
                      name:  "Swan Ye Htut",
                      title: 'captain',
                      detail: "I was born in Myanmar (Burma)!",
                    },
                    {
                      photo: "../img/lship/WuJolie.jpg",
                      name:  "Jolie Wu",
                      title: 'captain',
                      detail: "I look really serious and I love Amber Liu",
                    }
                  ],
                },
                {
                  name: "Peanut Butter",
                  directors: [
                    {
                      photo: "../img/lship/ByunAlex.jpg",
                      name:  "Alex Byun",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/temporaryPhotos/MannCharlie.jpg",
                      name:  "Charlie Mann",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/ChenNatalie.jpg",
                      name:  "Natalie Chen",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/lship/TsudamaKiana.jpg",
                      name:  "Kiana Tsudama",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/QuachKim.jpg",
                      name:  "Kim Quach",
                      title: 'captain',
                      detail: "",
                    }
                  ],
                },
                {
                  name: "Exodia",
                  directors: [
                    {
                      photo: "../img/lship/SinNatalie.jpg",
                      name:  "Natalie Sin",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/TrancePatrick.jpg",
                      name:  "Patrick Trance",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/lship/TuckerSean.jpg",
                      name:  "Sean Tucker",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/YazonVannah.jpg",
                      name:  "Vannah-Wila Yazon",
                      title: 'captain',
                      detail: "",
                    }
                  ],
                },
              ]
            },
            {
              name: 'winter',
              teams: [
                {
                  name: "ERA",
                  directors: [
                    {
                      photo: "../img/temporaryPhotos/McElhinneyPriscilla.jpg",
                      name:  "Priscilla McElhinney",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/temporaryPhotos/TrancePatrick.jpg",
                      name:  "Patrick Trance",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/temporaryPhotos/NgAshley.jpg",
                      name:  "Ashley Ng",
                      title: 'captain',
                      detail: "I always thought dancing was something that only BTS could do, but Foundations has proven me wrong.",
                    },
                    {
                      photo: "../img/temporaryPhotos/LeeIvanLship.jpg",
                      name:  "Ivan Lee",
                      title: 'captain',
                      detail: "",
                    },
                  ],
                },
                {
                  name: "Milk T's",
                  directors: [
                    {
                      photo: "../img/temporaryPhotos/SanicoIvan.jpg",
                      name:  "Ivan Sanico",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/temporaryPhotos/ThaoJanme.jpg",
                      name:  "Janme Thao",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/temporaryPhotos/LooneyHannah.jpg",
                      name:  "Hannah Looney",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/temporaryPhotos/ZhangSerena.jpg",
                      name:  "Serena Zhang",
                      title: 'captain',
                      detail: "",
                    }
                  ],
                },
                {
                  name: "NAKs",
                  directors: [
                    {
                      photo: "../img/temporaryPhotos/QinAllan.jpg",
                      name:  "Allan Qin",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/temporaryPhotos/EvangelistaMatt.jpg",
                      name:  "Matt Evangelista",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/temporaryPhotos/NguyenAngela.jpg",
                      name:  "Angela Nguyen",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/temporaryPhotos/HoKatie.jpg",
                      name:  "Katie Ho",
                      title: 'captain',
                      detail: "",
                    }
                  ],
                },
                {
                  name: "Reflect",
                  directors: [
                    {
                      photo: "../img/temporaryPhotos/RaDaniel.jpg",
                      name:  "Daniel Ra",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/temporaryPhotos/ZhuangMichelle.jpg",
                      name:  "Michelle Zhuang",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/temporaryPhotos/GuoPeibo.jpg",
                      name:  "Peibo Guo",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/temporaryPhotos/YazonVannah.jpg",
                      name:  "Vannah-Wila Yazon",
                      title: 'captain',
                      detail: "",
                    }
                  ],
                },
                {
                  name: "TSTR SDRDL",
                  directors: [
                    {
                      photo: "../img/temporaryPhotos/AnchetaAnthony.jpg",
                      name:  "Anthony Ancheta",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/temporaryPhotos/KesterGabbi.jpg",
                      name:  "Gabbi Kester",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/temporaryPhotos/PanSelina.jpg",
                      name:  "Selina Pan",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/TestimonialPhotos/Tamondong_Louise.jpg",
                      name:  "Louise Tamondong",
                      title: 'captain',
                      detail: "",
                    }
                  ],
                },
              ],
            },
            {
              name: 'spring',
              teams: [
                {
                  name: "Azami",
                  directors: [
                    {
                      photo: "../img/lship/lship_headshots/SanicoIvan.jpg",
                      name:  "Ivan Sanico",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/lship_headshots/LeeTeddy.jpg",
                      name:  "Teddy Lee",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/lship/lship_headshots/LeGabby.jpg",
                      name:  "Gabby Le",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/lship_headshots/TsiKara.jpg",
                      name:  "Kara Tsi",
                      title: 'captain',
                      detail: "",
                    },
                  ],
                },
                {
                  name: "Swangin’ Peaches",
                  directors: [
                    {
                      photo: "../img/lship/lship_headshots/LiAnya.jpg",
                      name:  "Anya Li",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/lship_headshots/TuckerChantel.jpg",
                      name:  "Chantel Tucker",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/lship_headshots/MartinezVictor.jpg",
                      name:  "Victor Martinez",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/lship/lship_headshots/SilvermanMorgan.jpg",
                      name:  "Morgan Silverman",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/lship_headshots/LiPeggy.jpg",
                      name:  "Peggy Li",
                      title: 'captain',
                      detail: "",
                    }
                  ],
                },
                {
                  name: "BDE",
                  directors: [
                    {
                      photo: "../img/lship/lship_headshots/CireBryce.jpg",
                      name:  "Bryce Cire",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/lship_headshots/CireDallas.jpg",
                      name:  "Dallas Cire",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/lship/lship_headshots/TranBrandon.jpg",
                      name:  "Brandon Tran",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/lship_headshots/FarzanMona.jpg",
                      name:  "Mona Farzan",
                      title: 'captain',
                      detail: "",
                    }
                  ],
                },
                {
                  name: "gRooTz",
                  directors: [
                    {
                      photo: "../img/temporaryPhotos/EvangelistaMatt.jpg",
                      name:  "Matt Evangelista",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/lship_headshots/FuntanillaNoelle.jpg",
                      name:  "Noelle Funtanilla",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/lship/lship_headshots/VillamorBianca.jpg",
                      name:  "Bianca Villamor",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/lship_headshots/WuJolie.jpg",
                      name:  "Jolie Wu",
                      title: 'captain',
                      detail: "",
                    }
                  ],
                },
                {
                  name: "LMNT",
                  directors: [
                    {
                      photo: "../img/lship/lship_headshots/DoCookie.jpg",
                      name:  "Alex Do",
                      title: 'director',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/lship_headshots/CorreaNoelle.jpg",
                      name:  "Noelle Correa",
                      title: 'director',
                      detail: "",
                    }
                  ],
                  captains: [
                    {
                      photo: "../img/lship/lship_headshots/LiuSabrina.jpg",
                      name:  "Sabrina Liu",
                      title: 'captain',
                      detail: "",
                    },
                    {
                      photo: "../img/lship/lship_headshots/BaysaJosh.jpg",
                      name:  "Joshua Baysa",
                      title: 'captain',
                      detail: "",
                    }
                  ],
                },
              ],
            },
          ],
        },
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
              data.branchID = (link.innerHTML.toLowerCase()).replace(/ /g,'');
              connector.scroll();
            });
          });

          document.querySelectorAll('.termLink').forEach(function(link){
            link.addEventListener('click', function() {
              data.branchID = (link.innerHTML.toLowerCase()).replace(/ /g,'');
              connector.scroll('dance');
            });
          });

          document.querySelector('#adminLink').addEventListener('click', function() {
            data.branchID = 'executives';
            connector.scroll();
          });

          document.querySelector('#danceLink').addEventListener('click', function() {
            data.branchID = 'danceLship';
            connector.scroll();
          });

          document.querySelector('#sideBarLogo').addEventListener('click', function(){
            $('html, body').animate({ scrollTop: 0 }, 1500);
            connector.reset();
          });

          document.querySelector('#sideBarToggle').addEventListener('click', function(e){
            e.target.classList.remove('notification');
            document.querySelector('#desktopOnlyNav').style.left = '0px';
            e.target.style.display = 'none';
          });

          document.querySelector('#sideBarClose').addEventListener('click', function(e){
            connector.reset();
          });
      },

      assignEntry: function (photo) {
        if(model.isInViewport(photo)) {
          let seconds = ((Math.random() * 10)) * 500;
          setTimeout(function(){
            photo.classList.add('flyIn');
          }, seconds);
        } else {
          window.addEventListener('scroll', function () {
            if(model.isInViewport(photo)) {
              let seconds = ((Math.random() * 15)) * 1000;
              setTimeout(function(){
                photo.classList.add('flyIn');
              }, seconds);
            }
          });
        }
      },

      setLazy: function () {
          data.lazy = document.querySelectorAll('.lazy');
          console.log('Found ' + data.lazy.length + ' lazy images');
      },

      registerListener: function (event, func) {
          if (window.addEventListener) {
              window.addEventListener(event, func)
          } else {
              window.attachEvent('on' + event, func)
          }
      },

      lazyLoad: function () {
          for(let i=0; i < data.lazy.length; i++){
              if(model.isInViewport(data.lazy[i])){
                  if (data.lazy[i].getAttribute('data-src')){
                      data.lazy[i].src = data.lazy[i].getAttribute('data-src');
                      data.lazy[i].removeAttribute('data-src');
                  }
              }
          }
          data.cleanLazy();
      },

      isInViewport: function (el) {
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

      init: function () {
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
        data.branchID = 'teamrelations';
        view.render();

        data.branchID = 'advisors';
        view.render();

        data.branchID = 'danceLship';
        view.render();

        view.showLship();

        setTimeout(function() {
          document.querySelector('#sideBarToggle').classList.remove('notification');
        }, 4000);

      },

      //This long function will create all the sections for the page based on
      // the dataset defined in the data object. There is no need to call this function
      // unless you're adding another section.

      render: function() {

        let branch = data.branchID;

        let sectionTag = document.createElement('SECTION');
        sectionTag.classList.add('lshipDescription');
        sectionTag.id = branch;
        document.querySelector('main').appendChild(sectionTag);

        let sectionTitle = document.createElement('h2');
        sectionTitle.innerHTML = data.branchID;
        sectionTag.appendChild(sectionTitle);

        let directorName = document.createElement('h4');

        let directorTitle = document.createElement('h5');

        let descriptionHead = document.createElement('div');

        let branchBody = document.createElement('p');

        let portfolio = document.createElement('div');
        portfolio.id = 'portfolio';


        if(branch != 'advisors' && branch != 'danceLship') {
          directorName.classList.add('directorName');
          directorName.innerHTML = data.branches[branch].director.name;

          directorTitle.classList.add('directorTitle');
          directorTitle.innerHTML = data.branches[branch].director.title;

          descriptionHead.classList.add('container');
          descriptionHead.classList.add('descriptionHead');
          sectionTag.appendChild(descriptionHead);

          branchBody.classList.add('branchBody');
          branchBody.innerHTML = data.branches[branch].body;

          if (branch != 'executives') {
            portfolio.appendChild(view.createHoverPic(data.branches[branch].director, 'director'));
            if(branch != 'teamrelations' && branch != 'advisors') {

              let leftImgDiv = document.createElement('div');
              leftImgDiv.classList.add('col-lg-6');

              let rightMainDiv = document.createElement('div');
              rightMainDiv.classList.add('col-lg-6');

              leftImgDiv.appendChild(portfolio);
              leftImgDiv.appendChild(directorName);
              leftImgDiv.appendChild(directorTitle);
              descriptionHead.appendChild(leftImgDiv);

              rightMainDiv.appendChild(branchBody);
              descriptionHead.appendChild(rightMainDiv);

            } else {
              sectionTag.appendChild(directorName);
              descriptionHead.appendChild(portfolio);
              descriptionHead.appendChild(branchBody);
              descriptionHead.insertBefore(directorName, branchBody);
              descriptionHead.insertBefore(directorTitle, branchBody);

              branchBody.classList.add('relationsBody');
              descriptionHead.classList.add('relationsHead');
              sectionTitle.innerHTML = 'Team Relations';
            }
          } else {

            sectionTag.insertBefore(directorName, descriptionHead);

            let execPicArray = document.createElement('div');
            execPicArray.classList.add('execPicArray');
            descriptionHead.appendChild(execPicArray);

            descriptionHead.classList.add('row');
            descriptionHead.id = "descriptionExec";

            portfolio.classList.add('execPhoto');
            portfolio.classList.add('miya');
            portfolio.appendChild(view.createHoverPic(data.branches[branch].director.miya, 'director'));

            execPicArray.appendChild(portfolio);

            portfolio = document.createElement('div');
            portfolio.id = 'portfolio';

            portfolio.classList.add('execPhoto');
            portfolio.classList.add('liana');
            portfolio.appendChild(view.createHoverPic(data.branches[branch].director.liana, 'director'));

            execPicArray.appendChild(portfolio);

            branchBody.classList.add('bodyExec');

            descriptionHead.appendChild(branchBody);

          }
        } else if(branch === 'danceLship') {

          sectionTag.classList.add('term');

          sectionTag.id = data.branchID;

          data.branches.danceLship.quarter.forEach(function(quarter){

            let descriptionHead = document.createElement('div');
            descriptionHead.classList.add('descriptionHead');
            descriptionHead.id = quarter.name;

            let termTitle = document.createElement('h4');
            termTitle.innerHTML = quarter.name;
            termTitle.classList.add('termTitle');
            sectionTag.appendChild(termTitle);
            sectionTag.appendChild(descriptionHead);

            quarter.teams.forEach(function(team) {
              let teamDiv = document.createElement('div');
              teamDiv.classList.add('teamItem');

              let teamName = document.createElement('h4');
              teamName.innerHTML = team.name;
              teamDiv.appendChild(teamName);

              let directorDiv = document.createElement('div');
              directorDiv.classList.add('teamInnerDiv');

              portfolio = document.createElement('div');
              portfolio.id = 'portfolio';
              portfolio.classList.add('row');
              teamDiv.appendChild(portfolio);

              let adminDiv;
              adminDiv = document.createElement('div');
              adminDiv.classList.add('adminImgArray');
              adminDiv.classList.add('col-lg-12');
              portfolio.appendChild(adminDiv);

              team.directors.forEach(function(director){
                adminDiv.appendChild(view.createHoverPic(director, 'admin'));
              });

              team.captains.forEach(function(captain){
                adminDiv.appendChild(view.createHoverPic(captain, 'admin'));
              });

              teamDiv.appendChild(directorDiv);

              descriptionHead.appendChild(teamDiv);
            });
          });
        }



        if (branch != 'executives' && branch != 'teamrelations' && branch != 'danceLship') {
          portfolio = document.createElement('div');
          portfolio.id = 'portfolio';
          portfolio.classList.add('row');

          let adminDiv;
          adminDiv = document.createElement('div');
          adminDiv.classList.add('adminImgArray');
          adminDiv.classList.add('col-lg-12');

          sectionTag.appendChild(portfolio);

          portfolio.appendChild(adminDiv);
          data.branches[branch].admins.forEach(function (admin){
            adminDiv.appendChild(view.createHoverPic(admin, 'admin'));
          });
        }
      },

      // I didn't want to repeat code, I used javascript to make the DOM objects.
      // member = the information like an admin from the data object.
      // type = is it a director photo or an admin photo, each have different sizes/parameters.

      createHoverPic: function(member, type) {
        let parentDiv = document.createElement('div');
        parentDiv.classList.add('portfolio-item');

        // There is no modal here, I'm just using bootstrap's way
        // of hover displays to create an overlay effect.
        let linkToModal = document.createElement('A');
        linkToModal.classList.add('portfolio-link');
        parentDiv.appendChild(linkToModal);

        let hoverDiv1 = document.createElement('div');
        hoverDiv1.classList.add('portfolio-hover');
        linkToModal.appendChild(hoverDiv1);

        let hoverDiv2 = document.createElement('div');
        hoverDiv2.classList.add('portfolio-hover-content');
        hoverDiv1.appendChild(hoverDiv2);

        let hoverBox = document.createElement('div');
        hoverBox.classList.add('modal-logo');
        hoverDiv2.appendChild(hoverBox);



        let boxTitle = document.createElement('h6');
        boxTitle.innerHTML = member.name;
        let boxSubtitle = document.createElement('h6');
        boxSubtitle.innerHTML = member.title;
        let smallDetail = document.createElement('span');
        smallDetail.innerHTML = member.detail;

        hoverBox.appendChild(boxTitle);
        hoverBox.appendChild(boxSubtitle);
        hoverBox.appendChild(smallDetail);

        let pic = document.createElement('IMG');

        pic.src = member.photo;
        pic.alt = member.name;
        linkToModal.appendChild(pic);

        const divCopy = parentDiv.cloneNode(true);
        data.allPhotos.push(divCopy);

        if(type === 'director') {
          hoverDiv2.id = 'hoverOveride';
          hoverBox.classList.add('directorBox');
          pic.classList.add('directorPhoto');
        } else {
          hoverBox.classList.add('adminBox');
          hoverBox.classList.add('admin-logo');
          smallDetail.classList.add('adminDetail');
          pic.classList.add('adminPics');
        }


        return parentDiv;
      },


      // This function is used to scroll the top of the window to section.
      goToSection: function(term = 'admin') {

        function helper(section){
          if(section.id === data.branchID) {
            let scrollTarget;
            let bodyRect = document.body.getBoundingClientRect();
            let sectionRect = section.getBoundingClientRect();
            let offset = sectionRect.top - bodyRect.top;
            scrollTarget = offset;
            $('html, body').animate({ scrollTop: scrollTarget }, 1500);
            section.classList.add('flyInNoScale');
            setTimeout(function() {
              section.classList.remove('flyInNoScale');
            }, 2000);
          }
        }

        view.resetSideBar();

        if(term === 'admin') {
          document.querySelectorAll('.lshipDescription').forEach(function(section) {
            helper(section);
          });
        } else {
          document.querySelectorAll('#danceLship .descriptionHead').forEach(function(section){
            helper(section);
          });
        }

      },



      // On mobile, the sideBar needs to close when a user selects an option.
      resetSideBar: function() {
        document.querySelector('#sideBarToggle').classList.add('notification');
        document.querySelector('#desktopOnlyNav').style.left = '';
        document.querySelector('#desktopOnlyNav').style.position = '';
        setTimeout(function() {
          document.querySelector('#sideBarToggle').style.display = '';
        }, 2000)
        setTimeout(function() {
          document.querySelector('#sideBarToggle').classList.remove('notification');
        }, 4000);
      },

      // This is used for the the first animation scene on the page, using the
      // the array we started making when we created hoverdivs, we display them
      // at random intervals.
      showLship: function() {

        let portfolio_admin = document.createElement('div');
        portfolio_admin.id = 'portfolio';
        portfolio_admin.classList.add('row');
        document.querySelector('#adminLshipArray').appendChild(portfolio_admin);

        let adminDiv_admin;
        adminDiv_admin = document.createElement('div');
        adminDiv_admin.classList.add('adminImgArray');
        adminDiv_admin.classList.add('col-lg-12');
        portfolio_admin.appendChild(adminDiv_admin);

        let portfolio_dance = document.createElement('div');
        portfolio_dance.id = 'portfolio';
        portfolio_dance.classList.add('row');
        document.querySelector('#danceLshipArray').appendChild(portfolio_dance);

        let adminDiv_dance;
        adminDiv_dance = document.createElement('div');
        adminDiv_dance.classList.add('adminImgArray');
        adminDiv_dance.classList.add('col-lg-12');
        portfolio_dance.appendChild(adminDiv_dance);



        data.allPhotos.forEach(function(hoverDiv, i){
          let lshipPhoto = view.findChild(hoverDiv, 1, 1);
          lshipPhoto.classList.add('lshipPics');
          view.findChild(hoverDiv, 3).classList.add('lshipPicBox');
          if(i >= 26) {
            document.querySelector('#danceLshipArray .adminImgArray').appendChild(hoverDiv);
          } else {
            document.querySelector('#adminLshipArray .adminImgArray').appendChild(hoverDiv);
          }

          connector.setEntryParam(lshipPhoto);
        });

      },

      // This function should make the process of finding the first child of
      // a higharcy of divs easier or for finding the specific element in an array of children.
      findChild: function(parent, level, number = 0) {
        if(level === 0) {
          return parent.children[number];
        } else {
          level--;
          return view.findChild(parent.children[0], level, number);
        }
      },

  };

  let connector = {

      init: function() {
        model.init();
        view.init();
      },

      scroll: function(term = 'admin') {
        view.goToSection(term);
      },

      setEntryParam: function (photo) {
        model.assignEntry(photo);
      },

      reset: function() {
        view.resetSideBar();
      }

  };

  connector.init();
})();
