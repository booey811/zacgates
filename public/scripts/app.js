const slides = $(".item.slide")

let counter = 0
let activeSlide = slides[counter]

$(activeSlide).addClass('show')



$("#next-image").click(function (){
    $(activeSlide).removeClass("show")
    if (counter == slides.length - 1){
        console.log("reached end")
        counter = 0
    } else {
        counter = counter + 1
    }
    activeSlide = slides[counter]
    $(slides[counter]).addClass("show")
})

$("#prev-image").click(function (){
    $(activeSlide).removeClass("show")
    if (counter == 0){
        console.log("reached end")
        counter = slides.length - 1
    } else {
        counter = counter -1
    }
    activeSlide = slides[counter]
    $(slides[counter]).addClass("show")
})