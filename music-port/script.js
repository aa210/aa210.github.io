$(document).ready(function() {
/*Play Button*/  
  $("#play-button").click(function(){
    $(this).addClass("hidden"); 
  $("#pause-button").removeClass("hidden");
  });
  $("#pause-button").click(function(){
    $(this).addClass("hidden"); 
  $("#play-button").removeClass("hidden");
  });
  
$(function() { 
    $(window).scroll( function(){
           
        $('.fade-in-block').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            //Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it 
            bottom_of_window = bottom_of_window + 250;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},600);  }
        });      
    });
  
  
  
  $(window).scroll(
  function(){
    
    
  }); 
});


 });
