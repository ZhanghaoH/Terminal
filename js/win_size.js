    ;
    ! function($) {
        let w = $(window).width() < 1000 ? 1000 : $(window).width();
        let h = $(window).height();
        console.log(w + "----" + h);
        let hi = w * 9 / 16;
        console.log(hi);
        // $(".wrap").css({ "height": hi > h ? hi : h, "box-sizing": "border-box", });
        $(".wrap").css({ "height": hi, "box-sizing": "border-box", });
    }(jQuery);