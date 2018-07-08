$(document).ready(function(){
  //Activacion del slider
  $('.carousel').carousel();

  console.log($(".carousel.lazy picture source"));

  //Funcion complementaria a la funcion de abajo para que no solo carge a la primera
  //Siempre carga la siguiente imagen que tenga que servir
  var lazySlider = function(numImg=0) {
    var imgs= $('img.lazy-load');
    for (var i = 0; i < numImg; i++) {
      var src= $(imgs[i]).attr("data-src");
      console.log(src);
      $(imgs[i]).attr("src",src);
      $(imgs[i]).removeAttr("data-src");
      $(imgs[i]).removeClass("lazy-load");
    }
  }
  //Llamada a la funcion de arriba para que la primera vez que cargue el slider carge la siguiente imagen
  //El parametro es el numero de imagenes que se quiere precargar sin contar en la que esta ahora mismo
  lazySlider(1);
  //Evento para cuando empieze la transicion se carge la siguiente imagen que tenga que mostrar
  //El evento se activa cuando empieze, tambien se puede poner cuando acabe
  $('.carousel.lazy').on('slide.bs.carousel', function () {
    //Precarga de 1 siempre que haya un evento de mover una imagen
    lazySlider(1);
  })
  //Funcion que habilita el lazy load automaticamente cuando salta el evento de transicion del slider
  //Solo carga la primera imagen
  $(function() {
    return $(".carousel.lazy").on("slide.bs.carousel", function(ev) {
      var lazy;
      lazy = $(ev.relatedTarget).find("img[data-src]");
      lazy.attr("src", lazy.data('src'));
      lazy.removeAttr("data-src");
    });
  });
});
