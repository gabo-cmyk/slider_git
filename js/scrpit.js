$(function () {

    var slides = $('.slides');

    $('.prev-button').on('click', function () {

        $('.slides').last().animate({
            left: '-100%'
        }, 'slow', function () {
            $('.slides').first().before($('.slides').last());
            $('.slides').css('left', '0%');
        });
    });

    $('.next-button').on('click', function () {
        $('.slides').last().animate({
            left: '100%'
        }, 'slow', function () {
            $('.slides').first().before($('.slides').last());
            $('.slides').css('left', '0%');
        });
    });

});