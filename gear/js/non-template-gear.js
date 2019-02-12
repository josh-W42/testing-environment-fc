(function () {

  let data = {

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

          document.querySelectorAll(".productDiv").forEach(function(pic) {
              pic.addEventListener('mouseenter', function(e) {
                  document.querySelector(e.target.dataset.info).style.display = "block";
              });
          });
          document.querySelectorAll(".productDiv").forEach(function(pic) {
              pic.addEventListener('mouseleave', function(e) {
                  document.querySelector(e.target.dataset.info).style.display = "none";
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
        document.querySelectorAll(".altPhotos").forEach(function(photo) {
            photo.addEventListener('click', function(e) {
                view.showProductImg(e.target.dataset.index, e.target.dataset.owner);
            });
        });
    },

    showProductImg: (i, gear) => {

        let current = document.querySelector(`${gear} .activeR`) ? (document.querySelector(`${gear} .activeR`)):(document.querySelector((`${gear} .activeL`)));

        if(!(current.dataset.index === i)) {

            let exp = (current.classList.contains("activeR")) ? ("activeR"):("activeL");


            // The next photo is on the right.
            if (current.dataset.index < i) {

                function remove() {
                    document.querySelector(`${gear} .previousL`).classList.remove("previousL");
                }

                function add() {
                    let arr =  document.querySelectorAll(`${gear} .productPic`);
                    arr[i].classList.add("activeR");
                }

                current.classList.replace(exp, "previousL");
                current.classList.remove("activeL");

                setTimeout(remove, 450);

                setTimeout(add, 450);
            }
            // The next photo is on the left
            else {
                function remove() {
                    document.querySelector(`${gear} .previousR`).classList.remove("previousR");
                }

                function add() {
                    let arr =  document.querySelectorAll(`${gear} .productPic`);
                    arr[i].classList.add("activeL");
                }

                current.classList.replace(exp, "previousR");
                current.classList.remove("activeR");

                setTimeout(remove, 450);

                setTimeout(add, 450);
            }
        }

    },

  };

  let connector = {

      init: function() {
        model.init();
        view.init();
    },

  };

  connector.init();
})();
