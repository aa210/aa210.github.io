(function() {
 var app = angular.module('shoeShop', []);
   
app.controller('ShopController', function(){
	this.products = shoes;
}); 

  app.controller("ImgController", function(){

this.img = 1; //default

this.setImg = function(img) {
   this.img = img;
};

this.isSet = function(img) {
   return (this.img == img);
};
});  

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(index){
      this.current = index;
    };
  });
  
app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(tab){
      this.tab = tab;
    };

    this.isSet = function(tab){
      return (this.tab === tab);
    };
  });
  
var shoes = [
{name: 'Giacca Pump', 
description: "Timeless stiletto heels with an ankle strap for a classic look! Nubuck upper material. 3.75 inch heel height. Man-made sole.",
color: "Royal Blue", 
price: 219.98, 
id:"01", 
images:[
  "https://aa210.github.io/SM1a.png",
  "https://aa210.github.io/SM1b.png",
  "https://aa210.github.io/SM1c.png"
], 
 //reviews:[{}]  
//http://www.stevemadden.com/product/TIFANNIE/239497.uts 

},
{
name: "Teni Ankle Boot",
description: "Be the ultimate trendsetter in these sleek, minimalistic pointed toe ankle boots! Suede upper material. 1.5 inch heel height.Man-made sole. 5 inch shaft height.",
color: "Taupe",  
price: 199.98,
id:"02",  
images:[
  "https://aa210.github.io/SM2a.png",
  "https://aa210.github.io/SM2b.png",
  "https://aa210.github.io/SM2c.png"
], 
//http://www.stevemadden.com/product/WOMENS/Booties/ANELLA/c/2163/sc/2212/240669.uts?selectedColor=TAUPE-SUEDE  
//reviews:[{}] 
},
{name: "Wickette Stilleto Heel",
description: "You can’t go wrong with this classically tailored pointed toe stiletto heel pump!  Velvet upper material. 4.5 inch heel height. Man-made sole. Leather lining",
color: "Burgundy",
price: 189.98, 
id:"03", 
images:[
  "https://aa210.github.io/SM3a.png",
  "https://aa210.github.io/SM3b.png",
  "https://aa210.github.io/SM3c.png"
], 
//http://www.stevemadden.com/product/WOMENS/Pumps/WICKET/c/2163/sc/2213/239622.uts?selectedColor=BURGUNDY-VELVET 
//reviews:[{}] 

},
{name: "Lordis Platform",
description: "Open-toe bootie worthy of obsession! Try it with a crop top, a pencil skirt, and sleek bun. Suede upper material. 3.25 inch heel height. Man-made lining. Inside zipper",
color: "Black",
price: 259.98,
id:"04", 
images:[
  "https://aa210.github.io/SM4a.png",
  "https://aa210.github.io/SM4b.png",
  "https://aa210.github.io/SM4c.png"
], 
//http://www.stevemadden.com/product/PENINA/237018.uts?&selectedColor=SIDE&$MR-THUMBCERTONA$ 
//reviews:[{}]  
},
{name: "Zabby Platform",
description: "Perfect your shoe collection with platform heels that reach to the stars! Open back and peep toe designed for comfort. Leather upper material. 4.75 inch heel height. Man-made sole",
color: "Sand",
price: 249.98, 
id:"05", 
images:[
  "https://aa210.github.io/SM5a.png",
  "https://aa210.github.io/SM5b.png",
  "https://aa210.github.io/SM5c.png"
],
//http://www.stevemadden.com/product/KERSTEN/240008.uts
//reviews:[{}] 
},
{name: "Gretel Knee Boot",
description: "This over-the-knee boot is essential for fall. Try Gretel with a sweater dress for a cozy look! Suede upper material. 2.5 inch heel height. Man-made sole. 21 inch shaft height",
color: "Olive",
price: 219.98, 
id:"06", 
images:[
  "https://aa210.github.io/SM6a.png",
  "https://aa210.github.io/SM6b.png",
  "https://aa210.github.io/SM6c.png"
],
//http://www.stevemadden.com/product/ORLA/240140.uts
//reviews:[{}] 
}
];  
 })();


  
