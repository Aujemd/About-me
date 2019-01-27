$(document).ready(function(){
    var altura = $('.nav-menu').offset().top;
    $(window).on('scroll', function(){
        if($(window).scrollTop()>altura){
            $('header').addClass('fixed');
        }else{
            $('header').removeClass('fixed');
        }
    });
});