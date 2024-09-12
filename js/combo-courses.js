$(document).ready(function(e) {

    $('#our_clients').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: false,
        dots: true,
        navSpeed: 1500,
        slideTransition: 'linear',
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })


    $('#placedslider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        navSpeed: 1500,
        slideTransition: 'linear',
        smartSpeed: 1000,
        nav: true,
        navText: ['<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>'],
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })

    $("#review_testi").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        dots: true,
        navSpeed: 1500,
        slideTransition: 'linear',
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    $('#combo_recomend').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 5000,
        slideSpeed: 800,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    $(".combopay_btn").click(function() {
        if (e(".combopay_btn").attr("href") == "#") {
            alert("Select any 3 course and click Enroll now");
        }
    });

    e(".combopay_btn").removeAttr("target"),

        e(".combopay_btn").hide(),

        e("input[name='combooff']").change(function(t) {
            var o = [],
                i = 0;

            if ((e.each(e("input[name='combooff']:checked"), function() {
                        o.push(e(this).val()),
                            (i += parseFloat(e(this).attr("data-coursefee")));
                    }),

                    e(".combo_course_txt>p").text("Selected Courses: " + o.join(", ")),

                    e(".combo_amount_val>del").text(i),

                    e("input[name='combooff']:checked").length > 3)) e(this).prop("checked", !1),
                o.pop(),
                e(".combo_course_txt>p").text("Selected Courses: " + o.join(", ")),
                alert("You can select maximum 3 Courses!!");

            else if (1 == e("input[name='combooff']:checked").length) {
                e(this).siblings('label').html('Selected'),
                    e(".combo_amount_val>ins").show(),
                    e(".combo_amount_val>del").show(),
                    e(".combo_course_txt>p").show(),
                    e(".combopay_btn").show(),
                    e(".combopay_div").fadeIn(200),
                    e(".combopay_btn").attr("href", "#"),
                    e(".combopay_btn").removeAttr("target"),
                    e(".combo_course_txt>p").text("Selected Courses: " + o.join(", ")),
                    e(".combo_amount_val>ins").text();
            } else if (2 == e("input[name='combooff']:checked").length) {
                e(this).siblings('label').html('Selected'),
                    e(".combo_course_txt>p").text("Selected Courses: " + o.join(", ")),
                    e(".combo_amount_val>ins").show(),
                    e(".combo_amount_val>del").show(),
                    e(".combopay_btn").show(),
                    e(".combopay_btn").attr("href", "#"),
                    e(".combopay_btn").removeAttr("target"),
                    e(".combo_course_txt>p").show(),
                    e(".combo_amount_val>ins").text();
            } else if (3 == e("input[name='combooff']:checked").length) {
                e(this).siblings('label').html('Selected'),
                    e(".combo_amount_val>ins").show(),
                    e(".combo_amount_val>del").show(),
                    e(".combopay_btn").show(),
                    e(".combo_amount_val>ins").text("24999");
                var b = e.base64.encode("24999-2021-" + e(this).attr("data-courseid") + "-" + o);
                e(".combopay_btn").attr("href", "" + b), e(".combopay_btn").attr("target", "_blank");
            } else 0 == e("input[name='combooff']:checked").length ? (e(".combo_course_txt>p").hide(),
                e(this).siblings('label').html('Select Course'),
                e(".combo_amount_val>ins").hide(),
                e(".combo_amount_val>del").hide(),
                e(".combopay_div").fadeOut(200),
                e(".combopay_btn").attr("href", "#"),
                e(".combopay_btn").removeAttr("target")) : (e(".combo_course_txt>p").show(),
                e(".combo_amount_val>ins").text(""),
                e(".combopay_btn").attr("href", "#"),
                e(".combopay_btn").removeAttr("target"));
        })



    $('#youtubereviewModal').on('shown.bs.modal', function(event) {
        var anybutton = $(event.relatedTarget);
        if (anybutton.data('reviewevent') == "ReviewVideo") {
            var modalyoutubelink = anybutton.data('link');
            $('#youtubeReviewVideo').html(modalyoutubelink);
        }
    })
    $("#youtubereviewModal").on('hide.bs.modal', function(e) {
        $('#youtubeReviewVideo').html('');
    })



    $(".nav-link, .combo_btn, .explorebtn, .gettchbtn").on('click', function(e) {
        $('.navbar-collapse').collapse('hide');
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: ($(target).offset().top)
        }, 1000);
    });

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 500) {
            $('.bt_whatsapp').fadeIn();
            $('.backtop').fadeIn();
        } else {
            $('.bt_whatsapp').fadeOut();
            $('.backtop').fadeOut();
        }
    });



    $('.backtop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});