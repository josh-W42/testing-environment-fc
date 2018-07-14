(function () {

  // Everything that follows should be primarily for the index.html page.
  document.querySelector('.soundbutton').addEventListener('click', toggleSound);

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

  window.addEventListener('load', function () {
  window.addEventListener('scroll', fadeInSection);




    // I'm having content fade in when the user scrolls down to certain "target points."
    // mainly for aestical reasons.

    function fadeInSection() {
      if(this.innerWidth > 1024) {
        if (this.pageYOffset > (document.querySelector('#fadein-target-section').offsetHeight + 500)) {
          document.querySelector('#section-main-content').style.display = "block";
          this.removeEventListener('scroll', fadeInSection);
          this.addEventListener('scroll', fadeInHighlight)
        }
      }
      else if (this.innerWidth <= 1024) {
        if (this.pageYOffset > (document.querySelector('#fadein-target-section').offsetHeight)) {
          document.querySelector('#section-main-content').style.display = "block";
          this.removeEventListener('scroll', fadeInSection);
          this.addEventListener('scroll', fadeInHighlight)
        }
      }
    }

    function fadeInHighlight() {
      if (this.innerWidth > 1024) {
        if (this.pageYOffset > (document.querySelector('#fadein-target-highlight').offsetHeight + 500)) {
          document.querySelector('#highlight-main-content').style.display = "block";
          this.removeEventListener('scroll', fadeInHighlight)
        }
      }
      else if (this.innerWidth > 575 && this.innerWidth <= 1024) {
        if (this.pageYOffset > (document.querySelector('#fadein-target-highlight').offsetHeight)) {
          document.querySelector('#highlight-main-content').style.display = "block";
          this.removeEventListener('scroll', fadeInHighlight)
        }
      }
      else if (this.innerWidth < 575) {
        if (this.pageYOffset > (document.querySelector('#fadein-target-highlight').offsetHeight + 500)) {
          document.querySelector('#highlight-main-content').style.display = "block";
          this.removeEventListener('scroll', fadeInHighlight)
        }
      }
    }
  });

  // This function will toggle the sound button for the main video.
  // Note, on mobile and smaller tablet it will not be visible.

  function toggleSound(e) {
    e.target.classList.toggle('soundOn');
    let video = document.querySelector('video');
    if (video.muted === true) {
      video.muted = false;
      e.target.innerHTML = "Sound ON";
    }
    else if(video.muted === false) {
      video.muted = true;
      e.target.innerHTML = "Sound OFF";
    }
  }

})();
