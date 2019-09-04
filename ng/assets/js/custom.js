$('document').ready(function(){
    $('.nav--more').click(function() {
        $('.nav--drop').toggle();
    })

    $('.nav--user--name').click(function() {
        $('.nav--user--list').toggle();
    })

    $('#nav--toggle').click(function() {
        $('.nav--list').addClass('open');
        $(this).addClass('open-menu');
    });

    $('#nav--toggle.open-menu').click(function() {
        $('.nav--list').removeClass('open');
        $('#nav--toggle').removeClass('open-menu');
    })
});