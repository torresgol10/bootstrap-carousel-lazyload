# carousel-bootstrap-lazyload
Carousel de Bootstrap 4, compatible con lazy load, ademas soporta imágenes en formato .webp y totalmente compatible con srcset para imágenes responsive

Para utilizar el plugins solo se necesita descargar el archivo jquery-lazyload.js dentro de la carpeta js.

Y escribir dentro de tu documen.ready la llamada a la funcion. 

Ejemplo:

carouselLazyLoad();

Optiones para pasar por parametros:

Solo acepta un parametro que es el numero de imagen que se quiere precargar, si no se le pasa ningun parametro por defecto se precarga una, en este caso seria la siguiente y la anterior, en el caso que se quiere precargar más imagenes solo tendriamos que pasarselo por parametro. 

Ejemplo:

carouselLazyLoad(2);
