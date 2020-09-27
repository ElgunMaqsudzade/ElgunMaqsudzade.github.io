$(function () {
  function drophover() {
    if ($(".dropdown").hasClass("d-hover")) {
      $(".dropdown").hover(
        function () {
          $(this).find(".menu").fadeIn(300);
          $(this).find(".dropdown-box").fadeIn(100);
          $(this).find(".d-toggle").attr("aria-expanded", "true");
        },
        function () {
          $(this).find(".menu").fadeOut(200);
          $(this).find(".dropdown-box").fadeOut(150);
          $(this).find(".d-toggle").attr("aria-expanded", "false");
        }
      );
    }
  }
  drophover();
  function banner() {
    $("#myCarousel").carousel({
      interval: 100000000000000,
    });
  }
  banner();
  $(".owl-js1").owlCarousel({
    loop: false,
    margin: 50,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".owl-js2").owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    dotsEach: 2,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 2.58,
      },
    },
  });
  function appointDrDown() {
    $(".items1").click(function () {
      $(".items1").removeClass("selected-option");
      $(this).addClass("selected-option");
      $(this).parent().prev().text($(this).text());
    });
    $(".items2").click(function () {
      $(".items2").removeClass("selected-option");
      $(this).addClass("selected-option");
      $(this).parent().prev().text($(this).text());
    });
  }
  appointDrDown();
});
