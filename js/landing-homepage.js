
$(document).ready(function(e) {
    $(window).on("load", function() {
        setTimeout(function() {
            $(".corp_hire").fadeIn("slow")
        }, 4e3)
    }), $(".corp_hireclose").click(function() {
        $(".corp_hire").fadeOut("slow")
    }), $(document).contextmenu(function() {
        return !1
    }), $("body").bind("cut copy paste", function(e) {
        e.preventDefault()
    }), $("#career_transition, #job_guarantee").owlCarousel({
        loop: true,
        margin: 50,
        nav:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    }), $("#nonit").owlCarousel({
        loop: !1,
        margin: 50,
        nav: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    }), $("#landing_videosliderone, #landing_videoslidertwo, #landing_videosliderthree").owlCarousel({
        loop: !1,
        autoplay: !0,
        autoplayHoverPause: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    }), $("#texttestimonial").owlCarousel({
        loop: !1,
        margin: 30,
        nav: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    }), $("#youtubereviewModal").on("shown.bs.modal", function(e) {
        var t = $(e.relatedTarget);
        if ("ReviewVideo" == t.data("reviewevent")) {
            var o = t.data("link");
            $("#youtubeReviewVideo").html(o)
        }
    }), $("#youtubereviewModal").on("hide.bs.modal", function(e) {
        $("#youtubeReviewVideo").html("")
    }), $(".lhlink").on("click", function(e) {
        $(".navbar-collapse").collapse("hide"), e.preventDefault();
        var t = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(t).offset().top
        }, 1e3)
    }), $(document).scroll(function() {
        $(this).scrollTop() > 1e3 ? ($(".bt_whatsapp").fadeIn(), $(".backtop").fadeIn(), $(".bottom_scroll").fadeIn()) : ($(".bt_whatsapp").fadeOut(), $(".backtop").fadeOut(), $(".bottom_scroll").fadeOut())
    }), $(".backtop").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 800), !1
    })
}), jQuery.event.special.touchstart = {
    setup: function(e, t, o) {
        this.addEventListener("touchstart", o, {
            passive: !t.includes("noPreventDefault")
        })
    }
}, jQuery.event.special.touchmove = {
    setup: function(e, t, o) {
        this.addEventListener("touchmove", o, {
            passive: !t.includes("noPreventDefault")
        })
    }
}, jQuery.event.special.wheel = {
    setup: function(e, t, o) {
        this.addEventListener("wheel", o, {
            passive: !0
        })
    }
}, jQuery.event.special.mousewheel = {
    setup: function(e, t, o) {
        this.addEventListener("mousewheel", o, {
            passive: !0
        })
    }
};