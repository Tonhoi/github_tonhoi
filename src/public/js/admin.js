

const app = {
    closeOpenCategory: function() {
        var adminca = document.querySelector(".admin-nav__common")
        var text1 = document.querySelector('.admin-category')
        var text = document.querySelector('.icon-bars')
        var textCategory = document.querySelectorAll('.only-category')

        text.onclick = function(e) {
            textCategory.forEach((textCategory) => {
                textCategory.classList.toggle('ml-12')
            })
            adminca.classList.toggle('open')
            text1.classList.toggle('open')
            document.querySelector('.form__user-common').classList.toggle('open')
        }
        
    },

    // full screen
    handleCategory: function() {
        var gan = 0;
        var elem = document.querySelectorAll(".icon-alt");
        var fullScreen = document.querySelector('.adminheader')
        var subMenu = document.querySelectorAll('.js-admin-category__link')

        elem.onclick = function(e) {
            gan++;
            if (fullScreen.requestFullscreen) {
                fullScreen.requestFullscreen();
            } else if (fullScreen.webkitRequestFullscreen) { /* Safari */
                fullScreen.webkitRequestFullscreen();
            } else if (fullScreen.msRequestFullscreen) { /* IE11 */
                fullScreen.msRequestFullscreen();
            }

            if (gan === 2) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) { /* Safari */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE11 */
                    document.msExitFullscreen();
                }
                gan = 0
            }
        }
        var dem = 0;
        
        // submenu
        var submenu = document.querySelectorAll('.sub-menu__list')
        var iconLeft = document.querySelectorAll('.icon__arrow-left')
        var iconRight = document.querySelectorAll('.icon__arrow-down')

        subMenu.forEach((subMenu, index) => {
            var text = submenu[index]
            var iconleft = iconLeft[index]
            var iconright = iconRight[index]
            subMenu.onclick = function(e) {
                iconleft.classList.toggle('open')
                iconright.classList.toggle('open')
                text.style.display = "block"

                // bugs
                if (dem === 2 && text.style.display === "block") {
                    text.style.display = "none"
                    dem = 0
                }
                console.log(dem)
                dem++;
            }
        })
    },

    addUser: function() {
        var layoutUser = document.querySelector('.layout-user')
        var addNewUser = document.querySelector('.add__new-user')
        
        var modelContainer = document.querySelector('.model__container')
        var btnCloseUser = document.querySelector('.btn-close__user')
        var formBtnCancel = document.querySelector('.form-btn__cancel')

        addNewUser.onclick = () => {
            layoutUser.classList.add('open')
            modelContainer.classList.add('open')
        }
        btnCloseUser.onclick = () => {
            layoutUser.classList.remove('open')
            modelContainer.classList.remove('open')
        }

        formBtnCancel.onclick = () => {
            layoutUser.classList.remove('open')
            modelContainer.classList.remove('open')
        }
    },
    start: function() {
        this.closeOpenCategory()
        this.handleCategory()
        this.addUser()
    }
}

app.start()
