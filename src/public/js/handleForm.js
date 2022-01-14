function handleForm(option) {
    var getRule = {}
    function validate(option, rule) {
        var getInput = document.querySelector(rule.select)
        var getFormMessage = getInput.parentElement.querySelector('.form-message')
        var checkValue
        var rules = getRule[rule.select]
        for (var i = 0; i < rules.length; i++) {
            checkValue = rules[i](getInput.value)
            if(checkValue) break
        }
        if(checkValue) {
            getFormMessage.innerHTML = checkValue
            getInput.parentElement.classList.add('valid')
        }else {
            getFormMessage.innerHTML = ''
            getInput.parentElement.classList.remove('valid')
        }
        return !checkValue
    }
    var getForm = document.querySelector(option.form)
    if(getForm) {
        getForm.onsubmit = (e) => {
            e.preventDefault()
            var check = true
            var checkValid
            option.rules.forEach((rule) => {
                checkValid = validate(option, rule)
                if (!checkValid) {
                    check = false
                }
            })
            if (checkValid) {
                getForm.submit()
            }

        }
        option.rules.forEach((rule) => {

            if (Array.isArray(getRule[rule.select])) {
                getRule[rule.select].push(rule.test)
            } else {
                getRule[rule.select] = [rule.test]
            }
            
            var getInput = document.querySelector(rule.select)
            if(getInput) {
                var getFormMessage = getInput.parentElement.querySelector('.form-message')
                getInput.onblur = (e) => {
                    validate(option, rule)
                }
                getInput.oninput = (e) => {
                    getFormMessage.innerHTML = ''
                    getInput.parentElement.classList.remove('valid')
                }
            }
        })
    }
}

handleForm.isRequired = (select, custumMessage) => {
    return {
        select: select,
        test: (value) => {
            return value.trim() ? undefined : custumMessage || 'Trường này không được để trống'
        }
    }
}

handleForm.isEmail = (select, custumMessage) => {
    return {
        select: select,
        test: (value) => {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : custumMessage || 'email không hợp lệ'
        }
    }
}

handleForm.minLength = (select, min, custumMessage) => {
    return {
        select: select,
        test: (value) => {
            return value.length >= min ? undefined : custumMessage || `Mật khẩu phải có ${min} kí tự`
        }
    }
}

handleForm.isConfirmed = (select, callback, custumMessage) => {
    return {
        select: select,
        test: (value) => {
            return value === callback() ? undefined : custumMessage || '2 mật khẩu không trùng khớp'
        }
    }
}

handleForm.isCharacter = (select, custumMessage) => {
    return {
        select: select,
        test: (value) => {
            var checkCharacters = /[!@#$%^&*(),.?":{}|<>]/
            return checkCharacters.test(value) ? custumMessage || 'không được chưa kí tự đặc biệt' : undefined
        }
    }
}