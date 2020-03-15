$('#contact').on('click', function(){
   let offset = $('footer').offset().top;
   $('html').animate({scrollTop:offset}, 500);
});