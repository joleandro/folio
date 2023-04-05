// materialized
const getTarget = document.querySelectorAll('.sidenav');
M.Sidenav.init(getTarget);

const getMedia = document.querySelectorAll('.slider');
M.Slider.init(getMedia, {
    indicators: false,
    interval:3000
});

const getParallax = document.querySelectorAll('.parallax');
M.Parallax.init(getParallax);

const getScroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(getScroll);

const getMaterialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(getMaterialbox);


// javascript dom
$(document).ready( () =>{
  $(window).scroll(function(){
     // sticky navbar on scroll script
     if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
  }else{
      $('.navbar').removeClass("sticky");
  }
  
  // scroll-up button show/hide script
  if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
  }else{
      $('.scroll-up-btn').removeClass("show");
  }
  });
  
  // slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });
  

  let typed = new Typed(".typing", {
    strings: ["My","PORTOFOLIO"],
    typeSpeed: 300,
    backSpeed: 60,
    loop:true
  });


});

