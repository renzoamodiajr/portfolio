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




    $('.first-proj-prev .owl-carousel').owlCarousel({
        margin: 10,
        items:1,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        autoplayHoverPause: true,
        nav:true,
        dots:false
    });

    $('.second-proj-prev .owl-carousel').owlCarousel({
        margin: 10,
        items:1,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        autoplayHoverPause: true,
        nav:true,
        dots:false
    });

});