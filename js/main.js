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
  $(".owl-carousel").owlCarousel({
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
  function appointDrDown() {
    $(".items").click(function () {
      $(".items").removeClass("selected-option");
      $(this).addClass("selected-option");
      $(this).parent().prev().text($(this).text());
    });
  }
  appointDrDown();
});
