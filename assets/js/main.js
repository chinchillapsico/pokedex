$(document).ready(function(){



	var dibujarGifs = function(data){
			var gif = "";
			var url = "";
			data.forEach(function(element){
				gif = element.images.downsized_large.url;
				url = element.bitly_gif_url;
			$("#elementos").append(armarTemplate(gif , url));	
		});
	}

	var armarTemplate = function(gif, url){
		var t = "<div class='elemento'><img src = '"+ gif +"'/><a href ='"+ url +"'>Ver más</a></div>"
	    return t;	
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

	var armarTemplate = function(gif, url){
		var t = "<div class='elemento'><img src = '"+ gif +"'/><a href ='"+ url +"'>Ver más</a></div>"
	    return t;	
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

	ajaxinfo();
	ajaxind ();
});