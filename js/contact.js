$(function () {
  function pageLoad() {
    $(window).on("load", function () {
      $(".pageload").fadeOut();
    });
  }
  pageLoad();
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
