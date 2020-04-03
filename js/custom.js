$(function(){
  
  $('.count').counterUp({
    delay: 10,
    time: 1000
});  
     
    
$('.slider-area').slick({
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    prevArrow: '.prev-arrow',
    nextArrow: '.next-arrow'
    

});
    
    
//    SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300
});
    //==== Show or hide the sticky footer button
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});

//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1500);
});
    
    $(window).on('load', function(event) {
    $('.preloader').delay(500).fadeOut(500);
});
    
//    Sticky Menubar
    
$(window).on('scroll', function(event) {    
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
        $(".navigation").removeClass("sticky");
        
    } else{
        $(".navigation").addClass("sticky");
        
    }
});

});