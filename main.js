(function() {
    // Evento de clic de enlace al botón de navegación desplegable
    document.querySelector('.nav-button').addEventListener('click', function() {
      /*  Alternar la clase cerrada CSS que reduce la altura de la UL por lo tanto
          escondiendo todo LI aparte del primero */
      this.parentNode.parentNode.classList.toggle('closed')
    }, false);
  })();