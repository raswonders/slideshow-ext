console.log('file has been loaded')

let timeoutID = slideshow() 

function slideshow() {
    var btns = document.querySelectorAll(".QTFfk")
    if (!btns) {
        console.log("Error: modal controls Next & Previous not found")
    }
    setImgFullscreen()
    return nextSlide()
}

function nextSlide() {
    for (btn of btns) {
        btn.title === "Next" ? btn.click() : document.exitFullscreen() 
    }
    setImgFullscreen()
    return setTimeout(nextSlide(), 5000)
}

function setImgFullscreen() {
    document.querySelectorAll('.ReactModal__Content .oCCRx')[1].requestFullscreen()
}