$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $(".header-container").addClass("darkHeader");
  } else {
    $(".header-container").removeClass("darkHeader");
  }
});
