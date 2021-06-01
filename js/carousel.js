$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin: 10,
        // autoplay: true,
        // autoplayTimeout: 3000,
        // rewind: true,
        // autoplayHoverPause: true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });


});