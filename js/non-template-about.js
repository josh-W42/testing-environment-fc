let words = document.querySelectorAll('.word');
let i = 0;
let topValues = [];
let displayed = false;
let fDisplayed = false;
let fArray = [];
fArray.push(document.querySelector('#ellisWong'));
fArray.push(document.querySelector('#michelleTran'));
fArray.push(document.querySelector('#michelleLiang'));
fArray.push(document.querySelector('#joshuaFidelis'));
fArray.push(document.querySelector('#ashleyPizarro'));
fArray.push(document.querySelector('#lianaLiang'));
fArray.push(document.querySelector('#jeremyQuan'));
fArray.push(document.querySelector('#tennShaun'));
fArray.push(document.querySelector('#sarahTian'));
fArray.push(document.querySelector('#miyaSheker'));
const fLimit = fArray.length;
const limit = words.length;
(function () {
  // The code below is for implementing a 'lazy loading' strategy,
  // a small place holder is over an image as source then, once the
  // page loads it is replaced with the actual picture.
  registerListener('load', setLazy);
  registerListener('load', lazyLoad);
  registerListener('scroll', lazyLoad);

  let lazy = [];

  function setLazy(){
    lazy = document.getElementsByClassName('lazy');
    console.log('Found ' + lazy.length + ' lazy images');
  }

  function lazyLoad(){
    for(var i=0; i<lazy.length; i++){
      if(isInViewport(lazy[i])){
        if (lazy[i].getAttribute('data-src')){
          lazy[i].src = lazy[i].getAttribute('data-src');
          lazy[i].removeAttribute('data-src');
        }
      }
    }
  cleanLazy();
  }

  function cleanLazy(){
    lazy = Array.prototype.filter.call(lazy, function(l){ return l.getAttribute('data-src');});
  }

  function isInViewport(el){
    var rect = el.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function registerListener(event, func) {
    if (window.addEventListener) {
      window.addEventListener(event, func)
    } else {
      window.attachEvent('on' + event, func)
    }
  }
  window.addEventListener('load', function (){
    words.forEach(function (word){
      topValues.push(word.style.top);
      word.style.top = 0;
    });
    function buildYourself() {
      setTimeout( function (){
        if (i < limit && !fDisplayed) {
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
          buildYourself();
        }
      }, 400);

    }
    function displayFC() {
      setTimeout( function (){
        if (i < fLimit && !fDisplayed) {
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
    buildYourself();
  });
}());
