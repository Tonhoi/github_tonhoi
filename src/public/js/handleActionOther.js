import {
    $,
    $$,
    slideShow
} from './define.js'

function handleActionOther() {
    opensearchTabletMobile()
    closesearchTabletMobile()
    slideShowtext()
    handleOption()
}

function opensearchTabletMobile() {
var show = $('.icon__search');
show.onclick = function(e) {
    $("#showsearch").style.width = "100%";
    $("#showsearch").style.opacity = "1";
}
};

function closesearchTabletMobile() {
var close = $('.close-btn');
close.onclick = function(e) {
    $("#showsearch").style.width = "0%";
    $("#showsearch").style.opacity = "0";

}
}

function slideShowtext() {
    if (!slideShow)
    {
    $(".header").style.backgroundColor = "rgb(21, 150, 147)";
    $(".header").style.top = "0";
    }
}

// handle Option
function handleOption() { 
    var iconEllipsis = $$('.icon__ellipsis')
    var menus = $$('.postItem__optionBtn-function')
    var overlayOption = $('.overlay__option')
    iconEllipsis.forEach((iconEllipsis, index) => {
    var menu = menus[index]
    iconEllipsis.onclick = function() {
        overlayOption.classList.toggle('aaa')
        this.style.zIndex = '4'
        menu.classList.toggle('open')
        overlayOption.onclick = function() {
        this.classList.remove('aaa')
        menu.classList.remove('open')
        }
    }
    });
}

export default handleActionOther