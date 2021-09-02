console.log('file has been loaded')

let timeoutID = slideshow() 

function slideshow() {
    btns = document.querySelectorAll(".QTFfk")
    if (!btns) {
        console.log("Error: modal controls Next & Previous not found")
    }
    imgFullscreen()
    return nextSlide()
}

function nextSlide() {
    btns[1].click()
    imgFullscreen()
    return setTimeout(nextSlide(), 5000)
}

function imgFullscreen() {
    document.querySelectorAll('.ReactModal__Content .oCCRx')[1].requestFullscreen()
}