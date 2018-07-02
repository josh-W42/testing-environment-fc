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
