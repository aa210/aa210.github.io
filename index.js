$(document).ready(function() { 
 
 //Scroll Up Menu
var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $("#navigation, #top-div-mobile").outerHeight();
         $(document).scroll(function () {
            var y = $(document).scrollTop(),
                header = $("#navigation, #top-div-mobile");
        
            if (y >= 160) {
                var st = $(this).scrollTop();
 
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
            return;
                                                
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down                
                header.removeClass('fixed');
            } else {
                // Scroll Up                
                if(st + $(window).height() < $(document).height() && y > 142) {
                    header.addClass('fixed');                    
                }else if(y <= 142){
                    header.removeClass('fixed');
                }
            }
 
            lastScrollTop = st; 
            } else {
                header.removeClass('fixed');
            }
        });

  
});



//Mobile Menu
 $("#mobile-menu-button").click(function(){
    $("#navigation-mobile").slideToggle();
   $(".fa-bars").toggleClass("hidden");
    $(".fa-close").toggleClass("hidden");
  }); 
    
  
 $("#view-menu").click(function(){
    $("#menu-print").slideToggle();
 }); 
   
   
 //PORTFOLIO 
$(".websites").show()
$("#web-link").addClass("selected");  
$(".webapps").hide();
$("#exit-popup").hide();
  
  $("#web-link").click(function() {
    $(this).addClass("selected");
    $("#apps-link").removeClass("selected");
    $(".webapps").hide(500); 
    $(".websites").show(500);
  });
  
  $("#apps-link").click(function() {
    $(this).addClass("selected");
    $("#web-link").removeClass("selected");
    $(".webapps").show(500); 
    $(".websites").hide(500);
  });
