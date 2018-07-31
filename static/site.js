function menu_resize() {
    if (window.innerWidth <= 768) {
        $("#sidebar").hide();
        $("#topnav").show();
        $('#main-doc').addClass('main-doc-mobile');
        $('#main-doc').removeClass('main-doc-standard');

    } else {
        $("#sidebar").show();
        $("#topnav").hide();
        $('#main-doc').addClass('main-doc-standard');
        $('#main-doc').removeClass('main-doc-mobile');
    }
}

menu_resize();

$(window).ready(menu_resize);

$(window).resize(menu_resize);

$( document ).ready(function() {
    menu_resize();
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 300,
        gutter: 10
    });
});