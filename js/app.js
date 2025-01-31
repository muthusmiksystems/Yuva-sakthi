var $ = jQuery.noConflict();
!(function (e, t, a) {
  a(e),
    a(t).on("change", ".form-filter", function () {
      var t = "";
      a(".form-filter input:checked").each(function () {
        t +=
          "" === t ? a(this).data("category") : "," + a(this).data("category");
      }),
        a.ajax({
          url: e.location.href,
          type: "GET",
          data: {
            choices: t,
          },
          success: function (e) {
            var t = a(e).filter(".filter-output").html();
            a(".filter-output").html(t);
          },
        });
    }),
    a(t).contextmenu(function () {
      return !1;
    }),
    a(t).ready(function () {
      a("body").bind("cut copy paste", function (e) {
        e.preventDefault();
      });
    }),
    a(t).keydown(function (e) {
      if (
        123 === e.which ||
        (e.ctrlKey && 85 === e.keyCode) ||
        (e.ctrlKey && e.shiftKey && 73 === e.keyCode)
      )
        return !1;
    });
})(window, document, window.jQuery),
  jQuery(document).ready(function (e) {
    $(".bt_contact_form div").hasClass("bt_contact_form_div") &&
      $("#contactUs").on("submit", function (e) {
        var t = $("#cf_name").val(),
          a = $("#c_phone").val(),
          s = $("#c_email").val();
        if ("" != t && "" != s && "" != a) {
          var o = $(this).serialize();
          $.ajax({
            type: "POST",
            url: "contact-us",
            data: o,
            success: function () {
              $(".bt_contact_form_div").html("<div id='message'></div>"),
                $("#message")
                  .html("<h2>Contact Form Submitted!</h2>")
                  .append("<p>We will be in touch soon.</p>")
                  .hide()
                  .fadeIn(1500, function () {});
            },
          }),
            e.preventDefault();
        } else alert("Please fill all the field !");
      }),
      $(".spcial").click(function () {
        "#" == e(".spcial").attr("href") &&
          alert("Select any 3 course and click Enroll now");
      }),
      e(".special_amount>ins").hide(),
      e(".spcial").removeAttr("target"),
      e(".special_amount>del").hide(),
      e("input[name='trending']").change(function (t) {
        var a = [],
          s = 0;
        if (
          (e.each(e("input[name='trending']:checked"), function () {
            a.push(e(this).val()),
              (s += parseFloat(e(this).attr("data-coursefee")));
          }),
          e(".special_course>p").text("Selected Courses: " + a.join(", ")),
          e(".special_amount>del").text(s),
          e("input[name='trending']:checked").length > 3)
        )
          e(this).prop("checked", !1),
            alert("You can select maximum 3 Courses!!");
        else if (3 == e("input[name='trending']:checked").length) {
          e(".special_amount>ins").text("24999");
          var o = e.base64.encode(
            "24999-2021-" + e(this).attr("data-courseid") + "-" + a
          );
          e(".spcial").attr("href", "" + o),
            e(".spcial").attr("target", "_blank");
        } else
          0 == e("input[name='trending']:checked").length
            ? (e(".special_course>p").hide(),
              e(".special_amount>ins").hide(),
              e(".special_amount>del").hide(),
              e(".spcial").attr("href", "#"),
              e(".spcial").removeAttr("target"))
            : (e(".special_course>p").show(),
              e(".special_amount>ins").show(),
              e(".special_amount>del").show(),
              e(".special_amount>ins").text(""),
              e(".spcial").attr("href", "#"),
              e(".spcial").removeAttr("target"));
      }),
      $("#entoggle").click(function (e) {
        e.preventDefault(), $("#paymentBtns").slideToggle("slow");
      }),
      $("#entoggle1").click(function (e) {
        e.preventDefault(), $("#paymentBtns1").slideToggle("slow");
      }),
      $(".spclbg").click(function () {
        "#" == e(".spclbg").attr("href") &&
          alert("Select any 3 course and click Enroll now");
      }),
      e(".special_amount_al>ins").hide(),
      e(".alumni_foobtn a").fadeOut(),
      e(".special_amount_al>del").hide(),
      e(".spclbg").removeAttr("target"),
      e("input[name='aluminioff']").change(function (t) {
        var a = [],
          s = 0;
        if (
          (e.each(e("input[name='aluminioff']:checked"), function () {
            a.push(e(this).val()),
              (s += parseFloat(e(this).attr("data-coursefee")));
          }),
          e(".special_amount_al>del").text(s),
          e("input[name='aluminioff']:checked").length > 3)
        )
          e(this).prop("checked", !1),
            alert("You can select maximum 3 Courses!!");
        else if (1 == e("input[name='aluminioff']:checked").length) {
          e(this).siblings("label").html("Selected"),
            e(".special_amount_al>ins").show(),
            e(".special_amount_al>del").show(),
            e(".alumni_foobtn a").fadeIn(),
            e(".alumni_bottom").fadeIn(),
            e(".special_course_al>p").show(),
            e(".special_course_al>p").text("Selected Courses: " + a.join(", ")),
            e(".special_amount_al>ins").text("6499");
          var o = e.base64.encode(
            "6499-2021-" + e(this).attr("data-courseid") + "-" + a
          );
          e(".spclbg").attr("href", "" + o),
            e(".spclbg").attr("target", "_blank");
        } else
          2 == e("input[name='aluminioff']:checked").length
            ? (e(this).siblings("label").html("Selected"),
              e(".special_course_al>p").text(
                "Selected Courses: " + a.join(", ")
              ),
              e(".special_amount_al>ins").show(),
              e(".special_amount_al>del").show(),
              e(".alumni_foobtn a").show(),
              e(".special_course_al>p").show(),
              e(".special_amount_al>ins").text("12998"),
              (o = e.base64.encode(
                "12998-2021-" + e(this).attr("data-courseid") + "-" + a
              )),
              e(".spclbg").attr("href", "" + o),
              e(".spclbg").attr("target", "_blank"))
            : 3 == e("input[name='aluminioff']:checked").length
            ? (e(this).siblings("label").html("Selected"),
              e(".special_course_al>p").text(
                "Selected Courses: " + a.join(", ")
              ),
              e(".special_amount_al>ins").show(),
              e(".special_amount_al>del").show(),
              e(".special_course_al>p").show(),
              e(".alumni_foobtn a").show(),
              e(".special_amount_al>ins").text("19497"),
              (o = e.base64.encode(
                "19497-2021-" + e(this).attr("data-courseid") + "-" + a
              )),
              e(".spclbg").attr("href", "" + o),
              e(".spclbg").attr("target", "_blank"))
            : 0 == e("input[name='aluminioff']:checked").length
            ? (e(".special_course_al>p").hide(),
              e(".special_amount_al>ins").hide(),
              e(".alumni_foobtn a").fadeOut(),
              e(this).siblings("label").html("Select Course"),
              e(".special_amount_al>del").hide(),
              e(".spclbg").attr("href", "#"),
              e(".spclbg").removeAttr("target"))
            : (e(".special_course_al>p").show(),
              e(".special_amount_al>ins").show(),
              e(".special_amount_al>del").show(),
              e(".special_amount_al>ins").text(""),
              e(".spclbg").attr("href", "#"),
              e(".spclbg").removeAttr("target"));
      }),
      e("input[name='masteraluminioff']").change(function (t) {
        var a = [],
          s = 0;
        if (
          (e.each(e("input[name='masteraluminioff']:checked"), function () {
            a.push(e(this).val()),
              (s += parseFloat(e(this).attr("data-coursefee")));
          }),
          e(".special_amount_al>del").text(s),
          e("input[name='masteraluminioff']:checked").length > 1)
        )
          e(this).prop("checked", !1),
            alert("You can select maximum 1 Courses!!");
        else if (1 == e("input[name='masteraluminioff']:checked").length) {
          e(this).siblings("label").html("Selected"),
            e(".special_amount_al>ins").show(),
            e(".special_amount_al>del").show(),
            e("#masterbtn a").fadeIn(),
            e(".alumni_bottom").fadeIn(),
            e(".special_course_al>p").show(),
            e(".special_course_al>p").text("Selected Courses: " + a.join(", ")),
            e(".special_amount_al>ins").text("24999");
          var o = e.base64.encode(
            "24999-2021-" + e(this).attr("data-courseid") + "-" + a
          );
          e(".spclbg").attr("href", "" + o),
            e(".spclbg").attr("target", "_blank");
        } else
          0 == e("input[name='masteraluminioff']:checked").length
            ? (e(".special_course_al>p").hide(),
              e(".special_amount_al>ins").hide(),
              e(".alumni_foobtn a").fadeOut(),
              e(this).siblings("label").html("Select Course"),
              e(".special_amount_al>del").hide(),
              e(".spclbg").attr("href", "#"),
              e(".spclbg").removeAttr("target"))
            : (e(".special_course_al>p").show(),
              e(".special_amount_al>ins").show(),
              e(".special_amount_al>del").show(),
              e(".special_amount_al>ins").text(""),
              e(".spclbg").attr("href", "#"),
              e(".spclbg").removeAttr("target"));
      }),
      $("#one, #myDropdown").click(function (e) {
        $(".jb_role").show(),
          $(".tcc").hide(),
          $(".tm").hide(),
          e.stopPropagation();
      }),
      $("#two, #myDropdown1").click(function (e) {
        $(".tcc").show(),
          $(".jb_role").hide(),
          $(".tm").hide(),
          e.stopPropagation();
      }),
      $("#three, #myDropdown2").click(function (e) {
        $(".tm").show(),
          $(".jb_role").hide(),
          $(".tcc").hide(),
          e.stopPropagation();
      }),
      $("body").click(function (e) {
        $(e.target).is(".jb_role, .tcc, .tm") ||
          ($(".jb_role").hide(), $(".tcc").hide(), $(".tm").hide());
      }),
      $(function () {
        setTimeout(function () {
          $(".corp_hire").show();
        }, 4e3);
      }),
      $(".corp_hireclose").click(function () {
        $(".corp_hire").fadeOut("slow");
      }),
      $("#bt_free_flip, #flip_place").click(function () {
        $("#bt_free_panel, #panel_place").slideToggle("slow");
      }),
      $(".bt_aca_faq_acord .collapse").on("shown.bs.collapse", function () {
        $(this).parent().addClass("active");
      }),
      $(".bt_aca_faq_acord .collapse").on("hidden.bs.collapse", function () {
        $(this).parent().removeClass("active");
      }),
      $(".static_faqacordian .collapse").on("shown.bs.collapse", function () {
        $(this).parent().addClass("active");
      }),
      $(".static_faqacordian .collapse").on("hidden.bs.collapse", function () {
        $(this).parent().removeClass("active");
      }),
      screen.width > 768
        ? (e(".navbar-expand-lg .dropdown").hover(
            function () {
              e(this)
                .find(".dropdown-menu")
                .first()
                .stop(!0, !0)
                .delay(200)
                .slideDown();
            },
            function () {
              e(this)
                .find(".dropdown-menu")
                .first()
                .stop(!0, !0)
                .delay(200)
                .slideUp();
            }
          ),
          e(".navbar .dropdown > a").click(function () {
            location.href = this.href;
          }))
        : e(".dropdown-menu li a").on("click", function (t) {
            e(this).next("ul").toggle(),
              t.stopPropagation(),
              t.preventDefault(),
              e(".dropdown-item").click(function (t) {
                var a = e(this).attr("href");
                window.open(a, "_self");
              });
          }),
      e("#close-btn").click(function () {
        e("#search-overlay").fadeOut(), e("#search-btn").show();
      }),
      e("#search-btn").click(function () {
        e(this).hide(), e("#search-overlay").fadeIn();
      }),
      e(".fixed_widgets").hide(),
      e(".master_menu").hide(),
      e(".send_btn").attr("disabled", !0),
      e("#s").keyup(function () {
        0 != e(this).val().length
          ? e(".send_btn").attr("disabled", !1)
          : e(".send_btn").attr("disabled", !0);
      }),
      e("#branchid")
        .change(function () {
          e(".Bangalore").hide(),
            e("#branchid option:selected").each(function () {
              "Bangalore" == e(this).attr("value") &&
                (e(".Chennai").hide(), e(".Bangalore").show()),
                "Chennai" == e(this).attr("value") &&
                  (e(".Bangalore").hide(), e(".Chennai").show());
            });
        })
        .change(),
      e("#category option:first-child").attr("disabled", "disabled"),
      e("#category_id option:first-child").attr("disabled", "disabled"),
      e("#branchid option:first-child").attr("disabled", "disabled"),
      e("#static_common").owlCarousel({
        loop: !1,
        margin: 35,
        autoplay: !0,
        dots: !0,
        nav: !0,
        navText: [
          ' <span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      }),
      e("#master_course").owlCarousel({
        loop: !0,
        margin: 20,
        dots: !1,
        nav: !0,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      }),
      e("#trending_course").owlCarousel({
        loop: !0,
        margin: 20,
        dots: !1,
        nav: !0,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      }),
      e("#review_carousel").owlCarousel({
        loop: !0,
        margin: 10,
        autoplay: !0,
        nav: !1,
        dots: !0,
        center: !1,
        slideTransition: "linear",
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      }),
      e("#blogs").owlCarousel({
        loop: !0,
        margin: 30,
        dots: !1,
        nav: !0,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      }),
      e("#featuresliders").owlCarousel({
        loop: !0,
        margin: 10,
        autoplay: !0,
        nav: !0,
        dots: !1,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      }),
      e("#master_featuresliders").owlCarousel({
        loop: !0,
        margin: 10,
        autoplay: !0,
        nav: !1,
        dots: !1,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      }),
      e("#related_course").owlCarousel({
        loop: !0,
        margin: 10,
        autoplay: !0,
        nav: !0,
        dots: !1,
        center: !0,
        slideTransition: "linear",
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        },
      }),
      e("#related_blogs").owlCarousel({
        loop: !0,
        margin: 20,
        nav: !1,
        autoplay: !1,
        dots: !1,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      }),
      e("#frequent_combo").owlCarousel({
        loop: !1,
        margin: 30,
        dots: !1,
        nav: !1,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 2,
          },
        },
      }),
      e("#offer_carousel").owlCarousel({
        loop: !1,
        margin: 30,
        dots: !1,
        nav: !0,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      }),
      e("#similar_slider").owlCarousel({
        loop: !1,
        margin: 20,
        dots: !1,
        nav: !0,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      }),
      e("#homereviews").owlCarousel({
        loop: !1,
        margin: 30,
        mouseDrag: !0,
        touchDrag: !0,
        nav: !0,
        dotsEach: !1,
        navText: [
          ' <i class="fa fa-long-arrow-left" aria-hidden="true"></i>Prev',
          'Next <i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
        ],
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
      }),
      e("#homeyoutubereviews").owlCarousel({
        loop: !1,
        margin: 30,
        mouseDrag: !0,
        dots: !1,
        touchDrag: !0,
        autoplay: !1,
        nav: !0,
        dotsEach: !1,
        navText: [
          ' <span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      }),
      e("#onlinerecomened_slider").owlCarousel({
        loop: !1,
        margin: 20,
        mouseDrag: !0,
        touchDrag: !0,
        nav: !0,
        dotsEach: !1,
        navText: [
          ' <i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      }),
      e(".online_tabreview-carousel").owlCarousel({
        loop: !1,
        margin: 10,
        mouseDrag: !0,
        touchDrag: !0,
        nav: !0,
        dotsEach: !1,
        nav: !1,
        navText: [
          ' <i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
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
      }),
      e("#hiring_partner").owlCarousel({
        loop: !0,
        margin: 30,
        center: !0,
        nav: !1,
        dots: !1,
        autoplay: !0,
        navSpeed: 1500,
        slideTransition: "linear",
        smartSpeed: 1e3,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 6,
          },
        },
      }),
      e("#bt_hiresuccess").owlCarousel({
        loop: !0,
        margin: 10,
        autoplay: !1,
        dots: !1,
        slideTransition: "linear",
        smartSpeed: 1e3,
        nav: !0,
        navText: [
          ' <span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      }),
      e("#bt_videoreview").owlCarousel({
        loop: !0,
        margin: 50,
        autoplay: !0,
        nav: !0,
        navText: [
          ' <span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        dots: !1,
        center: !0,
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
      }),
      e("#bt_free_slider").owlCarousel({
        loop: !1,
        margin: 20,
        autoplay: !1,
        nav: !0,
        navText: [
          ' <span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        dots: !1,
        center: !1,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      }),
      e("#bt_academy_testimonial").owlCarousel({
        loop: !1,
        margin: 20,
        autoplay: !1,
        dots: !0,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      }),
      e("#recent_batches").owlCarousel({
        loop: !0,
        margin: 10,
        autoplay: !0,
        dots: !0,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      }),
      e("#recentlyplaced").owlCarousel({
        loop: !1,
        margin: 50,
        nav: !0,
        autoplay: !1,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      }),
      e("#ourclients").owlCarousel({
        loop: !1,
        margin: 50,
        nav: !1,
        autoplay: !0,
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
      }),
      e(".customized_tab .nav-tabs a").click(function () {
        e(this).tab("show");
      }),
      e("#s")
        .on("focus", function () {
          e("#datafetch").show(), e("#datafetch1").show();
        })
        .on("blur", function () {
          e("#datafetch").hide(), e("#datafetch1").hide();
        }),
      e("#datafetch").on("mousedown", function (e) {
        e.preventDefault();
      }),
      e("#datafetch1").on("mousedown", function (e) {
        e.preventDefault();
      }),
      e(
        ".secondary_menu ul li a, .download_btn a, .masterpgm_menus ul li a, .mwpvk, .gettchbtn, .bt_alumnibtn,.bt-trndbtn, .bt_hire_btnone, .bt_aca_btn, .static_secondmenu ul li a, .Blistitems a, .stbtn"
      ).click(function (t) {
        t.preventDefault();
        var a = e(e(this).attr("href")).offset().top;
        e("body, html").animate(
          {
            scrollTop: a,
          },
          900
        );
      }),
      e(".left_tutbox li a").click(function (t) {
        var a = e(e(this).attr("href")).offset().top;
        e("body, html").animate(
          {
            scrollTop: a,
          },
          900
        );
      }),
      e("#toTop").click(function () {
        e("html, body").animate(
          {
            scrollTop: 0,
          },
          1e3
        );
      }),
      screen.width < 767 &&
        e(window).scroll(function () {
          var t = e(
              ".special_offtitle, #faq, #placed_section, .bt_homereview"
            ).offset().top,
            a = e(".special_offtitle, #faq, .bt_homereview").outerHeight(),
            s = e(window).height();
          e(this).scrollTop() > t + a - s
            ? e(".mobile_spclbtn").fadeOut(500)
            : e(".mobile_spclbtn").fadeIn(500);
        }),
      screen.width < 999 && e(".in_box, .ct_box").hide(),
      screen.width < 767 && e(".en_box").hide(),
      screen.width > 768 &&
        e(window).scroll(function () {
          e(window).scrollTop() > 1900
            ? (e(".contact-Enq").fadeIn("slow"),
              e(".fixed_widgets").fadeIn("slow"),
              e(".master_menu").fadeIn("slow"),
              clearTimeout(e.data(this, "scrollTimer")),
              e.data(
                this,
                "scrollTimer",
                setTimeout(function () {
                  e("#menu").fadeOut("slow");
                }, 1500)
              ))
            : (clearTimeout(e.data(this, "scrollTimer")),
              e(".contact-Enq").fadeOut("slow"),
              e(".fixed_widgets").fadeOut("slow"),
              e(".master_menu").fadeOut("slow"));
        }),
      e(".showmore").showMore({
        speedDown: 500,
        speedUp: 500,
        height: "660px",
        showText:
          'Show More <i class="fa fa-angle-down" aria-hidden="true"></i>',
        hideText: 'Show Less <i class="fa fa-angle-up" aria-hidden="true"></i>',
      }),
      e(".sitemap_page").showMore({
        speedDown: 500,
        speedUp: 500,
        height: "450px",
        showText:
          'Show More <i class="fa fa-angle-down" aria-hidden="true"></i>',
        hideText: 'Show Less <i class="fa fa-angle-up" aria-hidden="true"></i>',
      }),
      e(".hireauthor_decheight").showMore({
        speedDown: 500,
        speedUp: 500,
        height: "220px",
        showText:
          'Show More <i class="fa fa-angle-down" aria-hidden="true"></i>',
        hideText: 'Show Less <i class="fa fa-angle-up" aria-hidden="true"></i>',
      }),
      e(".content-box > p").showMore({
        speedDown: 500,
        speedUp: 500,
        height: "130px",
        showText:
          'Show More <i class="fa fa-angle-down" aria-hidden="true"></i>',
        hideText: 'Show Less <i class="fa fa-angle-up" aria-hidden="true"></i>',
      }),
      e(".testimonial-content-inner > p").showMore({
        speedDown: 500,
        speedUp: 500,
        height: "110px",
        showText:
          'Show More <i class="fa fa-angle-down" aria-hidden="true"></i>',
        hideText: 'Show Less <i class="fa fa-angle-up" aria-hidden="true"></i>',
      }),
      e(".freecourse_show").showMore({
        speedDown: 500,
        speedUp: 500,
        height: "450px",
        showText:
          'Show More <i class="fa fa-angle-down" aria-hidden="true"></i>',
        hideText: 'Show Less <i class="fa fa-angle-up" aria-hidden="true"></i>',
      }),
      e(".bt_advisor_content").showMore({
        speedDown: 500,
        speedUp: 500,
        height: "220px",
        showText: "Read More",
        hideText: "Read Less",
      }),
      e(".roundedBoxBlue").showMore({
        speedDown: 500,
        speedUp: 500,
        height: "100px",
        showText: "Read More >>",
        hideText: "Read Less",
      }),
      e(".static_projectdesc").showMore({
        speedDown: 500,
        speedUp: 500,
        height: "150px",
        showText: "Read More",
        hideText: "Read Less",
      }),
      e(".static_instructor_desc").showMore({
        speedDown: 800,
        speedUp: 800,
        height: "300px",
        showText: 'Show More <i class="fa fa-angle-down"></i>',
        hideText: 'Show Less <i class="fa fa-angle-up"></i>',
      }),
      e(".static_tootlscoverd").showMore({
        speedDown: 800,
        speedUp: 800,
        height: "260px",
        showText: 'Show More <i class="fa fa-angle-down"></i>',
        hideText: 'Show Less <i class="fa fa-angle-up"></i>',
      }),
      e(".card_description").showMore({
        speedDown: 800,
        speedUp: 800,
        height: "130px",
        showText: 'Show More <i class="fa fa-angle-down"></i>',
        hideText: 'Show Less <i class="fa fa-angle-up"></i>',
      }),
      e(".training_typs > select")
        .change(function () {
          e(this)
            .find("option:selected")
            .each(function () {
              var t = e(this).attr("value");
              if (t) {
                e(".boxes")
                  .not("." + t)
                  .hide(),
                  e("." + t).show();
                var a = e("." + t + " .inneroffer_ins").text(),
                  s = e.base64.encode(
                    a +
                      "-" +
                      e.datepicker.formatDate("yy-mm-dd", new Date()) +
                      "-" +
                      e(".coursepagesingle").attr("data-bemscourseid") +
                      "-" +
                      e(".coursepagesingle").attr("data-bemscoursename")
                  );
                e(".npkh").attr("href", "" + s);
              } else e(".boxes").hide(), e(".npkh").attr("href", "#");
            });
        })
        .change(),
      e(".npkh").click(function () {
        "#" == e(".npkh").attr("href") && alert("select Training Type");
      });
  }),
  $(window).scroll(function () {
    var e = $(".footer, .inn_banner, #faq").offset().top,
      t = $(".footer, .inn_banner, #faq").outerHeight(),
      a = $(window).height();
    $(this).scrollTop() > e + t - a
      ? $("#toTop").fadeIn(500)
      : $("#toTop").fadeOut(500);
  });
var header = document.getElementById("myHeader");
if (null != header && screen.width > 768) {
  window.onscroll = function () {
    myFunction();
  };
  var sticky = header.offsetTop;

  function myFunction() {
    window.pageYOffset > sticky
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  }
}
var lastId,
  resizeTimer,
  topMenu = $(".secondary_menu ul, .masterpgm_menus ul, .static_secondmenu ul"),
  topMenuHeight = topMenu.outerHeight() + 15,
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function () {
    var e = $($(this).attr("href"));
    if (e.length) return e;
  });

function demoFromHTML() {
  var e = new jsPDF("p", "pt", "letter");
  (source = $("#content")[0]),
    e.addImage(
      "data:image/png;base64,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",
      "JPEG",
      200,
      15,
      185,
      40
    ),
    (specialElementHandlers = {
      "#bypassme": function (e, t) {
        return !0;
      },
    }),
    (margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 522,
    }),
    e.fromHTML(
      source,
      margins.left,
      margins.top,
      {
        width: margins.width,
        elementHandlers: specialElementHandlers,
      },
      function (t) {
        e.save("course_syllabus.pdf");
      },
      margins
    );
}

function tabControl() {
  var e = $(".tabbed-content").find(".tabs");
  e.is(":visible")
    ? e.find("a").on("click", function (e) {
        e.preventDefault();
        var t = $(this).attr("href"),
          a = $(this).parents(".tabs"),
          s = a.find("a"),
          o = a.parents(".tabbed-content").find(".item");
        s.removeClass("active"),
          o.removeClass("active"),
          $(this).addClass("active"),
          $(t).addClass("active");
      })
    : $(".item").on("click", function () {
        var e = $(this).parents(".tabbed-content"),
          t = $(this).attr("id"),
          a = e.find(".item");
        e.find(".tabs li").removeClass("active"),
          a.removeClass("active"),
          $(this).addClass("active"),
          e.find('.tabs a[href$="#' + t + '"]').addClass("active");
      });
}
$(window).scroll(function () {
  var e = $(this).scrollTop() + topMenuHeight,
    t = scrollItems.map(function () {
      if ($(this).offset().top < e) return this;
    }),
    a = (t = t[t.length - 1]) && t.length ? t[0].id : "";
  lastId !== a &&
    ((lastId = a),
    menuItems
      .parent()
      .removeClass("active")
      .end()
      .filter("[href='#" + a + "']")
      .parent()
      .addClass("active"));
}),
  $("#youtubereviewModal").on("shown.bs.modal", function (e) {
    var t = $(e.relatedTarget);
    if ("ReviewVideo" == t.data("reviewevent")) {
      var a = t.data("link");
      $("#youtubeReviewVideo").html(a);
    }
  }),
  $("#youtubereviewModal").on("hide.bs.modal", function (e) {
    $("#youtubeReviewVideo").html("");
  }),
  $("#allcourses div").hasClass("onlinerecomened_filter_title") &&
    (jQuery,
    $(".ah-tab-wrapper").horizontalmenu({
      itemClick: function (e) {
        return (
          $(".ah-tab-content-wrapper .ah-tab-content").removeAttr(
            "data-ah-tab-active"
          ),
          $(
            ".ah-tab-content-wrapper .ah-tab-content:eq(" + $(e).index() + ")"
          ).attr("data-ah-tab-active", "true"),
          !1
        );
      },
    })),
  tabControl(),
  $(window).on("resize", function (e) {
    clearTimeout(resizeTimer),
      (resizeTimer = setTimeout(function () {
        tabControl();
      }, 250));
  }),
  (function () {
    for (
      var e = document.getElementsByClassName("youtube-player"), t = 0;
      t < e.length;
      t++
    )
      e[t].onclick = function () {
        var e = document.createElement("iframe");
        for (
          e.setAttribute(
            "src",
            "//www.youtube.com/embed/" +
              this.dataset.id +
              "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&rel=" +
              this.dataset.related +
              "&controls=" +
              this.dataset.control +
              "&showinfo=" +
              this.dataset.info
          ),
            e.setAttribute("frameborder", "0"),
            e.setAttribute("id", "youtube-iframe"),
            e.setAttribute(
              "style",
              "width: 100%; height: 100%; position: absolute; top: 0; left: 0;"
            ),
            1 == this.dataset.fullscreen &&
              e.setAttribute("allowfullscreen", "");
          this.firstChild;

        )
          this.removeChild(this.firstChild);
        this.appendChild(e);
      };
  })(),
  (jQuery.event.special.touchstart = {
    setup: function (e, t, a) {
      this.addEventListener("touchstart", a, {
        passive: !0,
      });
    },
  });
