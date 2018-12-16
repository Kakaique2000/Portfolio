$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});

$(document).ready(function(){


$('body').css('overflow', 'hidden');


   // guardando os valores ideais
    var altura = $('.headerAnimado').innerHeight(); 
     var padTop = $('.headerAnimado').css('paddingTop'); 
      var nomeTam = $('#nome').css('font-size'); 

      
//Definindo os valores iniciais

$('.headerAnimado').height('800px');

$('.headerAnimado').css('paddingTop', '250px');
$('#nome').css('font-size', '6em'); 
 $("#nome").css('opacity', '0');
 $("#sub").css('opacity', '0');
  $("#sub").css('margin-top', '200px');
  $("#btnGrupoAnimado").animate({
   left: -900,
    opacity: 0
},0);




//Animando os valores
setTimeout(function(){

$("#nome").animate({
    fontSize: nomeTam,
    opacity: 1

},1500);

$("#sub").animate({
    marginTop: 20,
    opacity: 1

},1500);





}, 500);




setTimeout(function(){
 
$("#btnGrupoAnimado").animate({
   left: 0,
   opacity: 1

},1000);

}, 2000);






setTimeout(function(){
 
 $('.headerAnimado').animate({height: altura, paddingTop: padTop},'slow');
 $('body').css('overflow', 'auto');
if (history.pushState) {
  window.history.pushState("object or string", "Kaique Lisboa", "index2.html");
} else {
  document.location.href = "index2.html";
}

}, 3000);







    $window = $(window);
    //Captura cada elemento section com o data-type "background"
    $('section[data-type="background"]').each(function(){
        var $scroll = $(this);   
            //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.            
            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $scroll.data('speed')); 
                var coords = '50%' + 10*yPos + 'px';
                $scroll.css({ backgroundPosition: coords });    
            });
   });  
}); 