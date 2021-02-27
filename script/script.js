$(document).ready(function(){



    //  start scrollTop
  $(function(){


    var scrollbutton = $("#scroll");

    $(window).scroll(function(){

        if ( $(this).scrollTop()>=300)
        {
            scrollbutton.show();
        }
        else
        {
            scrollbutton.hide();
        }
    });

    scrollbutton.click(function(){
        $("html,body").animate({ scrollTop : 0 } , 300);
    });
    

  });  






  // wooooooooow
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
// woooooooooooow




// counter
$(".num").counterUp({
  delay:10,
  time:5000
});
// counter



// cart details
$(".zoom").click(function(){
  $(".cart-fade").fadeIn();
});

$(".close").click(function(){
  $(".cart-fade").fadeOut();
});

var productImglarge = document.getElementById("largeImg");
var productImgSmall = document.getElementsByClassName("small-Img");

productImgSmall[0].onclick = function()
{
  productImglarge.src = productImgSmall[0].src;
}
productImgSmall[1].onclick = function()
{
  productImglarge.src = productImgSmall[1].src;
}
productImgSmall[2].onclick = function()
{
  productImglarge.src = productImgSmall[2].src;
}
// cart details



// // define products
//  let productDom = document.querySelector(".cards");

//  let products = [

//     {
//       id : 1,
//       title : "Chino skinny pants",
//       price : "200$",
//       size: "small",
//       imageUrl : "images/MEN7.webp",
//     },

//     {
//       id : 2,
//       title : "Chino skinny pants",
//       price : "250$",
//       size: "medium",
//       imageUrl : "images/MEN4.webp",
//     },

//     {
//       id : 3,
//       title : "Chino skinny pants",
//       price : "340$",
//       size: "large",
//       imageUrl : "images/MEN5.webp",
//     },

//     {
//       id : 4,
//       title : "Chino skinny pants",
//       price : "210$",
//       size: "small",
//       imageUrl : "images/MEN6.webp",
//     },

//  ];

//  function drawProductsUI() {
//    let productsUi = products.map( (item) => {

//     return `

//         <img class="img-responsive" src="${item.imageUrl}" >
//         <div class="content-overlay">
//           <p>${item.title}</p>
//           <i class="love far fa-heart"></i>
//           <i class="zoom fas fa-search-plus" ></i>
//         </div>
//         <h5>winter collection</h5>
//         <span>${item.price}</span><br>
//         <span><i class="fas fa-star"></i></span>
//         <span><i class="fas fa-star"></i></span>
//         <span><i class="fas fa-star"></i></span>
//         <span><i class="fas fa-star"></i></span>
//         <span><i class="fas fa-star-half-alt"></i></span>
//         <button class="btn">ADD TO CART<i class="fas fa-cart-plus"></i></button>

//     `;

//    });

//    productDom.innerHTML = productsUi;

//   }

// drawProductsUI();


function chekedloggedIn() {
  if ( localStorage.getItem("username") )
  {
    alert("okk");
  }
  else
  {
    window.location = "log.html";
  }
}


});
