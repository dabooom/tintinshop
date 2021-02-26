//전체페이지 커스터마이징 자바스크립트


var java = jQuery.noConflict(); //jQuery 버전 충돌방지 삽입

java(function(){

  // java('#da0New').addClass('pluginready')

  java('#mainBanner').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTImeout:200,
    autoplayHoverPause:true,
  })

  java('#da0New').owlCarousel({
    items:4,
    animateIn: 'flipInX',
    loop:true,
    autoplay:true,
    autoplayTImeout:800,
    autoplayHoverPause:true,
  })

});
