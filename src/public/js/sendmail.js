function text() {
    const contactForm = document.querySelector('.contact-form')
    
    let phone = document.querySelector('#phone')
    let email = document.querySelector('#email')
    let name = document.querySelector('#name')
    let subject = document.querySelector('#subject')
    let description = document.querySelector('#w3review')
    
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault()
    
        let formData = {
            phone: phone.value,
            name: name.value,
            email: email.value,
            subject: subject.value,
            description: description.value
        }

        console.log(formData)
    
        let xhr = new XMLHttpRequest()
        xhr.open('post', '/sendmail')
        xhr.setRequestHeader('content-type', 'application/json')
        // console.log(xhr.responseText)
        xhr.onload = function() {
            // console.log(xhr.responseText)
            if(xhr.responseText === 'success') {
                alert('Bạn đã gửi thành công!!, chúng tôi sẽ trả lời sớm nhất có thể')
                phone.value = ''
                name.value = ''
                email.value = ''
                subject.value = ''
                description.value = ''
            }else {
                alert('Bạn gửi không thành công!!, vui lòng kiểm tra lại thông tin')
            }
        }
        xhr.send(JSON.stringify(formData))
    })
}

text()

