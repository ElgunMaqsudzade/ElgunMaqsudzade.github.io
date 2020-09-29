$(function () {
  function responsiveNess() {
    // If the responsiveness is less then 991.98px it will open nav-items as dropdown. But you should reload page as soos as you change responsiveness
    if ($(window).width() <= 991.98) {
      $(".dropdown").removeClass("d-hover");
    } else {
      $(".dropdown").addClass("d-hover");
    }
  }
  responsiveNess();
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
  function contactForm() {
    $("#contact-form").submit(function (e) {
      e.preventDefault();
      if (document.getElementById("email-2").checkValidity()) {
        $(".icon-holder").css("display", "block");
        setTimeout(() => {
          $(".icon-holder").css("display", "none");
        }, 1500);
        setTimeout(() => {
          if ($("#name-2").val() == "") {
            $(".empty").css("display", "block");
            setTimeout(() => {
              $(".empty").css("display", "none");
            }, 1500);
          } else {
            if ($("#phone-2").val() == "") {
              $(".fill").css("display", "block");
              setTimeout(() => {
                $(".fill").css("display", "none");
              }, 1500);
            } else {
              if ($("[name='comments']").val() == "") {
                $(".comments").css("display", "block");
                setTimeout(() => {
                  $(".comments").css("display", "none");
                }, 1500);
              } else {
                if (
                  !$("#name-2").val() == "" ||
                  !$("#phone-2").val() == "" ||
                  !$("[name='comments']").val() == ""
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
