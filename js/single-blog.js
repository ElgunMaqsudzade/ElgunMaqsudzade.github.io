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
    $(".single-blog").addClass("animationSingleBlogUp");
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
  function blogComments() {
    let monthNamesS = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let set = true;
    function setId() {
      if (!localStorage.getItem("set")) {
        set = false;
        localStorage.setItem("userId", Math.random().toFixed(3) * 1000);
        localStorage.setItem("set", set);
      }
    }
    setId();
    function replyComment(el) {
      $(el).parents(
        ".com-card"
      ).after(`<div class="com-card reply"><div class="r-inp-holder"><textarea name="reply-inp"
      placeholder="@${$(el)
        .parent()
        .siblings(".com-title")
        .children("h5.first")
        .text()}"
      type="text" ></textarea>
      <div class="col-12 btn-holder">
      <button class="rp-cancel">Cancel</button>
      <button class="rp-send">Send</button>
      </div>
      </div></div>`);
      $(el).parents(".com-card").next().addClass("show");
    }

    $(".com-cards").on("click", ".com-reply-btn", function () {
      let textarea = $(this).parents(".com-card").next().find("textarea");
      if (!$(this).parents(".com-card").hasClass("reply")) {
        if (!$(this).parents(".com-card").next().hasClass("show")) {
          replyComment(this);
          textarea.focus();
        } else {
          textarea.focus();
          textarea.css("animation", "inpCol 0.5s");
          setTimeout(() => {
            $("textarea").removeAttr("style");
          }, 300);
        }
      } else {
        if (!$(this).parents(".com-card").next().hasClass("show")) {
          replyComment(this);
          $(this).parents(".com-card").next().addClass("reply");
          textarea.focus();
        } else {
          textarea.focus();
          textarea.css("animation", "inpCol 0.5s");
          setTimeout(() => {
            $("textarea").removeAttr("style");
          }, 300);
        }
      }
    });
    $(".com-cards").on("keyup", "textarea", function () {
      if (!($(this).val() == 0)) {
        $(this).next().find(".rp-send").addClass("btnActive");
        $(".rp-send").click(function () {});
      } else {
        $(this).next().find(".rp-send").removeClass("btnActive");
      }
    });
    $(".com-cards").on("click", ".rp-cancel", function () {
      $(this).parents(".com-card").remove();
    });
    $(".com-cards").on("click", ".rp-send", function () {
      if (!($("[name='reply-inp']").val() == 0)) {
        $(this).parents(".com-card").removeClass("show");
        $(this)
          .parents(".com-card")
          .html(
            `<div class="img-holder">
        <img
          class="img-fluid"
          src="/images/User.png"
          alt=""
        />
      </div>
      <div class="com-content">
        <div class="com-title">
          <h5 class="first">Guest${localStorage.getItem("userId")}</h5>
          <h5>${new Date().getDate()} ${
              monthNamesS[new Date().getMonth()]
            }, ${new Date().getFullYear()}</h5>
        </div>
        <div class="com-body">
          <p><a class="suitable" href="#">@${$(this)
            .parents(".com-card")
            .prev()
            .find("h5.first")
            .text()}</a> ${$(this)
              .parents(".r-inp-holder")
              .find("[name='reply-inp']")
              .val()}</p>
        </div>
        <div class="btn-box">
          <button class="com-reply-btn"><i class="fa fa-reply"></i>REPLY</button>
        </div>
      </div>`
          );
      }
    });
    $("#comment-form").submit(function (e) {
      e.preventDefault();
      if (!($(".com-text").val() == 0)) {
        let myCard = document.createElement("div");
        $(myCard).addClass("com-card");
        $(myCard).html(
          `<div class="img-holder">
          <img
            class="img-fluid"
            src="/images/User.png"
            alt=""
          />
        </div>
        <div class="com-content">
          <div class="com-title">
            <h5 class="first">${$("[name='name']").val()}</h5>
            <h5>${new Date().getDate()} ${
            monthNamesS[new Date().getMonth()]
          }, ${new Date().getFullYear()}</h5>
          </div>
          <div class="com-body">
            <p>${$(".com-text").val()}</p>
          </div>
          <div class="btn-box">
            <button class="com-reply-btn"><i class="fa fa-reply"></i>REPLY</button>
          </div>
        </div>`
        );
        $(".com-cards").prepend(myCard);
        $("input").val("");
        $(".com-text").val("");
        myCard.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else {
        $(".com-text").css("border-color", "red");
        setTimeout(() => {
          $(".com-text").css("border-color", "#e7e7e7");
        }, 1000);
      }
    });
  }
  blogComments();
});
