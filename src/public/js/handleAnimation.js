import {
    $,
    $$,
    productName1,
    productName2,
    productName3,
    line1,
    line2,
    line3,
    slideShow
}from './define.js'


function handleAnimation() {
    animationLine()
    arrowUp()
    scrollFunction()
}


// line
function animationLine() {
    if (productName1) {
        if (document.body.scrollTop > 1000 ||
            document.documentElement.scrollTop > 1000) {
            line1.style.width = productName1.offsetWidth + 'px'
            }else {
            line1.style.width = 0
            }
        if (document.body.scrollTop > 1500 ||
            document.documentElement.scrollTop > 1500) {
            line2.style.width = productName2.offsetWidth + 'px'
            }else {
            line2.style.width = 0
            }
        if (document.body.scrollTop > 2000 ||
            document.documentElement.scrollTop > 2000) {
            line3.style.width = productName3.offsetWidth + 'px'
            }else {
            line3.style.width = 0
            }
    }
};

function arrowUp() {
var arrowup = $('.arrow-up')
if (
    document.body.scrollTop > 2000 ||
    document.documentElement.scrollTop > 2000
) {
    arrowup.style.opacity = '1'
    arrowup.style.transform = 'scale(1)'

} else {
    arrowup.style.opacity = '0'
    arrowup.style.transform = 'scale(0)'
}
};


// animation navbar
function scrollFunction() {

if (slideShow)
{
    if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
    ) {
    $(".header").style.backgroundColor = "rgb(21, 150, 147)";
    $(".header").style.top = "0";
    } else {
    $(".header").style.backgroundColor =
        "transparent";
    $(".header").style.top = "20px";
    }
}
};



export default handleAnimation