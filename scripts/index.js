// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en dispositivos/emuladores Ripple o Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.addEventListener('deviceready', getDestacados.bind(this), false);
    document.addEventListener('deviceready', getNacionales.bind(this), false);
    document.addEventListener('deviceready', getInternacionales.bind(this), false);
    document.addEventListener('deviceready', getDeportes.bind(this), false);

    function onDeviceReady() {
        // Controlar la pausa de Cordova y reanudar eventos
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova se ha cargado. Haga aquí las inicializaciones que necesiten Cordova.
       
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };

    function getDestacados() {
        $.ajax({
            url: 'http://www.elpais.com.py/wp-json/wp/v2/posts?categories=23',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $("#t-destacado").html(data[0].title.rendered);
                $("#i-destacado").attr("src", data["0"].featured_image_urls.thumbnail);
                for (var i = 0; i < data.length; i++) {
                    $("#p-destacados").append('<div id="' + data[i].id + '" class="row noticia"><div class="col-xs-12"><div class="thumbnail"><img src="' + data[i].featured_image_urls.medium + '"/><div class="caption"><h5>' + data[i].title.rendered + '</h5></div></div></div></div>');
                }
            }
        });
    };

    function getNacionales() {
        $.ajax({
            url: 'http://www.elpais.com.py/wp-json/wp/v2/posts?categories=30',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $("#t-nacional").html(data[0].title.rendered);
                $("#i-nacional").attr("src", data["0"].featured_image_urls.thumbnail);
                for (var i = 0; i < data.length; i++) {
                    $("#p-nacionales").append('<div id="' + data[i].id + '" class="row noticia"><div class="col-xs-12"><div class="thumbnail"><img src="' + data[i].featured_image_urls.medium + '"/><div class="caption"><h5>' + data[i].title.rendered + '</h5></div></div></div></div>');
                }
            }
        });
    };

    function getInternacionales() {
        $.ajax({
            url: 'http://www.elpais.com.py/wp-json/wp/v2/posts?categories=28',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $("#t-internacional").html(data[0].title.rendered);
                $("#i-internacional").attr("src", data["0"].featured_image_urls.thumbnail);
                for (var i = 0; i < data.length; i++) {
                    $("#p-internacionales").append('<div id="' + data[i].id + '" class="row noticia"><div class="col-xs-12"><div class="thumbnail"><img src="' + data[i].featured_image_urls.medium + '"/><div class="caption"><h5>' + data[i].title.rendered + '</h5></div></div></div></div>');
                }
            }
        });
    };

    function getDeportes() {
        $.ajax({
            url: 'http://www.elpais.com.py/wp-json/wp/v2/posts?categories=22',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $("#t-deportes").html(data[0].title.rendered);
                $("#i-deportes").attr("src", data["0"].featured_image_urls.thumbnail);
                for (var i = 0; i < data.length; i++) {
                    $("#p-deportes").append('<div id="' + data[i].id + '" class="row noticia"><div class="col-xs-12"><div class="thumbnail"><img src="' + data[i].featured_image_urls.medium + '"/><div class="caption"><h5>' + data[i].title.rendered + '</h5></div></div></div></div>');
                }
            }
        });
    };

    $('body').on('click', '#btnDestacados', function () {
        $("#p-inicio").addClass("hide");
        $("#p-destacados").removeClass("hide");
        $("#p-nacionales").addClass("hide");
        $("#p-deportes").addClass("hide");
        $("#p-internacionales").addClass("hide");
        $("#render-noti").addClass("hide");
        $("#navbar").removeClass("in");
    });
    $('body').on('click', '#btnInicio', function () {
        $("#p-inicio").removeClass("hide");
        $("#p-destacados").addClass("hide");
        $("#p-nacionales").addClass("hide");
        $("#p-deportes").addClass("hide");
        $("#p-internacionales").addClass("hide");
        $("#render-noti").addClass("hide");
        $("#navbar").removeClass("in");
    });
    $('body').on('click', '#btnNacionales', function () {
        $("#p-inicio").addClass("hide");
        $("#p-destacados").addClass("hide");
        $("#p-nacionales").removeClass("hide");
        $("#p-deportes").addClass("hide");
        $("#p-internacionales").addClass("hide");
        $("#render-noti").addClass("hide");
        $("#navbar").removeClass("in");
    });
    $('body').on('click', '#btnDeportes', function () {
        $("#p-inicio").addClass("hide");
        $("#p-destacados").addClass("hide");
        $("#p-deportes").removeClass("hide");
        $("#p-internacionales").addClass("hide");
        $("#p-nacionales").addClass("hide");
        $("#render-noti").addClass("hide");
        $("#navbar").removeClass("in");
    });
    $('body').on('click', '#btnInternacionales', function () {
        $("#p-inicio").addClass("hide");
        $("#p-destacados").addClass("hide");
        $("#p-internacionales").removeClass("hide");
        $("#p-nacionales").addClass("hide");
        $("#p-deportes").addClass("hide");
        $("#render-noti").addClass("hide")
        $("#navbar").removeClass("in");
    });

    $('body').on('click', '.noticia', function () {
        var id = $(this).attr('id');
        $.ajax({
            url: 'http://www.elpais.com.py/wp-json/wp/v2/posts/' + id,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $("#render-noti").removeClass("hide")
                $("#p-inicio").addClass("hide");
                $("#p-destacados").addClass("hide");
                $("#p-internacionales").addClass("hide");
                $("#p-nacionales").addClass("hide");
                $("#p-deportes").addClass("hide");
                $("#render-noti").html('<div class="row"><div class="col-xs-12"><h3>' + data.title.rendered + '</h3></div></div><div class="row"><div class="col-xs-12"><img class="img-responsive" src="' + data.featured_image_urls.medium + '"/></div></div><div class="row"><div class="col-xs-12">' + data.content.rendered + '</div></div>');
            }
        });
    });

    $(document).on('swipeleft', function (e) {
        $("#p-inicio").addClass("hide");
    });
} )();