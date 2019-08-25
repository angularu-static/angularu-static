$('document').ready(function(){
    $('.nav--more').click(function() {
        $('.nav--drop').toggle();
    })

    $('.nav--user--name').click(function() {
        $('.nav--user--list').toggle();
    })
});