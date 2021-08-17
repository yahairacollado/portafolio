const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider');

const indicatorParent = document.querySelector('.controls ul'); 
const indicators = document.querySelectorAll('.controls li');
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.controls .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translateX(' + (i) * -50 + '%)';  
    index = i;
    
  });
});

left.addEventListener('click', function() {
  index = (index > 0) ? index -1 : 0;
  document.querySelector('.controls .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -50 + '%)';
});

right.addEventListener('click', function() {
  index = (index < 4 - 1) ? index+1 : 3;
  document.querySelector('.controls .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -50 + '%)';
});

// const slider = document.querySelector ("#slider");
// let sliderSection = document.querySelectorAll (".home-slider-section");
// let sliderSectionLast = sliderSection[sliderSection.length -1];

// const buttonLeft = document.querySelector ("#arrow-left");
// const buttonRight = document.querySelector ("#arrow-right");

// slider.insertAdjacentElement('afterbegin', sliderSectionLast);

// function Next() {
//   let sliderSectionFirst = document.querySelectorAll(".home-slider-section")[0];
//   slider.style.marginLeft = "-200%";
//   slider.style.transition = "all 0.5s";
//   setTimeout(function(){
//    slider.style.transition = "none";
//    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
//    slider.style.marginLeft = "-100%";
//   }, 500);
// }

// function Prev() {
//   let sliderSection = document.querySelectorAll(".home-slider-section");
//   let sliderSectionLast = sliderSection[sliderSection.length -1];
//   slider.style.marginLeft = "0";
//   slider.style.transition = "all 0.5s";
//   setTimeout(function(){
//    slider.style.transition = "none";
//    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
//    slider.style.marginLeft = "-100%";
//   }, 500);
// }

// buttonRight.addEventListener('click', function(){
//   Next();
// });

// buttonLeft.addEventListener('click', function(){
//   Prev();
// });

// setInterval(function(){
//   Next();
// },  9500);