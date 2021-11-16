function handleForm() {
    handleFormRegister()
    handleFormLogin()
}

handleForm()

function handleFormRegister() {
    var $ = document.querySelector.bind(document)
    var $$ = document.querySelectorAll.bind(document)


    var btnRegister = $('.btn-register')
    var formRegister = document.getElementById('form1')
    var setHeightForm = $('.form-login')
    
    var formGroups = $$('.form-group'),
        form0 = formGroups[0],
        form1 = formGroups[1],
        form2 = formGroups[2],
        form3 = formGroups[3],
        form4 = formGroups[4],
        form5 = formGroups[5],
        form6 = formGroups[6];
    var forminputFullname = $('input[name = "fullname"]');
    var forminputEmail = $('input[name = "email"]');
    var forminputUsername = $('input[name = "username"]');
    var forminputPassword = $('input[name = "password"]');
    var forminputConfirmPassword = $('input[name = "password2"]');

    var regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
    var checkCharacters = /[!@#$%^&*(),.?":{}|<>]/
    var check = false
    var check1 = false
    var check2 = false
    var check3 = false
    var check4 = false

    var message =  $$('.form-message'),
        mes = message[0]
        mes1 = message[1]
        mes2 = message[2]
        mes3 = message[3]
        mes4 = message[4]

    formRegister.onsubmit = (e) => {
        e.preventDefault()
    }

    forminputFullname.onblur = (e) => {
        if(forminputFullname.value === '') {
            mes.innerHTML = 'Vui lòng nhập trường này'
            form0.classList.add('valid')
            return
        }else
        if ((forminputFullname.value.length <= 5) || (forminputFullname.value.length > 19)) {
            mes.innerHTML = 'Họ và tên phải từ 6 đến 18 ký tự'
            form0.classList.add('valid')
            return
        }else
        if(checkCharacters.test(forminputFullname.value)) {
            mes.innerHTML = 'Họ và tên không được chứa kí tự đặc biệt'
            form0.classList.add('valid')
        }else {
            mes.innerHTML = ''
            form0.classList.remove('valid')
            check = true
            return
        }
    }

    forminputEmail.onblur = (e) => {
        if(forminputEmail.value === '') {
            mes1.innerHTML = 'Vui lòng nhập trường này'
            form1.classList.add('valid')
            return
        }else
        if (regex.test(forminputEmail.value)) {
            mes1.innerHTML = ''
            form1.classList.remove('valid')
            check1 = true
            return
        } else {
            mes1.innerHTML = 'email không hợp lệ'
            form1.classList.add('valid')
            return
        }
    }

    forminputUsername.onblur = (e) => {
        if(forminputUsername.value === '') {
            mes2.innerHTML = 'Vui lòng nhập trường này'
            form2.classList.add('valid')
            return
        }else
        if (forminputUsername.value.length < 4) {
            mes2.innerHTML = 'Tên đăng nhập phải từ 5 kí tự trở lên'
            form2.classList.add('valid')
            return
        }else
        if(checkCharacters.test(forminputUsername.value)) {
            mes2.innerHTML = 'Tên đăng nhập không được có kí tự đặc biệt'
            form2.classList.add('valid')
        } else {
            mes2.innerHTML = ''
            form2.classList.remove('valid')
            check2 = true
            return
        }
    }

    forminputPassword.onblur = (e) => {
        if(forminputPassword.value === '') {
            mes3.innerHTML = 'Vui lòng nhập trường này'
            form3.classList.add('valid')
            return
        }else
        if (forminputPassword.value.length < 4) {
            mes3.innerHTML = 'Mật khẩu phải từ 6 kí tự trở lên'
            form3.classList.add('valid')
            return
        }else
        if(checkCharacters.test(forminputPassword.value)) {
            mes3.innerHTML = 'Mật khẩu không được chứa kí tự đặc biệt'
            form3.classList.add('valid')
        } else {
            mes3.innerHTML = ''
            form3.classList.remove('valid')
            check3 = true
            return
        }
    }

    forminputConfirmPassword.onblur = (e) => {
        if(forminputConfirmPassword.value === '') {
            mes4.innerHTML = 'Vui lòng nhập trường này'
            form4.classList.add('valid')
            return
        }else
        if (forminputConfirmPassword.value.length < 4) {
            mes4.innerHTML = 'Mật khẩu phải từ 6 kí tự trở lên'
            form4.classList.add('valid')
            return
        }else
        if (forminputPassword.value !== forminputConfirmPassword.value) {
            mes4.innerHTML = '2 mật khẩu không trùng nhau'
            form4.classList.add('valid')
            return
        }
        else {
            mes4.innerHTML = ''
            form4.classList.remove('valid')
            check4 = true
            return
        }
    }
    

    // define
    var checkContainer = $$('.check-container')
        checkContainer1 = checkContainer[1]
    var loadWrapp = $$('.load-wrapp')
        loadWrapp1 = loadWrapp[1]
    var showNotification = document.querySelector('.show-notification')

    btnRegister.onclick = (e) => {

        // nếu hết validate
        if (check === true && check1 === true && check2 === true && check3 === true && check4 === true)
        {          

            var jsBtnRegisterP = document.querySelector('.js-btn-register p')
            
            setHeightForm.style.height = '650px'
            jsBtnRegisterP.style.display = 'none'
            loadWrapp[0].style.display = 'block'

            showNotification.style.display = 'none'
            showNotification.classList.remove('show-notification--failed')
            showNotification.classList.add('show-notification--success')
            setTimeout(function() {
                loadWrapp[0].style.display = 'none'
                checkContainer[0].style.display = 'block'
                showNotification.style.display = 'block'
                showNotification.innerHTML = 'Bạn đã đăng kí thành công'

                setTimeout(function() {
                    formRegister.submit()
                }, 2000)
            }, 3000)
        }

        // Nếu còn validate

        else if (check === false || check1 === false || check2 === false || check3 === false || check4 === false)
        {
            showNotification.style.display = 'block'
            showNotification.classList.remove('show-notification--success')
            showNotification.classList.add('show-notification--failed')
            showNotification.innerHTML = 'vui lòng nhập đầy đủ thông tin'
        }
        
    }
}

function handleFormLogin() {
    var formLogin = document.getElementById('form2')
    var btnRegister = document.querySelector('.js-btn-login')
    
    var btnRegisterP = document.querySelector('.js-btn-login p')
    
    formLogin.onsubmit = (e) => {
        e.preventDefault()
    }
    

    btnRegister.onclick = (e) => {
        btnRegisterP.style.display = 'none'
        loadWrapp1.style.display = 'block'

        setTimeout(function() {
            loadWrapp1.style.display = 'none'
            checkContainer1.style.display = 'block'
            setTimeout(function() {
                formLogin.submit()
            }, 2000)
        }, 3200)
    }
}