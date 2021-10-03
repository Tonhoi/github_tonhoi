

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
        var elem = document.querySelector(".icon-alt");
        var fullScreen = document.querySelector('.adminheader')
        var subMenu = document.querySelector('.js-admin-category__link')

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

        subMenu.onclick = function(e) {
            dem++;
            document.querySelector('.icon__arrow-left').classList.toggle('open')
            document.querySelector('.icon__arrow-down').classList.toggle('open')
            document.querySelector('.sub-menu__list').style.display = "block"
            if (dem === 2) {
                document.querySelector('.sub-menu__list').style.display = "none"
                dem = 0
            } 
        }
    },
    start: function() {
        this.closeOpenCategory()
        this.handleCategory()
    }
}

app.start()

