$(function () {

    var index = 0;
    var total = $('.slides').length;

    var nextSlide = function (direction) {
        $('.active').css('z-index', '3').animate({
            left: direction
        }, 'slow', function () {
            $('.slides').css({
                'left': '0%',
                'z-index': '1'
            });
        });
    };

    var nextSlide2 = function () {
        $(".slides").removeClass("active");
        $(".slides").eq(index).addClass("active").css('z-index', '2');
    };

    $('.prev-button').on('click', function () {
        nextSlide('-100%');
        nextSlide2(index = (index - 1) % total);
    });

    $('.next-button').on('click', function () {
        nextSlide('100%');
        nextSlide2(index = (index + 1) % total);
    });

});