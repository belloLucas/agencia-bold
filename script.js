/* Mobile menu */

var menuBtn = document.querySelector(".items-menu-mobile i");

menuBtn.addEventListener("click", ()=>{

    let itemsMenu = document.querySelector(".mobile-menu")

    if(itemsMenu.classList.contains("show")){

        itemsMenu.classList.remove("show")

        itemsMenu.classList.add("hide")
    }
    
    else{
        itemsMenu.classList.add("show")

        itemsMenu.classList.remove("hide")
    }

});

/* Fim do menu mobile */


/* Slider depoimentos */

$('.container-slider').slick({
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

/* Fim do Slider de depoimentos */