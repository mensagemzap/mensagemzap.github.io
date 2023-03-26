$(document).ready(function() {
    // Mostra a popup após 30 segundos
    setTimeout(function() {
      $('#myModal').modal('show');
    }, 30000);
  
    // Esconde a popup quando o usuário clica em Fechar
    $('.btn-close').click(function() {
      $('#myModal').modal('hide');
    });
  
    // Volta para o topo da página quando a popup é escondida
    $('#myModal').on('hidden.bs.modal', function() {
      $('html, body').animate({scrollTop:0}, 'slow');
    });
  });
  