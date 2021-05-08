$(document).ready(function () {
   $('.carousel__about').owlCarousel({
       margin :30,
       loop:false,
       autoplay:true,

    responsive :{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        },
    }
   });  
   $('.owlcousel__partner').owlCarousel({
       margin :30,
       loop:false,
       autoplay:true,

    responsive :{
        0:{
            items:3,
            nav:true
        },
        600:{
            items:5,
            nav:false
        },
        1000:{
            items:7,
            nav:false
        },
    }
   });  
});