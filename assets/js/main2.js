

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
             $('div.pokemon').append(document.createTextNode(response));
        })
        .fail(function() {
            prompt("error");
        });
    }

    var ajaxind = function(poke){
        $.ajax({
            url: 'http://pokeapi.co/api/v2/pokemon-species/1/', //pagina donde buscaremos las imagenes
            type: 'GET', //obtener datos
            datatype: 'json', //tipo de datos que esperamos como respuesta
        
        }).done(function(response) {
           $('div.pokemon').append(document.createTextNode(response));
            
        })
        .fail(function() {
            prompt("error");
        });
    }
 
    $("#buscar").click(function(event){
        console.log("Entro");
        $(".pokedex1").empty();
        var poke = $("#gif-text").val();
        ajaxinfo(poke);
    });
  



   
});
 /*var show = function(data){
        data.pokemon_entries.forEach(function(element){
            var nombre = element.pokemon_species.name;
            var id = element.entry_number;
            
            var pokemones = detalles + id;


            $("#.pokemon").append("algo"(id,nombre,pokePic));            
           
        })
}*/


