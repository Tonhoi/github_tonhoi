import {
    $,
    lengh,
    moveSlide,
    preslide,
    nextslide,
    contentBlockList,
} from './define.js'
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
    var slideShow = $('.slidershow')

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

export default handleSlide