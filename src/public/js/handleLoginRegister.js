import {
    $,
    $$,
    login,
    register,
    btnClose,
    ModalRegister,
    modallogin,
    overlay,
    noAccount,
    backformlogin
} from './define.js'

function HandelloginRegister() {

login.forEach(function(login) {
    login.onclick = function(e) {
    modallogin.classList.add("show");
    overlay.style.display = "block";
    }
})

register.forEach(function(register) {
    register.onclick = function(e) {
    ModalRegister.classList.add("show");
    overlay.style.display = "block";
    }
})

btnClose.forEach(function(btnclose, index) {
    btnclose.onclick = function(e) {
    modallogin.classList.remove("show");
    ModalRegister.classList.remove("show");
    overlay.style.display = "none";
    }
})

// overlay
overlay.addEventListener("click", function () {
    modallogin.classList.remove("show");
    ModalRegister.classList.remove("show");
    overlay.style.display = "none";
});

noAccount.addEventListener("click", function () {
    // e.preventDefault()
    modallogin.classList.remove("show");
    ModalRegister.classList.add("show");
});

backformlogin.addEventListener("click", function () {
    ModalRegister.classList.remove("show");
    modallogin.classList.add("show");
});
};

export default HandelloginRegister;