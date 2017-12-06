
// alert("Hello");
$(window).on("scroll", function() {
    if($(window).scrollTop() > 700) {
      $("a").addClass("active");
      // $("#logo").attr("src","/images/logo.jpg");
    } else {
      $("a").removeClass("active");
      // $("#logo").attr("src","/images/logowhite.jpg");
      // alert("white")
        //remove the background property so it comes transparent again (defined in your css)
        // $("header").removeClass("active");
    }
});
