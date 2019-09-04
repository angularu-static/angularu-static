$('document').ready(function(){
    $('.nav--more').click(function() {
        $('.nav--drop').toggle();
    })

    $('.nav--user--name').click(function() {
        $('.nav--user--list').toggle();
    })

    $('#nav--toggle').click(function() {
        $('page-nav ul.nav--list').addClass('open');
        $(this).addClass('open-menu');
    });

    $('.open-menu').click(function() {
        $('page-nav ul.nav--list').removeClass('open');
        $('#nav--toggle').removeClass('open-menu');
    })
});