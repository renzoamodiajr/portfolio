$(document).ready(function(){
    $('#front-end-projs .owl-carousel').owlCarousel({
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




    $('#personal-projs .owl-carousel').owlCarousel({
        margin: 10,
        items:1,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        autoplayHoverPause: true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items:2,
                loop: false,
            },
            1025:{
                items:1
            }
        }
    });


});