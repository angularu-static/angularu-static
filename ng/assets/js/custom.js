$('document').ready(function(){
    $('.nav--more').click(function() {
        $('.nav--drop').toggle();
    })

    $('.nav--user--name').click(function() {
        $('.nav--user--list').toggle();
    })

    $('body').on('click', '#nav--toggle.open-menu', function() {
        debugger
        $('page-nav ul.nav--list').removeClass('open');
        $('#nav--toggle').removeClass('open-menu');
    })

    $('#nav--toggle').click(function() {
        debugger
        $('page-nav ul.nav--list').addClass('open');
        $(this).addClass('open-menu');
    });
});