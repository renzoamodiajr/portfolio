$(".scrl").click(function() {
    let target = $(this).attr("href");
    $('html,body').animate({
        scrollTop: $(target).offset().top
    }, 'slow');
});