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
}


// line
function animationLine() {
    if (productName1) {
        var rect = line1.getBoundingClientRect().y;
        var rect2 = line2.getBoundingClientRect().y;
        var rect3 = line3.getBoundingClientRect().y;
        if (document.body.scrollTop >= rect ||
            document.documentElement.scrollTop >= rect) {
            line1.style.width = productName1.offsetWidth + 'px'
            }else {
            line1.style.width = 0
            }
        if (document.body.scrollTop >= rect2 ||
            document.documentElement.scrollTop >= rect2) {
            line2.style.width = productName2.offsetWidth + 'px'
            }else {
            line2.style.width = 0
            }
        if (document.body.scrollTop >= rect3 ||
            document.documentElement.scrollTop >= rect3) {
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


export default handleAnimation