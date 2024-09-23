$(document).ready(function() { 
  //fadeIns (must include css properies!!)
$(function() { 
    $(window).scroll( function(){
           
        $('.fade-in-block').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            //Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it 
            bottom_of_window = bottom_of_window + 250;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);  }
       });      
    });
  
  
  
$(window).scroll(
  function(){
    
  });
});  

  
//Mobile Menu
 $("#mobile-menu-button").click(function(){
    $("#toggle-menu-mobile").slideToggle();
  }); 
  
 $("#view-menu").click(function(){
    $("#menu-print").slideToggle();
 }); 
  
//Gallery Click
$("#spa-studio").show();
$("#hair").hide();
$("#nails").hide();
$("#beauty").hide(); 
  
$("#beauty-link").click(function() {
    $("#spa-studio, #nails, #hair").hide(500); 
    $("#beauty").show(500);
  });
  
$("#studio-link").click(function() {
    $("#hair, #nails, #beauty").hide(500); 
    $("#spa-studio").show(500);
  });
  
$("#nails-link").click(function() {
    $("#spa-studio, #hair, #beauty  ").hide(500); 
    $("#nails").show(500);
  });
  
$("#hair-link").click(function() {
    $("#spa-studio, #nails, #beauty").hide(500);
    $("#hair").show(500);
  });
  

  




 
   
});
