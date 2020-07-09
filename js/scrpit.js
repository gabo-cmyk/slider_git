$(function () {
    var slides = $('.slides');

    var nextSlide = function(direction) {
        $('.slides').last().animate({
            left: direction
        }, 'slow', function () {
            $('.slides').first().before($('.slides').last());
            $('.slides').css('left', '0%');
        });
    };

    $('.prev-button').on('click', function () {
        nextSlide('-100%');
    });

    $('.next-button').on('click', function () {
        nextSlide('100%');
    });
});
