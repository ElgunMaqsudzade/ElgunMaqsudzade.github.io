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
    /* First i wrote choose-us section in the container-fluid because example layout was like that.
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
  function fadeIn() {
    let callOnce1 = true;
    let callOnce2 = true;
    let callOnce3 = true;
    $(window).scroll(function () {
      if (document.documentElement.scrollTop > 2590 && callOnce1) {
        $(".appointment-form").addClass("animationRight");
        callOnce1 = false;
      }
      if (document.documentElement.scrollTop > 4530 && callOnce2) {
        $(".tab-content").addClass("animationUp");
        callOnce2 = false;
      }
      if (document.documentElement.scrollTop > 7150 && callOnce3) {
        $(".contact-animation1").addClass("animationDown");
        $(".contact-animation2").addClass("animationUp");
        callOnce3 = false;
      }
    });
  }
  fadeIn();

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
  function contactForm() {
    $("#contact-form").submit(function (e) {
      e.preventDefault();
      if (document.getElementById("email-2").checkValidity()) {
        $(".icon-holder").css("display", "block");
        setTimeout(() => {
          $(".icon-holder").css("display", "none");
        }, 1500);
        setTimeout(() => {
          if (+$("#name-2").val() == 0) {
            $(".empty").css("display", "block");
            setTimeout(() => {
              $(".empty").css("display", "none");
            }, 1500);
          } else {
            if (+$("#phone-2").val() == 0) {
              $(".fill").css("display", "block");
              setTimeout(() => {
                $(".fill").css("display", "none");
              }, 1500);
            } else {
              if (+$("[name='comments']").val() == 0) {
                $(".comments").css("display", "block");
                setTimeout(() => {
                  $(".comments").css("display", "none");
                }, 1500);
              } else {
                if (
                  !+$("#name-2").val() == 0 ||
                  !+$("#phone-2").val() == 0 ||
                  !+$("[name='comments']").val() == 0
                ) {
                  $(".error").css("display", "block");
                  setTimeout(() => {
                    $(".error").css("display", "none");
                  }, 1500);
                }
              }
            }
          }
        }, 1500);
      }
    });
  }
  contactForm();
});
