$(document).ready(function() {
  var altura = 0;
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > altura) {
      $('.navbar').addClass('menu-fixed');
      $('.logo_papigs').addClass('logo_small');
    } else {
      $('.navbar').removeClass('menu-fixed');
      $('.logo_papigs').removeClass('logo_small');
    }
  });
  if ($(window).scrollTop() > altura) {
    $('.navbar').addClass('menu-fixed');
    $('.logo_papigs').addClass('logo_small');
  } else {
    $('.navbar').removeClass('menu-fixed');
    $('.logo_papigs').removeClass('logo_small');
  }
});
// ------------------- Menú-------------------------------

var acc = document.getElementsByClassName("accor");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
$(acc[i]).click(function() {
  // acc[i].addEventListener('click', function() {
    this.classList.toggle('active');

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });

}
// ---------------------------------Fotos Menú--------------------------------------

///Obtenemos todos los div con clase 'accor'
// const accorDivs = document.getElementsByClassName("accor");
const accorDivs = $(".accor");

//Declaramos un array con todas las src de las imágenes a utilizar
const images = ["imagenes/dulce.png", "imagenes/salada.png", "imagenes/salchicha.png", "imagenes/chorizo.png", "imagenes/salchitocineta.png", "imagenes/choritocineta.png", "imagenes/salchichon.png", "imagenes/guisado.png", "imagenes/salchichoripapa.png", "imagenes/tocineta.png"]

//Obtenemos el elemento <img> cuyo src vamos a cambiar en cada click
const acor = document.querySelector(".imagen_menu_web");

//Recorremos el array de divs y a cada uno le asignamos el evento click y le asignamos
//la imagen de la posición i que corresponda.
var contador = 0;
for (let i = 0; i < accorDivs.length + 1; i++) {
  $(accorDivs[i]).click(function() {
  // accorDivs[i].addEventListener("click", function() {
acor.src=images[i];
contador++;
if (contador == 1) {
    acor.src=images[i];
	}
  else if (contador == 2) {
  		acor.src = 'imagenes/menu_web.png';
      contador = 0;
  	}

  });
}
// ---------------------------------------------------------------------
