//PC Screen JS START

$(window).scrollTop(0);
$('circle').attr('stroke-dashoffset', '315');
var browser_width = $(window).width();

while ((browser_width < 1610) && (browser_width > 1000)) {
    var browser_width = $(window).width();
    alert('To Get Best Experience of Our Website Please Go FullScreen Or Open In Mobile Window');
}

$(window).scroll(
    function () {
        var scroll_value = $(window).scrollTop();
        if ((scroll_value < 20)) {
            //Page 1 JS
            $('circle').attr('stroke-dashoffset', '315');
            for (var j = 0; j <= 6; j++) {
                if (j == 0) {
                    $('.rounds').eq(j).css(
                        {
                            'border-color': 'rgba(255, 255, 255, 1)',
                            'background-color': 'rgb(14, 127, 226)'
                        }
                    )
                }
                else {
                    $('.rounds').eq(j).css(
                        {
                            'border-color': 'rgba(255, 255, 255, 0.5)',
                            'background-color': 'rgba(255, 255, 255, 0.5)'
                        }
                    )
                }
            }
            $('.bg_change1').css('background-color', 'rgb(104, 51, 155)');
            $('.bg_change2').css('background-color', 'rgb(214, 213, 213)');
            $('.downloads_slide_1').css('transform', 'translateY(0px)');
            $('.awards_img').attr('src', 'images/world-communication-awards-for-best-digital-experience.png');
            $('.awards_img').css('opacity', '1');
            $('.abc_cont').css('transform', 'translateY(0px)');
            $('.best_slide_1').css('transform', 'translateY(0px)');
            $('.content_bottom_1_1').css('transform', 'translateY(0px)');
            $('.mobile_pic_slide1').css('transform', 'translateY(0%)');
            $('.mobile_pic_slide2_img1').css('bottom', '-100%');
            $('.mobile_pic_slide2_img2').css('top', '-100%');
        }
        else if ((scroll_value > 20) && (scroll_value < 80)) {
            //Page 2 JS
            $('circle').attr('stroke-dashoffset', '285');
            for (var j = 0; j <= 6; j++) {
                if (j <= 1) {
                    $('.rounds').eq(j).css(
                        {
                            'border-color': 'rgba(255, 255, 255, 1)',
                            'background-color': 'rgb(14, 127, 226)'
                        }
                    )
                }
                else {
                    $('.rounds').eq(j).css(
                        {
                            'border-color': 'rgba(255, 255, 255, 0.5)',
                            'background-color': 'rgba(255, 255, 255, 0.5)'
                        }
                    )
                }
            }
            
            $('.bg_change1').css('background-color', 'rgb(62, 73, 162)');
            $('.bg_change2').css('background-color', 'rgb(21, 38, 166)');
            $('.downloads_slide_1').css('transform', 'translateY(-250px)');
            $('.awards_img').css('opacity', '0');
            $('.abc_cont').css('transform', 'translateY(-100px)');
            $('.best_slide_1').css('transform', 'translateY(-60px)');
            $('.content_bottom_1_1').css('transform', 'translateY(-30px)');
            $('.mobile_pic_slide1').css('transform', 'translateY(100%)');
            $('.mobile_pic_slide2_img1').css('bottom', '0%');
            $('.mobile_pic_slide2_img2').css('top', '-10%');
            $('.mobile_pic_slide3_img1').css('bottom', '-100%');
            $('.mobile_pic_slide3_img2').css('top', '-100%');
        }

        else if ((scroll_value > 80) && (scroll_value < 140)) {
            //Page 3 JS
            $('circle').attr('stroke-dashoffset', '247');
            for (var j = 0; j <= 6; j++) {
                if (j <= 2) {
                    $('.rounds').eq(j).css(
                        {
                            'border-color': 'rgba(255, 255, 255, 1)',
                            'background-color': 'rgb(14, 127, 226)'
                        }
                    )
                }
                else {
                    $('.rounds').eq(j).css(
                        {
                            'border-color': 'rgba(255, 255, 255, 0.5)',
                            'background-color': 'rgba(255, 255, 255, 0.5)'
                        }
                    )
                }
            }
            
            $('.bg_change1').css('background-color', 'rgb(13, 19, 44)');
            $('.bg_change2').css('background-color', 'rgb(29, 29, 88)');
            $('.downloads_slide_1').css('transform', 'translateY(-500px)');
            $('.abc_cont').css('transform', 'translateY(-200px)');
            $('.best_slide_1').css('transform', 'translateY(-120px)');
            $('.content_bottom_1_1').css('transform', 'translateY(-65px)');
            $('.mobile_pic_slide2_img1').css('bottom', '-100%');
            $('.mobile_pic_slide2_img2').css('top', '-100%');
            $('.mobile_pic_slide3_img1').css('bottom', '-5%');
            $('.mobile_pic_slide3_img2').css('top', '-10%');
            $('.mobile_pic_slide4_img1').css(
                {
                    'bottom': '-100%',
                    'left': '0%'
                }
            );
            $('.mobile_pic_slide4_img2').css(
                {
                    'top': '-100%',
                    'right': '0%'
                }
            );
            $('.mobile_pic_slide4_img3').css(
                {
                    'top': '-100%',
                    'right': '0%'
                }
            );
            $('.mobile_pic_slide4_img4').css(
                {
                    'top': '-100%',
                    'right': '0%'
                }
            );
            $('.mobile_pic_slide4_img5').css(
                {
                    'bottom': '-100%',
                    'right': '0%'
                }
            );
        }
        else if ((scroll_value > 140) && (scroll_value < 200)) {
            //Page 4 JS
            $('circle').attr('stroke-dashoffset', '207');
            for (var j = 0; j <= 6; j++) {
                if (j <= 3) {
                    $('.rounds').eq(j).css(
                        {
                            'border-color': 'rgba(255, 255, 255, 1)',
                            'background-color': 'rgb(14, 127, 226)'
                        }
                    )
                }
                else {
                    $('.rounds').eq(j).css(
                        {
                            'border-color': 'rgba(255, 255, 255, 0.5)',
                            'background-color': 'rgba(255, 255, 255, 0.5)'
                        }
                    )
                }
            }
            
            $('.bg_change1').css('background-color', 'rgb(26, 36, 74)');
            $('.bg_change2').css('background-color', 'rgb(13, 19, 44)');
            $('.downloads_slide_1').css('transform', 'translateY(-750px)');
            $('.abc_cont').css('transform', 'translateY(-290px)');
            $('.best_slide_1').css('transform', 'translateY(-120px)');
            $('.content_bottom_1_1').css('transform', 'translateY(-100px)');
            $('.mobile_pic_slide3_img1').css('bottom', '-100%');
            $('.mobile_pic_slide3_img2').css('top', '-100%');
            $('.mobile_pic_slide4_img1').css(
                {
                    'bottom': '0%',
                    'left': '18%'
                }
            );
            $('.mobile_pic_slide4_img2').css(
                {
                    'top': '10%',
                    'right': '5%'
                }
            );
            $('.mobile_pic_slide4_img3').css(
                {
                    'top': '0%',
                    'right': '-2%'
                }
            );
            $('.mobile_pic_slide4_img4').css(
                {
                    'top': '-12%',
                    'right': '2%'
                }
            );
            $('.mobile_pic_slide4_img5').css(
                {
                    'bottom': '-10%',
                    'right': '-5%'
                }
            );

            $('.mobile_pic_slide5_img1').css(
                {
                    'bottom': '-100%',
                    'left': '0%'
                }
            );
            $('.mobile_pic_slide5_img2').css(
                {
                    'bottom': '-100%',
                    'left': '0%'
                }
            );
            $('.mobile_pic_slide5_img3').css(
                {
                    'top': '-100%',
                    'right': '0%'
                }
            );
            $('.mobile_pic_slide5_img4').css(
                {
                    'top': '-100%',
                    'left': '0%'
                }
            );
            $('.mobile_pic_slide5_img5').css(
                {
                    'top': '-100%',
                    'left': '0%'
                }
            );
        }

        else if ((scroll_value > 200) && (scroll_value < 260)) {
            //Page 5 JS
            $('circle').attr('stroke-dashoffset', '173');
            for (var j = 0; j <= 6; j++) {
                if (j <= 4) {
                    $('.rounds').eq(j).css(
                        {
                            'border-color': 'rgba(255, 255, 255, 1)',
                            'background-color': 'rgb(14, 127, 226)'
                        }
                    )
                }
                else {
                    $('.rounds').eq(j).css(
                        {
                            'border-color': 'rgba(255, 255, 255, 0.5)',
                            'background-color': 'rgba(255, 255, 255, 0.5)'
                        }
                    )
                }
            }
            
            $('.bg_change1').css('background-color', 'rgb(27, 80, 144)');
            $('.bg_change2').css('background-color', 'rgb(29, 190, 218)');
            $('.downloads_slide_1').css('transform', 'translateY(-1030px)');
            $('.abc_cont').css('transform', 'translateY(-360px)');
            $('.best_slide_1').css('transform', 'translateY(-180px)');
            $('.content_bottom_1_1').css('transform', 'translateY(-130px)');
            $('.mobile_pic_slide4_img1').css(
                {
                    'bottom': '-100%',
                    'left': '0%'
                }
            );
            $('.mobile_pic_slide4_img2').css(
                {
                    'top': '-100%',
                    'right': '0%'
                }
            );
            $('.mobile_pic_slide4_img3').css(
                {
                    'top': '-100%',
                    'right': '0%'
                }
            );
            $('.mobile_pic_slide4_img4').css(
                {
                    'top': '-100%',
                    'right': '0%'
                }
            );
            $('.mobile_pic_slide4_img5').css(
                {
                    'bottom': '-100%',
                    'right': '0%'
                }
            );

            $('.mobile_pic_slide5_img1').css(
                {
                    'bottom': '0%',
                    'left': '18%'
                }
            );
            $('.mobile_pic_slide5_img2').css(
                {
                    'bottom': '-10%',
                    'left': '40%'
                }
            );
            $('.mobile_pic_slide5_img3').css(
                {
                    'top': '30%',
                    'right': '0%'
                }
            );
            $('.mobile_pic_slide5_img4').css(
                {
                    'top': '-5%',
                    'left': '40%'
                }
            );
            $('.mobile_pic_slide5_img5').css(
                {
                    'top': '0%',
                    'left': '20%'
                }
            );
            $('.mobile_pic_slide6_img1').css(
                {
                    'bottom': '-100%',
                    'left': '0%'
                }
            );
        }

        else if ((scroll_value > 260) && (scroll_value < 320)) {
            //Page 6 JS
            $('circle').attr('stroke-dashoffset', '140');
            for (var j = 0; j <= 6; j++) {
                if (j <= 5) {
                    $('.rounds').eq(j).css(
                        {
                            'border-color': 'rgba(255, 255, 255, 1)',
                            'background-color': 'rgb(14, 127, 226)'
                        }
                    )
                }
                else {
                    $('.rounds').eq(j).css(
                        {
                            'border-color': 'rgba(255, 255, 255, 0.5)',
                            'background-color': 'rgba(255, 255, 255, 0.5)'
                        }
                    )
                }
            }
            
            $('.bg_change1').css('background-color', 'rgb(21, 38, 166)');
            $('.bg_change2').css('background-color', 'rgb(214, 213, 213)');
            $('.downloads_slide_1').css('transform', 'translateY(-1280px)');
            $('.abc_cont').css('transform', 'translateY(-440px)');
            $('.best_slide_1').css('transform', 'translateY(-240px)');
            $('.awards_img').css('opacity', '0');
            $('.content_bottom_1_1').css('transform', 'translateY(-165px)');
            $('.mobile_pic_slide5_img1').css(
                {
                    'bottom': '-100%',
                    'left': '0%'
                }
            );
            $('.mobile_pic_slide5_img2').css(
                {
                    'bottom': '-100%',
                    'left': '0%'
                }
            );
            $('.mobile_pic_slide5_img3').css(
                {
                    'top': '-100%',
                    'right': '0%'
                }
            );
            $('.mobile_pic_slide5_img4').css(
                {
                    'top': '-100%',
                    'left': '0%'
                }
            );
            $('.mobile_pic_slide5_img5').css(
                {
                    'top': '-100%',
                    'left': '0%'
                }
            );
            $('.mobile_pic_slide6_img1').css(
                {
                    'bottom': '0%',
                    'left': '0%'
                }
            );
            $('.mobile_pic_slide7_img1').css(
                {
                    'bottom': '-100%',
                    'left': '30%'
                }
            );
            $('.mobile_pic_slide7_img2').css(
                {
                    'bottom': '-100%',
                    'left': '60%'
                }
            );
        }
        else if(scroll_value > 320){
            //Page 7 JS
            $('circle').attr('stroke-dashoffset', '94');
            for (var j = 0; j <= 6; j++) {
                if (j <= 6) {
                    $('.rounds').eq(j).css(
                        {
                            'border-color': 'rgba(255, 255, 255, 1)',
                            'background-color': 'rgb(14, 127, 226)'
                        }
                    )
                }
                else {
                    $('.rounds').eq(j).css(
                        {
                            'border-color': 'rgba(255, 255, 255, 0.5)',
                            'background-color': 'rgba(255, 255, 255, 0.5)'
                        }
                    )
                }
            }
            
            $('.bg_change1').css('background-color', 'rgb(44, 109, 50)');
            $('.bg_change2').css('background-color', 'rgb(88, 190, 98)');
            $('.downloads_slide_1').css('transform', 'translateY(-1540px)');
            $('.abc_cont').css('transform', 'translateY(-540px)');
            $('.awards_img').attr('src', 'images/mobile-app-of-the-year-by-entrepreneur.png');
            $('.awards_img').css('opacity', '1');
            $('.best_slide_1').css('transform', 'translateY(-300px)');
            $('.content_bottom_1_1').css('transform', 'translateY(-200px)');
            $('.mobile_pic_slide6_img1').css(
                {
                    'bottom': '-100%',
                    'left': '0%'
                }
            );
            $('.mobile_pic_slide7_img1').css(
                {
                    'bottom': '-10%',
                    'left': '30%'
                }
            );
            $('.mobile_pic_slide7_img2').css(
                {
                    'bottom': '-2%',
                    'left': '60%'
                }
            );
        }
        else{}

    }
);

$('.rounds').eq(0).click(
    function () {
        $(window).scrollTop(0)
    }
);
$('.rounds').eq(1).click(
    function () {
        $(window).scrollTop(30)
    }
);
$('.rounds').eq(2).click(
    function () {
        $(window).scrollTop(90)
    }
);
$('.rounds').eq(3).click(
    function () {
        $(window).scrollTop(150)
    }
);
$('.rounds').eq(4).click(
    function () {
        $(window).scrollTop(210)
    }
);
$('.rounds').eq(5).click(
    function () {
        $(window).scrollTop(270)
    }
);
$('.rounds').eq(6).click(
    function () {
        $(window).scrollTop(330)
    }
);

//PC Screen JS END

//Mobile Screen JS START

