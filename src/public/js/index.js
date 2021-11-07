import HandelloginRegister from './handleLoginRegister.js'
import handleSlide from './handleSlide.js'
import handleAnimation from './handleAnimation.js'
import handleActionOther from './handleActionOther.js'

var app = {
  start: function() {
    HandelloginRegister()
    handleSlide()
    handleActionOther()
    window.onscroll = function () {
      handleAnimation()
    };
  }
}


app.start()