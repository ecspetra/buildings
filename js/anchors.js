$(function () {
  $(".contact-button").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".contacts-container").offset().top }, 1000);
    e.preventDefault();
  });
});
