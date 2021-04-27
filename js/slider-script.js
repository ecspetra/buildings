$(document).ready(function () {
  $(".hero-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    dotsClass: "hero-dots",
  });
  $(".gallery__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    dotsClass: "gallery-dots",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
