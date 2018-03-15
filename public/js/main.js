$(document).ready(function($) { 
	$(".scroll").click(function(event){        
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
	});	

	$(".primeiraFoto").click(function( event ) {
  	event.preventDefault();

	});

	//---------------------------------------//
	 $(".cadastro").mouseover(function (){
	 	setTimeout(function(){
		$(".invisivelCadastro").toggle();
	}, 500);
	 });
	 $(".cadastro").mouseout(function(){
	 	setTimeout(function(){
		$(".invisivelCadastro").toggle();
	}, 500);
	 });
	 //---------------------------------------//

	 //---------------------------------------//
	 $(".requisitos").mouseover(function (){
	 	setTimeout(function(){
		$(".invisivelRequisitos").toggle();
	}, 500);
	 });
	 $(".requisitos").mouseout(function(){
	 	setTimeout(function(){
		$(".invisivelRequisitos").toggle();
	}, 500);
	 });
	 //---------------------------------------//

	 //---------------------------------------//
	 $(".licencas").mouseover(function (){
	 	setTimeout(function(){
		$(".invisivelLicencas").toggle();
	}, 500);
	 });
	 $(".licencas").mouseout(function(){
	 	setTimeout(function(){
		$(".invisivelLicencas").toggle();
	}, 500);
	 });
	 //---------------------------------------//

	 //---------------------------------------//
	 $(".tributacao").mouseover(function (){
	 	setTimeout(function(){
		$(".invisivelTributacao").toggle();
	}, 500);
	 });
	 $(".tributacao").mouseout(function(){
	 	setTimeout(function(){
		$(".invisivelTributacao").toggle();
	}, 500);
	 });
	 //---------------------------------------//

	 //---------------------------------------//
	 $(".licenca").mouseover(function (){
	 	setTimeout(function(){
		$(".invisivelLicenca").toggle();
	}, 500);
	 });
	 $(".licenca").mouseout(function(){
	 	setTimeout(function(){
		$(".invisivelLicenca").toggle();
	}, 500);
	 });
	 //---------------------------------------//

	 //---------------------------------------//
	 $(".tributos").mouseover(function (){
	 	setTimeout(function(){
		$(".invisivelTributos").toggle();
	}, 500);
	 });
	 $(".tributos").mouseout(function(){
	 	setTimeout(function(){
		$(".invisivelTributos").toggle();
	}, 500);
	 });
	 //---------------------------------------//

	 //---------------------------------------//
	 $(".analises").mouseover(function (){
	 	setTimeout(function(){
		$(".invisivelAnalises").toggle();
	}, 500);
	 });
	 $(".analises").mouseout(function(){
	 	setTimeout(function(){
		$(".invisivelAnalises").toggle();
	}, 500);
	 });
	 //---------------------------------------//

	 //---------------------------------------//
	 $(".vistorias").mouseover(function (){
	 	setTimeout(function(){
		$(".invisivelVistorias").toggle();
	}, 500);
	 });
	 $(".vistorias").mouseout(function(){
	 	setTimeout(function(){
		$(".invisivelVistorias").toggle();
	}, 500);
	 });
	 //---------------------------------------//

	 //---------------------------------------//
	 $(".emissao").mouseover(function (){
	 	setTimeout(function(){
		$(".invisivelEmissao").toggle();
	}, 500);
	 });
	 $(".emissao").mouseout(function(){
	 	setTimeout(function(){
		$(".invisivelEmissao").toggle();
	}, 500);
	 });
	 //---------------------------------------//
	 
});



function removeDefault () {
	event.preventDefault();
}

