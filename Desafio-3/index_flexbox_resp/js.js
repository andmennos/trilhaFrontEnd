
$(document).ready(function() {

    $(".botao").click(function() {
        $(".menu-lista").toggle();
    });

});

$(window).resize(function() {
    if ($(document).innerWidth() < 600) {
        $(".menu-lista").css("display", "none")
    } else {
        $(".menu-lista").css("display", "flex");
    }
});