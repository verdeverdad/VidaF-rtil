//Setup and start animation maquina de escribir
document.addEventListener('DOMContentLoaded', () => {
    var typed = new Typed('#element', {
        strings: ['<i>Más de treinta años<br> trabajando por una vida<br> más sustentable</i>', '<i>y hoy<br> tenemos la misma ilusión <br>que el primer día.</i>'],
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 10,

    });
});




function ajustarAltoParrafo() {
    const parrafo = document.getElementById('parrafo-inicio2'); // Reemplaza 'miParrafo' por el ID de tu párrafo
    const anchoPantalla = window.innerWidth;
  
    // Ajusta los valores de ancho y alto según tus necesidades
    if (anchoPantalla <= 768) { // Ajusta el ancho máximo para pantallas pequeñas
      parrafo.style.height = '600px'; // Establece el alto deseado para pantallas pequeñas
    } else {
      parrafo.style.height = '400px'; // Permite que el alto se ajuste automáticamente en pantallas grandes
    }
  }    
  
  ajustarAltoParrafo();