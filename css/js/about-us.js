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
  function responseChooseUs() {
    /* First i wrote choose-us-2 section in the container-fluid because example layout was like that.
     I could use another way but i just wrote in this way. And than i needed return it into the container
      form that is why i wrote this function*/
    if ($(window).width() <= 991.98) {
      $(".response").removeClass("container-fluid");
      $(".response").addClass("container");
    } else {
      $(".response").removeClass("container");
      $(".response").addClass("container-fluid");
    }
    $(window).resize(function () {
      if ($(window).width() <= 991.98) {
        $(".response").removeClass("container-fluid");
        $(".response").addClass("container");
      } else {
        $(".response").removeClass("container");
        $(".response").addClass("container-fluid");
      }
    });
  }
  responseChooseUs();
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

  function carousel1() {
    $(".owl-js1").owlCarousel({
      loop: false,
      margin: 30,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
  }
  carousel1();
  function carousel2() {
    $(".owl-js2").owlCarousel({
      loop: true,
      margin: 30,
      responsive: {
        0: {
          items: 1,
        },
        992: {
          items: 2.9,
          dotsEach: 2,
        },
        1200: {
          items: 2.58,
          dotsEach: 2,
        },
      },
    });
  }
  carousel2();
});
