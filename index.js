const slider = document.querySelector('.slider');

const LeftArrow = document.querySelector('.arrow-left')
const RightArrow = document.querySelector('.arrow-right')

var sectionIndex = 0;

RightArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    slider.style.transform = 'translateX('+ sectionIndex * -25 +'%)'
})

LeftArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translateX('+ sectionIndex * -25 +'%)'
})
    
    

