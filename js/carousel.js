$(document).ready(function(){
  //Activacion del slider
  $('.carousel').carousel();

  // Get IE 10 and 11
  var version = detectIE();
    if(version){
    //Funciones para el lazy load cuando son img simple
    //Funcion complementaria a la funcion de abajo para que no solo carge a la primera
    //Siempre carga la siguiente imagen que tenga que servir
    var lazySlider = function(numImg) {
      var src;
      var imgs = $('img.lazy-load');
      if(imgs.length > 0){
        if(numImg > imgs.length){
          numImg=imgs.length;
        }
        for (var i = 0; i < numImg; i++) {
          src = $(imgs[i]).attr("data-src");
          $(imgs[i]).attr("src",src);
          $(imgs[i]).removeAttr("data-src");
          $(imgs[i]).removeClass("lazy-load");
        }
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
    });
  }else{
    /*
    Funciones para el lazy load cuando tiene picture y source
    */
    var lazySliderSource = function(numImg) {
      var imgs = $(".carousel.lazy picture > source[data-srcset]").parent();
      var dataSrcset;
      var source;
      if(imgs.length > 0){
        if(numImg > imgs.length){
          numImg=imgs.length;
        }
        for (var z = 0; z < numImg; z++) {
          source=$(imgs[z]).children("source");
          for (var i = 0; i < source.length; i++) {
            dataSrcset=$(source[i]).attr("data-srcset");
            $(source[i]).attr("srcset",dataSrcset);
            $(source[i]).removeAttr("data-srcset");
          }
        }
      }
    }
    var lazySliderSource = function(numImg) {
      var imgs = $(".carousel.lazy picture > source[data-srcset]").parent();
      var dataSrcset;
      var source;
      if(imgs.length > 0){
        if(numImg > imgs.length){
          numImg=imgs.length;
        }
        for (var z = 0; z < numImg; z++) {
          source=$(imgs[z]).children("source");
          for (var i = 0; i < source.length; i++) {
            dataSrcset=$(source[i]).attr("data-srcset");
            $(source[i]).attr("srcset",dataSrcset);
            $(source[i]).removeAttr("data-srcset");
          }
        }
      }
    }
    var lazySliderLast  = function(numImg) {
      var imgs = $(".carousel.lazy picture > source[data-srcset]").parent();
      var dataSrcset;
      var source;
      if(imgs.length > 0){
        if(numImg > imgs.length){
          numImg=imgs.length;
        }
        var lastImg=imgs.length-1;
        for (var y = lastImg; y < imgs.length; y++) {
          source=$(imgs[y]).children("source");
          for (var i = 0; i < source.length; i++) {
            dataSrcset=$(source[i]).attr("data-srcset");
            $(source[i]).attr("srcset",dataSrcset);
            $(source[i]).removeAttr("data-srcset");
          }
        }
      }
    }
    lazySliderSource(1);
    $('.carousel.lazy').on('slide.bs.carousel', function (ev) {
      //Llamada para que carge la foto hacia la que va
      if(ev.direction=="right"){
        lazySliderLast(1);
      }else{
        lazySliderSource(1);
      }
    });
  }

});
function detectIE() {
  var ua = window.navigator.userAgent;
  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }
  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }
  // other browser
  return false;
}
