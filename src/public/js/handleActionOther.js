import {
    $,
    $$,
    slideShow,
    getLinks,
    commentBlogInput,
    CommentBoxActionWrapper,
    btnCloseComment,
    overlayComment,
    activeLike,
    hideAndShowComments,
    ReplyToComment,
    reply1,
    commoncommentblog2,
    btnCancelComment2,
    reply2,
    commoncommentblog3,
    btnCancelComment3,
    showCommentPageNews,
    hideCommentPageNews,
} from './define.js'

function handleActionOther() {
    opensearchTabletMobile()
    closesearchTabletMobile()
    slideShowtext()
    handleOption()
    getLinksnews()
    handlecommentBlog()
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
        overlayOption.classList.toggle('open')
        this.style.zIndex = '4'
        menu.classList.toggle('open')
        overlayOption.onclick = function() {
        this.classList.remove('open')
        menu.classList.remove('open')
        }
    }
    });
}

function getLinksnews() {
    getLinks.forEach((getLinks) => {
      getLinks.onclick = function(e) {
        getLinks.setAttribute('href', 'newsBlog')
      }
    })
}


// comment blog
function handlecommentBlog() {
    var conttarinerCommentBlog = $('.BlogDetail_commentBody')
    if (conttarinerCommentBlog) {
        commentBlogInput.forEach((commentBlogInput, index) => {
        var commentBoxActionWrapper = CommentBoxActionWrapper[index]
        commentBlogInput.oninput = function(e) {
            if (commentBlogInput.value === "") {
                commentBoxActionWrapper.classList.remove('CommentBox_ok--onchange')
            }else {
                commentBoxActionWrapper.classList.add('CommentBox_ok--onchange')
            }
            }
        })  
        btnCloseComment.onclick = function(e) {
            CommentBoxActionWrapper.classList.remove('CommentBox_ok--onchange')
            commentBlogInput.value = ''
        }
            
        overlayComment.onclick = function(e) {
            CommentBoxActionWrapper.classList.remove('CommentBox_ok--onchange')
            commentBlogInput.value = ''
        }

        activeLike.forEach((activeLike) => {
            activeLike.onclick = function(e) {
                activeLike.classList.toggle('Comment_likeComment--active')
            }
        })
        
        // hide and show comment
        hideAndShowComments.onclick = function(e) {
            ReplyToComment.classList.toggle('open')
        }

        reply1.onclick = function(e) {
            commoncommentblog2.classList.add('open')
        }
        btnCancelComment2.onclick = function(e) {
            commoncommentblog2.classList.remove('open')
        }

        reply2.onclick = function(e) {
            commoncommentblog3.classList.add('open')
        }
        btnCancelComment3.onclick = function(e) {
            commoncommentblog3.classList.remove('open')
        }

        showCommentPageNews.onclick = function(e) {
            this.style.display = 'none'
            hideCommentPageNews.style.display = 'block'
        }

        hideCommentPageNews.onclick = function(e) {
            this.style.display = 'none'
            showCommentPageNews.style.display = 'block'
        }  
    }
}


export default handleActionOther