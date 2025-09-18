$(document).ready(function(){

  //Contador de itens acessados dentro do REA
  var itensAbertos = 0;


  //Se o usuário tiver chegado ao final do REA, mostra o NAV ao scrollar pro final da página e esconde se scrollar pra cima.


//modifica a seta em ATORES
function mudaseta(){
  $("#seta-3").toggleClass("expandida3");
  $("#seta-3").toggleClass("compacta3");
  console.log("mudaseta");
}

$("#botao-2").click(function(){
  mudaseta()
});

  //////////////////////////////
  // Código do REA//////////////
  //////////////////////////////


  //calcula a altura do conteúdo da segunda tela
    // var alturaConteudo = $(".tela-conteudo").height();
    // console.log(alturaConteudo);


  // Inicia o REA
  function comecar(){
      $(".tela-intro").addClass('animated fadeOutUp');
      $("html, body").animate({
        scrollTop: $('main').offset().top
      }, 1000);
      setTimeout(function(){
        $(".tela-intro").hide();
        $(".tela-conteudo").fadeIn(800);

        $("main").css("padding-top", "20px");
        $(".barracontainer").css("position", "relative");
      }, 1000);
    };

  function mudabarra(){
    $(".barra").toggleClass("barraexpandida");
    // $(".logo").toggleClass("barraexpandida");
    $(".logo").hide();
    $("#logotipo").fadeOut();
    $(".nav").fadeOut();
    $(".barranav").css("max-width", "100vw");
  };

  function mostranav(){
    $("#logotipo").show();
    $(".logo").fadeIn();
    $(".nav").fadeIn();
    console.log("mostrando nav");
  };

  function escondenav(){
    $(".logo").fadeOut();
    $(".nav").fadeOut();
  };


  $("#comecar").click(function(){
    comecar();
    mudabarra();
  });



  // $("h1").click(function(){
  //   comecar()
  // });

  // Atualiza o contador de itens acessados
  $(".collapsed").click(function(){

    if (!$(this).hasClass("usado")){
      console.log("inedito");
      $(this).addClass("usado");
      itensAbertos++;
      if (itensAbertos==6){
        console.log("acabou");
        finaliza();
      }
    }
    else{
      console.log("usado");
    }
  })


  // Ações para final do REA
  function finaliza(){
    // setTimeout(function(){
    //   $(".feedback").show();
    //   $("html, body").animate({
    //     scrollTop: $('.feedback-container').offset().top
    //   }, 1200);
    // }, 600);
    setTimeout(function(){
      $(".feedback").show();
      $(".feedback").addClass('animated slideInRight');      
    }, 1400);
    setTimeout(function(){
    $("html, body").animate({
    scrollTop: $('.feedback-container').offset().top
  }, 1000);
}, 800);
  }


  //roda a função ao scrollar a tela
  $(window).scroll(function(){
    // Checa se REA está completo
    if (itensAbertos==6){
      // var nav = $("nav");
      var scroll = $(window).scrollTop();
      //Mostra a nav quando a página chega no fim
      if (scroll == $(document).height() - $(window).height()) {
        mostranav();
      //Esconde a nav se a página não estive no fim
      } else {
        escondenav();
      }
    }
  });



});
