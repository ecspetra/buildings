$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $(".header-container").addClass("darkHeader");
  } else {
    $(".header-container").removeClass("darkHeader");
  }
});

$(document).ready(function () {
  $(".header__content__burger").click(function (event) {
    $(".header__content__burger, .header__content__navigation").toggleClass(
      "active-burger"
    );
    $("body").toggleClass("lock");
  });
});
