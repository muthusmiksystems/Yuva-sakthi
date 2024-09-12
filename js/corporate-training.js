// Passive event listeners
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchstart", handle, {
      passive: !ns.includes("noPreventDefault"),
    });
  },
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchmove", handle, {
      passive: !ns.includes("noPreventDefault"),
    });
  },
};

$(document).ready(function (e) {
  $("#truste_slider").owlCarousel({
    loop: !0,
    margin: 30,
    autoplay: !0,
    dots: !1,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 8,
      },
    },
  });

  $("#corp_testimonials").owlCarousel({
    loop: !0,
    margin: 30,
    autoplay: !1,
    slideTransition: "linear",
    smartSpeed: 1000,
    dots: !0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 500) {
      $(".bt_whatsapp").fadeIn();
      $(".backtop").fadeIn();
    } else {
      $(".bt_whatsapp").fadeOut();
      $(".backtop").fadeOut();
    }
  });

  $(".backtop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  $(".cp_lmbtn, .corpexplore").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
  });

  $(window).load(function () {
    setTimeout(function () {
      $(".corp_hire").fadeIn("slow");
    }, 4000);
  });

  $(".corp_hireclose").click(function () {
    $(".corp_hire").fadeOut("slow");
  });
});
