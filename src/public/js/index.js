import handleSlide from './handleSlide.js'
import handleAnimation from './handleAnimation.js'
import handleActionOther from './handleActionOther.js'

var app = {
  start: function() {
    handleSlide()
    handleActionOther()
    window.onscroll = function () {
      handleAnimation()
    };
  }
}


app.start()