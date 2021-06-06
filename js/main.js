$(document).ready(function(){
    $("#getCVbtn").on('click', function(){
        $(this).css({
            "transform":"translateY(4px)", 
            "box-shadow":"0 5px #99999985"
        });
        $(this).attr("target","_blank");
        setTimeout(() => {
            window.open("pdf/UPDATED RESUME - 3_28_21.pdf", "_blank");


            $(this).css({
                "transform":"translateY(0)", 
                "box-shadow":"0 9px #99999985"
            });
        }, 1500);
    });
})