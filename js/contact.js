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
    $(".contact-animation1").addClass("animationDown");
    $(".contact-animation2").addClass("animationUp");
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
