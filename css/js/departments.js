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
  function fadeIn() {
    let callOnce1 = true;
    $(window).scroll(function () {
      if (document.documentElement.scrollTop > 1300 && callOnce1) {
        $(".appointment-form").addClass("animationRight");
        callOnce1 = false;
      }
    });
  }
  fadeIn();
  //   counter up function
  function counterUp() {
    //   for terminating function over first calling
    counterUp = function () {};
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    let arr = [];
    document.querySelectorAll(".timer").forEach((element) => {
      let target = element.getAttribute("data-to");
      let speed = element.getAttribute("data-speed");
      arr.push(target / speed);
    });
    let updateCount = () => {
      if (Math.ceil(count1) < $(".timer1").data("to")) {
        count1 = count1 + arr[0] / 10;
        $(".timer1").text(Math.round(count1));
        setTimeout(updateCount, 100);
      }
      if (Math.ceil(count2) < $(".timer2").data("to")) {
        count2 = count2 + arr[1] / 10;
        $(".timer2").text(Math.round(count2));
      }
      if (Math.ceil(count3) < $(".timer3").data("to")) {
        count3 = count3 + arr[2] / 10;
        $(".timer3").text(Math.round(count3));
      }
      if (Math.ceil(count4) < $(".timer4").data("to")) {
        count4 = count4 + arr[3] / 10;
        $(".timer4").text(Math.round(count4));
      }
    };

    updateCount();
  }
  //   counterUp function calling
  $(window).scroll(function () {
    if (document.documentElement.scrollTop < 1000) {
      counterUp();
    }
  });
});
