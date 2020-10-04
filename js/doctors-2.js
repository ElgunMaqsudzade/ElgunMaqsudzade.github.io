function pageLoad() {
  $(window).on("load", function () {
    $(".pageload").fadeOut();
  });
}
pageLoad();
$(function () {
  function navBarResp() {
    /* This is my last time which i am using fadeIn fadeOut width bootstrap dropdown.
    They are not going well with each other.  */
    if (!($(window).width() <= 991)) {
      $(".dropdown").addClass("d-hover");
    } else {
      $(".dropdown").removeClass("d-hover");
    }
    $(window).resize(function () {
      if (!($(window).width() <= 991)) {
        $(".dropdown").addClass("d-hover");
      } else {
        $(".dropdown").removeClass("d-hover");
      }
    });
    $(".dropdown").hover(
      function () {
        if ($(".dropdown").hasClass("d-hover")) {
          $(this).find(".menu").fadeIn(300);
          $(this).find(".dropdown-box").fadeIn(100);
        } else {
          $(".menu").removeAttr("style");
          $(".dropdown-menu").removeAttr("style");
        }
      },
      function () {
        if ($(".dropdown").hasClass("d-hover")) {
          $(this).find(".menu").fadeOut(200);
          $(this).find(".dropdown-box").fadeOut(150);
        } else {
          $(".menu").removeAttr("style");
          $(".dropdown-menu").removeAttr("style");
        }
      }
    );
  }
  navBarResp();
  function fadeIn() {
    $(".tab-content").addClass("animationUp");
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
