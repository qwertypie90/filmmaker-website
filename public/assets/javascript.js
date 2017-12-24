$(document).ready(function() {

    // menu bar appear and disappear
    $(window).mouseenter(function() {
        $('.main_h').addClass('sticky');
    }).mouseleave(function() {
        if (!$('.main_h').hasClass('active')) {
            $('.main_h').removeClass('sticky');
        }
    });

    // Mobile Navigation
    $('.mobile-toggle').click(function() {
        if ($('.main_h').hasClass('open-nav')) {
            $('.main_h').removeClass('open-nav');
        } else {
            $('.main_h').addClass('open-nav');
        }
    });

    $('.main_h li a').click(function() {
        if ($('.main_h').hasClass('open-nav')) {
            $('.navigation').removeClass('open-nav');
            $('.main_h').removeClass('open-nav');
        }
    });

    // Navigation Scroll - ljepo radi materem
    $('nav a').click(function(event) {
        var id = $(this).attr("href");
        var offset = 70;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 500);
        event.preventDefault();
    });

});