# carousel-bootstrap-lazyload
Carousel de Bootstrap 4, compatible con lazy load, ademas soporta imágenes en formato .webp y totalmente compatible con srcset para imágenes responsive

Para utilizar el plugins solo se necesita descargar el archivo jquery-lazyload.js dentro de la carpeta js o si prefieres el archivo jquery-lazyload.min.js que esta en el raiz tambien esta minificado.

Y escribir dentro de tu documen.ready la llamada a la funcion. 

Ejemplo:

carouselLazyLoad();

Optiones para pasar por parametros:

Acepta dos parametro el primero es el numero de imagen que se quiere precargar, si no se le pasa ningun parametro por defecto se precarga una, en este caso seria la siguiente y la anterior, en el caso que se quiere precargar más imagenes solo tendriamos que pasarselo por parametro, el segundo parametro es un booleano para escribir en el numero de imagen que estamos y el numero total, tenemos un ejemplo de esto en la demo de MultiSlider podremos comprobarlo en el primer slider de la parte superior, para que esto funcione perfectamente tendremos que añadir un pequeño codigo html adjunto seguidamente. 

Codigo html para paginacion:

<div class="numberSlider">
  <span class="sliderTo"></span> /
  <span class="sliderLength"></span>
</div>

(Este codigo es para cada Slider)

Ejemplos:

carouselLazyLoad(2);

Ejemplo de numeracion:

carouselLazyLoad(1,true);

DEMOS:

Slider con .jpg:

https://torresgol10.github.io/bootstrap-carousel-lazyload/demo/sliderbootstrapjpg.html

Slider con la etiqueta <picture>:
 
https://torresgol10.github.io/bootstrap-carousel-lazyload/demo/sliderbootstraps.html

MultiSlider en la misma pagina y paginación:

https://torresgol10.github.io/bootstrap-carousel-lazyload/demo/multiplesSliderbootstraps.html
