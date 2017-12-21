
// alert("Hello");

$(document).ready(
  $(window).on("scroll", function() {
    if ($(window).width() < 768) {
        if($(window).scrollTop() > 500) {
          $(".navbar-dark .navbar-nav .nav-link").addClass("active");
        } else if ($(window).scrollTop() > 150){
          $(".logo-signature h6").addClass("active")
        } else {
          $(".navbar-dark .navbar-nav .nav-link").removeClass("active");
          $(".logo-signature h6").removeClass("active")
        }
    } else if ($(window).width() > 768){
      if($(window).scrollTop() > 700) {
        $(".navbar-dark .navbar-nav .nav-link").addClass("active");
      } else if ($(window).scrollTop() > 200){
        $(".logo-signature h6").addClass("active")
      } else {
        $(".navbar-dark .navbar-nav .nav-link").removeClass("active");
        $(".logo-signature h6").removeClass("active")
      }
    }
  })
)
