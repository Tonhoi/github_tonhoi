

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

    addUser: function() {
        var layoutUser = document.querySelector('.layout-user')
        var addNewUser = document.querySelector('.add__new-user')
        var modelContainer = document.querySelector('.model__container')
        var btnCloseUser = document.querySelector('.btn-close__user')
        var formBtnCancel = document.querySelector('.form-btn__cancel')

        if(layoutUser)
        {
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
    }
    },

    text: function() {
        const myChart = document.getElementById('myChart').getContext('2d');
        // Global Options
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';
    
        const massPopChart = new Chart(myChart, {
          type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
          data:{
            labels:['Tháng 1','Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11','Tháng 12'],
            datasets:[{
              label:'Lượt truy cập',
              data:[  
              617594, 
              381045,
              500000,
              435455,
              295162,
              395072,
              545434,
              590000,
              342424,
              524234,
              432131,
              531231,
              ],
              // backgroundColor:'green',
              backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 60, 53, 0.6)',
              'rgba(255, 70, 22, 0.6)',
              'rgba(252, 50, 188, 0.6)',
              'rgba(60, 104, 89, 0.6)',
              'rgba(102, 58, 20, 0.6)',
              'rgba(240, 102, 70, 0.6)',
              ],
              borderWidth:1,
              borderColor:'#777',
              hoverBorderWidth:3,
              hoverBorderColor:'#000'
            }]
          },
          options:{
            title:{
              display:true,
              text:'Lượt truy cập vào Website',
              fontSize:25
            },
            legend:{
              display:true,
              position:'right',
              labels:{
                fontColor:'#000'
              }
            },
            layout:{
              padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
              }
            },
            tooltips:{
              enabled:true
            }
          }
        });
    
    },
    activeCategory: function() {
        var currentHref = location.href
        var activeCate = document.querySelectorAll('.js-active-category')

        activeCate.forEach(activeCate => {
            if (activeCate.href === currentHref) {
                activeCate.className = 'admin-category__link active'
            }
        })
    },
    start: function() {
        this.activeCategory()
        this.closeOpenCategory()
        this.addUser()
        this.text()
    }
}

app.start()


