function carouselLazyLoad(numImg,numbersImg) {
  // Get IE 10 and 11
  if(numImg == null){
    numImg = 1;
  }
  if(numbersImg == null){
    numbersImg = false;
  }
  var id;
  var version = detectIE();
  var imgJPG = $(".carousel.lazy picture");
  var multiSlider = $(".carousel.lazy");

  if(version || imgJPG.length == 0){
    for (var i = 0; i < multiSlider.length; i++) {
      if(multiSlider.length == 1){
        id = ".carousel";
      }else{
        id = "#"+$(multiSlider[i]).attr("id")+".carousel";
      }
      lazySlider(numImg,id);
      lazySliderLast(id);
      if(numbersImg){
        numberImgSlider(0,id);
      }
    }
      //Evento para cuando empieze la transicion se carge la siguiente imagen que tenga que mostrar
      //El evento se activa cuando empieze, tambien se puede poner cuando acabe
    $('.carousel.lazy').on('slide.bs.carousel', function (ev) {
      //Precarga de 1 siempre que haya un evento de mover una imagen
      id = "#"+$(this).attr("id")+".carousel";

      if(ev.direction=="right"){
        lazySliderLast(id);
      }else{
        lazySlider(1,id);
      }
    });
    if(numbersImg){
      $('.carousel.lazy').on('slid.bs.carousel', function (ev) {
        //Llamada para que carge la foto hacia la que va
        id = "#" + $(this).attr("id") + ".carousel";
        var to;
        if(ev.to!=null){
          to = ev.to;
        }else{
          to = $(id +" .active").index();
        }
        numberImgSlider(to,id);
      });
    }
  }else{
    for (var i = 0; i < multiSlider.length; i++) {
      if(multiSlider.length == 1){
        id = ".carousel";
      }else{
        id = "#" + $(multiSlider[i]).attr("id") + ".carousel";
      }
      lazySliderSource(numImg,id);
      lazySliderSourceLast(id);
      if(numbersImg){
        numberImgSlider(0,id);
      }
    }
    $('.carousel.lazy').on('slide.bs.carousel', function (ev) {
      //Llamada para que carge la foto hacia la que va
      id = "#" + $(this).attr("id") + ".carousel";
      if(ev.direction=="right"){
        lazySliderSourceLast(id);
      }else{
        lazySliderSource(1,id);
      }
    });
    if(numbersImg){
      $('.carousel.lazy').on('slid.bs.carousel', function (ev) {
        //Llamada para que carge la foto hacia la que va
        id = "#" + $(this).attr("id") + ".carousel";
        var to;
        if(ev.to!=null){
          to = ev.to;
        }else{
          to = $(id +" .active").index();
        }
        numberImgSlider(to,id);
      });
    }
  }
}

var numberImgSlider = function(to,id){
  var toSlider = to + 1;
  var lengthSlider = $(id + ".carousel img").length;
  if($(id + ".carousel .numberSlider").length > 0){
    $(id + ".carousel .numberSlider > .sliderTo").text(toSlider);
    $(id + ".carousel .numberSlider > .sliderLength").text(lengthSlider);
  }
}

//Funciones para el lazy load cuando son img simple
//Funcion complementaria a la funcion de abajo para que no solo carge a la primera
//Siempre carga la siguiente imagen que tenga que servir
var lazySlider = function(numImg,id) {
  var src;
  var imgs = $(id + '.lazy img.lazy-load');
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
var lazySliderLast = function(id) {
  var src;
  var imgs = $(id+'.lazy img.lazy-load');
  if(imgs.length > 0){
    var lastImg=imgs.length-1;

    for (var i = lastImg; i < imgs.length; i++) {
      src = $(imgs[i]).attr("data-src");
      $(imgs[i]).attr("src",src);
      $(imgs[i]).removeAttr("data-src");
      $(imgs[i]).removeClass("lazy-load");
    }
  }
}

/*
Funciones para el lazy load cuando tiene picture y source
*/
var lazySliderSource = function(numImg,id) {
  var imgs = $(id + ".lazy picture > source[data-srcset]").parent();
  var dataSrcset="";
  var source="";
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

var lazySliderSourceLast  = function(id) {
  var imgs = $(id + ".lazy picture > source[data-srcset]").parent();
  var dataSrcset="";
  var source="";
  if(imgs.length > 0){
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
