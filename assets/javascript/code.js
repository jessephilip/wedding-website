// ---------- GLOBAL VARIABLES ----------
var dir = "assets/images";
var fileExtension = ".jpg";

// ---------- LOCATIONS ----------
var bridalShower = "assets/images/bridalShower/";
var carouselUL = $("#carouselUL");

// ---------- LOCATORS ----------

// root jCarousel
var rootJCarousel = $(".jcarousel");

// ---------- FUNCTIONS ----------
$(function() {
    $('.jcarousel').jcarousel({
        // Core configuration goes here
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});

$("#detailsButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});
