// get elements from html
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
// get block with slides
const mainSlide = document.querySelector('.main-slide')
// get number of all divs in main-slide block
const slidesCount = mainSlide.querySelectorAll('div').length
// get 'container'
const container = document.querySelector('.container')

// create variable for active slide
let activeSlideIndex = 0

// get property 'top' of the 'sidebar'
// sidebar.style.top = `-300vh`
//sidebar.style.top = '-${3 * 100}'
sidebar.style.top = `-${(slidesCount-1) * 100}vh`

// create event for up-button and down-button
upBtn.addEventListener('click', () => {
  changeSlide('up')
})
downBtn.addEventListener('click', () => {
  changeSlide('down')    
})

// input parameter 'direction' is up or down line
function changeSlide(direction) {
    //condition if the button 'up'
    if (direction === 'up') {
        activeSlideIndex++
        // add condition because number of slides is limited
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }
    } else
    // condition if the click was on down button
    if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount -1
        }
    }

    const height = container.clientHeight
     
    // animation for images
    //mainSlide.style.transform = `translateY(-2000px)`
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    // animation for the left part(sidebar)
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
} 