$('document').ready(function(){
    $('.nav--more').click(function() {
        $('.nav--drop').toggle();
    })

    $('.nav--user--name').click(function() {
        $('.nav--user--list').toggle();
    })

    $('body').on('click', '.open-menu', function() {
        debugger
        $('page-nav ul.nav--list').removeClass('open');
        $('#nav--toggle').removeClass('open-menu');
    })

    $('#nav--toggle').click(function() {
        $('page-nav ul.nav--list').addClass('open');
        $(this).addClass('open-menu');
    });
});