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


