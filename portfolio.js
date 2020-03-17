$('#intro-btn').on('click', function(){
    let offset = $('#intro').offset().top;
    $('html').animate({scrollTop:offset}, 1000);
});


$('#contact-btn').on('click', function(){
   let offset = $('footer').offset().top;
   $('html').animate({scrollTop:offset}, 1000);
});

$('.carousel').carousel({
  interval: 5000
});