console.log('file has been loaded')

const slideTimeout = 5000

slideshow()

function slideshow() {
    // is this a modal? If yes play
    updateSlide()
}

function updateSlide() {
    setImgFullscreen()
    setTimeout(nextSlide, slideTimeout)
}

function nextSlide() {
    // Get all navigation buttons of a modal
    var btns = document.querySelectorAll(".QTFfk")
    for (btn of btns) {
        if (btn.title === "Next") {
            btn.click()
            updateSlide()
            return
        }
    }
    document.exitFullscreen()
}


function setImgFullscreen() {
    document.querySelectorAll('.ReactModal__Content .oCCRx')[1].requestFullscreen()
}