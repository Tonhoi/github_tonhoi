import {
    $,
    $$,
    lengh,
    moveSlide,
    preslide,
    nextslide,
    contentBlockList,
    slideShow,
} from './define.js'

function animationSlide() {
    handleSlide()
    handleAnimation()
}
function handleSlide() {
    var dem = 0;
    var index = 0
    if (contentBlockList)
    {
        var textSlide = $('.preSlide div:first-child').offsetWidth;
        nextslide.addEventListener('click', function() {
            if (dem >= lengh - 4){
            return
            }else {
            index = index - textSlide
            moveSlide.style = `transform:translateX(${index}px)`
            }
            dem++
        })
        
        preslide.addEventListener('click', function() {
            if (dem <= 0) {
            dem = 0
            return
            }else {
            index = index + textSlide
            moveSlide.style = `transform:translateX(${index}px)`
            }
            dem--
        })
    }
    var count = 1;

    if (slideShow)
    {
        setInterval(function() {
            document.getElementById('r' + count).checked = true;
            count++;
            if(count === 6) {
                count = 1;
            }
            }, 6000)
    }
    // setInterval of slideShow Tabs 
    if (slideShow)
    {
        setInterval(function() {
        dem++
        if (dem > lengh - 4) {
            index = textSlide
            dem = 0
        }
        index = index - textSlide
        moveSlide.style = `transform:translateX(${index}px)`
        }, 6000)
    }

    
};


function handleAnimation() {
    if (slideShow) {

        var jsAnimation = $('.row.js-animation')
        var jsAnimationDiv = $('.js-first__animation').offsetWidth
        var jsAnimationDiv2 = $$('.js-animation > div').length
        
        
        var sum = 0;
        var firstCount = 0;

        setInterval(function() {
            sum++
            if (sum > jsAnimationDiv2 - 3) {
                sum = 0
                firstCount = jsAnimationDiv
            }
            firstCount = firstCount - jsAnimationDiv
            jsAnimation.style = `transition: transform linear 1s;flex-wrap: nowrap;transform:translateX(${firstCount}px)`
        }, 5000)


        var jsAnimationProduct= $('.js-animation__product')
        var jsFirstProduct= $('.js-first__product').offsetWidth
        var jsAnimationDiv3 = $$('.js-animation__product li').length
        var sum1 = 0;
        var firstCount1 = 0;
        setInterval(function() {
            sum1++
            if (sum1 > jsAnimationDiv3 - 2) {
                sum1 = 0
                firstCount1 = jsFirstProduct
            }
            firstCount1 = firstCount1 - jsFirstProduct
            jsAnimationProduct.style = `transition: transform linear 1s;flex-wrap: nowrap;transform:translateX(${firstCount1}px)`

        }, 5000)
    }
}

export default animationSlide