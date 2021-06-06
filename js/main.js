$(document).ready(function(){
    $("#getCVbtn").on('click', function(){
        $(this).css({"transform":"translateY(4px)","box-shadow":"0 5px #99999985"}).attr("target","_blank").html('<i class="fas fa-spinner fa-spin"></i> PREPARING...');

        setTimeout(() => {
            window.open("pdf/UPDATED RESUME - 3_28_21.pdf", "_blank");


            $(this).css({"transform":"translateY(0)", "box-shadow":"0 9px #99999985"}).html('<i class="fas fa-download"></i><span> GET RESUME</span>');
        }, 1500);

    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#backToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
})