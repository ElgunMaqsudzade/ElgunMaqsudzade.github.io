$(function () {
  function pageLoad() {
    $(window).on("load", function () {
      $(".pageload").fadeOut();
    });
  }
  pageLoad();
  function navBarResp() {
    // If the responsiveness is less then 991.98px it will open nav-items as dropdown. But you should reload page as soos as you change responsiveness
    function drophover() {
      $(".dropdown").hover(
        function () {
          $(this).find(".menu").fadeIn(300);
          $(this).find(".dropdown-box").fadeIn(100);
        },
        function () {
          $(this).find(".menu").fadeOut(200);
          $(this).find(".dropdown-box").fadeOut(150);
        }
      );
    }
    if (!($(window).width() <= 991.98)) {
      drophover();
    }
    $(window).resize(function () {
      if (!($(window).width() <= 991.98)) {
        drophover();
      }
    });
  }
  navBarResp();
  function fadeIn() {
    $(".card1").addClass("animationBlogUp1");
    $(".card2").addClass("animationBlogUp2");
    $(".card3").addClass("animationBlogUp3");
  }
  fadeIn();
  function navbarButton() {
    $(".navbar-toggler").click(function () {
      if (!$(".navbar-toggler").hasClass("collapsed")) {
        $(this).children().removeClass("fa-times");
        $(this).children().addClass("fa-bars");
      } else {
        $(this).children().removeClass("fa-bars");
        $(this).children().addClass("fa-times");
      }
    });
  }
  navbarButton();
});
