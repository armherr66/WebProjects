$(document).ready(function () {
    // Elemento
    $('h1').hide();
    $('h1, h2').hide();

    // Clase
    $('.encabezado').hide();

    // ID
    $('#primero').hide();

    // Nesting
    $('.primero a').hide();

    // Atributo
    $("a[href*='google']").hide();

});