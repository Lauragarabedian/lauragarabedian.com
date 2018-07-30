function menu_resize() {
    if (window.innerWidth <= 767) {
        $("#sidebar").hide();
        $("#topnav").show();
        $('#main-doc').addClass('col-12');
        $('#main-doc').removeClass('col-10');
    } else {
        $("#sidebar").show();
        $("#topnav").hide();
        $('#main-doc').addClass('col-10');
        $('#main-doc').removeClass('col-12');
    }
}

menu_resize();

$(window).ready(menu_resize);

$(window).resize(menu_resize);




  $( document ).ready(function() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 300,
        gutter: 10
      });
});