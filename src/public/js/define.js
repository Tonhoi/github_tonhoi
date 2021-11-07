// define $ and $$
export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

export const slideShow = $('.slidershow');
export const lengh = $$('.preSlide > div').length;
export const moveSlide = $('.preSlide');
export const preslide = $('.btn_news i:first-child');
export const nextslide = $('.btn_news i:last-child');
export const contentBlockList = $('.content__block-list-1')



// handle login register
// ----------------
// login register
export const login = $$('.js-login');
export const register = $$('.js-register')

// btn close
export const btnClose = $$(".btn-close");

// modal register and login
export const ModalRegister = $(".modal-register");
export const modallogin = $(".modal-login");

// overlay
export const overlay = $(".overlay-form-login-register");

export const noAccount = $(".footer__form-login-link");

export const backformlogin = $(".back-form-login");


// -----------------------------


// handle animation
export const textproduct = $$('.product__name');
export const productName1 = textproduct[0];
export const productName2 = textproduct[1];
export const productName3 = textproduct[2];
export const str = $$('.product__name-line-text');
export const line1 = str[0];
export const line2 = str[1];
export const line3 = str[2];




// comments

export const commentBlogInput = $$('.Comment_blog-tittle-input textarea')
export const CommentBoxActionWrapper = $$('.CommentBox_actionWrapper')
export const btnCloseComment = $('.btn-clos__comments')
export const overlayComment = $('.js-overlay')

export const hideAndShowComments = $('.Comment_reactionsCount')
export const ReplyToComment = $('.Comment_commentContent-text-other')
export const reply1 = $('.js-Comment_replyComment-1')
export const commoncommentblog2 = $('.common-comment__blog-2')
export const btnCancelComment2 = $('.js-CommentBox_cancel-2')
export const reply2 = $('.js-Comment-reply-Comment-2')
export const commoncommentblog3 = $('.common-comment__blog-3')
export const btnCancelComment3 = $('.js-CommentBox_cancel-3')


// xem câu trả lời
export const showCommentPageNews = $('.Comment_reactionsCount p:first-child')
export const hideCommentPageNews = $('.Comment_reactionsCount p:last-child')


// acctive like
export const activeLike = $$('.btn-Comment_like')


export const maxWidthImg = $$('.container-post__desc img')




