function on_resize() {
    if (window.innerWidth <= 768) {
        $('#main-doc').addClass('main-doc-mobile');
        $('#main-doc').removeClass('main-doc-standard');

    } else {
        $('#main-doc').addClass('main-doc-standard');
        $('#main-doc').removeClass('main-doc-mobile');
    }
}

on_resize();

$(window).ready(on_resize);

$(window).resize(on_resize);

$( window ).on( "load", function(){
    $('.grid').masonry('layout');
} );

$( document ).ready(function() {
    $masnory = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 300,
        gutter: 10
    });

});