$(document).ready(function(){
  //Activacion del slider
  $('.carousel').carousel();
  /*
  Parametros:
    1º: numero de imagenes para precargar
    2º: Si quieres mostrar el numero de imagenes que hay y en la que esta (es necesario el html tambien)
  */
  carouselLazyLoad(1,true);
});
