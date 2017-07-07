

$(document).ready(function() {
    
    /*función para mostrar imágenes*/
    for (var i = 1; i < 152; i++) {
        var pokePic = $("<img src=http://pokeapi.co/media/img/" + i + ".png id=" + i + ">"); /* recorro el objeto de imagenes
                                                                                             y creo un div con clase pokemon dodne guardo la imagen*/
        $('div.pokemon').append(pokePic);
    }

    
    var ajaxinfo = function(){
        $.ajax({
            url: 'http://pokeapi.co/api/v2/pokedex/1/', //pagina donde buscaremos las imagenes
            type: 'GET', //obtener datos
            datatype: 'json', //tipo de datos que esperamos como respuesta
            })
        .done(function(response) {
            console.log(response);
        })
        .fail(function() {
            console.log("error");
        });
    }

    var ajaxind = function(gif){
        $.ajax({
            url: 'http://pokeapi.co/api/v2/pokemon-species/1/', //pagina donde buscaremos las imagenes
            type: 'GET', //obtener datos
            datatype: 'json', //tipo de datos que esperamos como respuesta
        
        }).done(function(response) {
            console.log(response);
            
        })
        .fail(function() {
            console.log("error");
        });
    }
 
    $("#buscar").click(function(event){
        console.log("Entro");
        $("#elementos").empty();
        var gif = $("#gif-text").val();
        ajaxinfo(gif);
    });

   
});
