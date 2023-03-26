// Mostra a popup quando o usuário rolar a página
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('#myModal').modal('show');
    }
  });
  
  // Esconde a popup quando o usuário clica em Fechar
  $('#myModal').on('hidden.bs.modal', function (e) {
    // Volta para o topo da página
    $('html, body').animate({scrollTop:0}, 'slow');
  });
  