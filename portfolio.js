$('#intro-btn').on('click', function(){
    let offset = $('#intro').offset().top;
    $('html').animate({scrollTop:offset}, 1000);
});

$('#life-btn').on('click', function(){
   let offset= $('#life').offset().top;
   $('html').animate({scrollTop:offset}, 1000);
});

const lang_level= {'#html':'40%', '#python':'30%', '#ruby': '25%', '#css': '25%', '#sql': '10%', '#javascript':'10%'};
$('#skill-btn').on('click', function(){
    let offset = $('#skill').offset().top;
    $('html').animate({scrollTop:offset}, 1000);
    $.each(lang_level, function(property, value){
       $(property).delay(900).animate({'width': value}, 1200, 'linear');
       $(property).dequeue();
    });
});

$('#contact-btn').on('click', function(){
   let offset = $('footer').offset().top;
   $('html').animate({scrollTop:offset}, 1000);
});

$('.carousel').carousel({
  interval: 5000
});