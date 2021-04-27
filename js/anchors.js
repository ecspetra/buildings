$(function () {
  $(".contact-button").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".contacts-container").offset().top }, 1000);
    e.preventDefault();
  });
});

$(function () {
  $("#section-1").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".advantages-container").offset().top }, 1000);
    e.preventDefault();
  });
});

$(function () {
  $("#section-2").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".about-company-container").offset().top }, 1000);
    e.preventDefault();
  });
});
$(function () {
  $("#section-3").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".projects-container").offset().top }, 1000);
    e.preventDefault();
  });
});

$(function () {
  $("#section-4").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".gallery-container").offset().top }, 1000);
    e.preventDefault();
  });
});

$(function () {
  $("#section-5").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".contacts-container").offset().top }, 1000);
    e.preventDefault();
  });
});

$(function () {
  $("#section-6").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".footer__container").offset().top }, 1000);
    e.preventDefault();
  });
});

$(function () {
  $("#home-logo").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".hero-container").offset().top }, 1000);
    e.preventDefault();
  });
});
