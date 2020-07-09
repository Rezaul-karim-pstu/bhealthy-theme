$(document).ready(function () {
// ============Fixed Navbar==========================
    $(window).scroll(function(){
        var ourwindow = $(this).scrollTop();

        if(ourwindow>200){
            $('body').addClass('fixed-nav');
        } else{
            $('body').removeClass('fixed-nav');
        }
    });

// =================nice scroll======================
    $("body").niceScroll({
        cursorcolor:		"#F5527B",
        cursorwidth: 		"12px",
        cursorborder: 		"0px solid #000",
        autohidemode: 		true,
        hidecursordelay: 	400,
        cursorfixedheight: 	false,
        cursorminheight: 	20,
        enablekeyboard: 	true,
        horizrailenabled: 	true,
        smoothscroll: 		true,
        iframeautoresize: 	true,
        touchbehavior: 		false,
        zindex: 999
        });

    // masonry
    $('.portfolio-area').masonry();

    // animate css
    $(".single-portfolio").hover(function(){
        $(".single-portfolio .portfolio-hover h2").removeClass("animate__animated animate__fadeInUp"),
        $(this).find(".portfolio-hover h2").addClass("animate__animated animate__fadeInUp"),
        
        $(".single-portfolio .portfolio-hover p").removeClass("animate__animated animate__slideInUp"),
        $(this).find(".portfolio-hover p").addClass("animate__animated animate__slideInUp")
    });


        // off_canvous_menu js
        $(".off_canvous_toggler").on("click",function(){
            $(".off_canvous_menu, .off_canvous_overlay").addClass("off_canvous_active");
        });
    
        $(".cross_icon, .off_canvous_overlay").on("click",function(){
            $(".off_canvous_menu, .off_canvous_overlay").removeClass("off_canvous_active");
        });

});