$('document').ready(function () {
    $('.nav--more').click(function () {
        $('.nav--drop').toggle();
    })

    $('.nav--user--name').click(function () {
        if($('.nav--user--list').hasClass('open')) {
            $('.nav--user--list').toggle();
            $('.nav--user--list').removeClass('open');
        } else {
            $('.nav--user--list').toggle();
            $('.nav--user--list').addClass('open');
        }
    })

    $('.nav--user--toggle').click(function () {
        if($('.nav--user--list').hasClass('open')) {
            $('.nav--user--list').toggle();
            $('.nav--user--list').removeClass('open');
        } else {
            $('.nav--user--list').toggle();
            $('.nav--user--list').addClass('open');
        }
    })

    $('#nav--toggle').click(function () {
        if ($(this).hasClass('open-menu')) {
            $('page-nav ul.nav--list').removeClass('open');
            $(this).removeClass('open-menu');
        } else {
            $('page-nav ul.nav--list').addClass('open');
            $(this).addClass('open-menu');
        }
    });
});