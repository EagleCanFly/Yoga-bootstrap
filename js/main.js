$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:200,
        responsive:{
            600:{
                items:2
            }
        }
    });
});