$(document).ready(function() {
    $(document).contextmenu(function() {
        return !1
    });
    $("body").bind("cut copy paste", function(t) {
        t.preventDefault()
    }), $(".flips").click(function() {
        $(".panels").slideToggle(300)
    })
    $('p:empty').remove();
}), $(document).keydown(function(t) {
    if (123 === t.which || t.ctrlKey && 85 === t.keyCode || t.ctrlKey && t.shiftKey && 73 === t.keyCode) return !1
}), $(document).ready(function(t) {
    screen.width > 768 ? (t(".navbar-expand-lg .dropdown").hover(function() {
        t(this).find(".dropdown-menu").first().stop(!0, !0).delay(200).slideDown()
    }, function() {
        t(this).find(".dropdown-menu").first().stop(!0, !0).delay(200).slideUp()
    }), t(".navbar .dropdown > a").click(function() {
        location.href = this.href
    })) : t(".dropdown-menu li a").on("click", function(e) {
        t(this).next("ul").toggle(), e.stopPropagation(), e.preventDefault(), t(".dropdown-item").click(function(e) {
            var o = t(this).attr("href");
            window.open(o, "_self")
        })
    }), t(".static_secondmenu a").click(function(e) {
        e.preventDefault();
        var o = t(t(this).attr("href")).offset().top;
        t("body, html").animate({
            scrollTop: o
        }, 900)
    }), t("#toTop").click(function() {
        t("html, body").animate({
            scrollTop: 0
        }, 1e3)
    }), t()
}), $(window).scroll(function() {
    var t = $(".bt_train_locmap").offset().top,
        e = $(".bt_train_locmap").outerHeight(),
        o = $(window).height();
    $(this).scrollTop() > t + e - o ? $("#toTop").fadeIn(500) : $("#toTop").fadeOut(500)
});
var lastId, topMenu = $(".static_secondmenu ul"),
    topMenuHeight = topMenu.outerHeight() + 15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function() {
        var t = $($(this).attr("href"));
        if (t.length) return t
    });
$(window).scroll(function() {
    var t = $(this).scrollTop() + topMenuHeight,
        e = scrollItems.map(function() {
            if ($(this).offset().top < t) return this
        }),
        o = (e = e[e.length - 1]) && e.length ? e[0].id : "";
    lastId !== o && (lastId = o, menuItems.parent().removeClass("active").end().filter("[href='#" + o + "']").parent().addClass("active"))
}), $(document).scroll(function() {
    $(this).scrollTop() > 500 && $(".mb_footerscroll").fadeIn()
});
/* var map = document.getElementById('mymap');
var maplistner = function(e) {
    var frame = document.createElement('iframe');
    frame.src = this.getAttribute('data-src');
    map.appendChild(frame);
    map.removeEventListener("mouseover", maplistner);
};
map.addEventListener('mouseover', maplistner),
    function() {
        for (var t = document.getElementsByClassName("youtube-player"), e = 0; e < t.length; e++) t[e].onclick = function() {
            var t = document.createElement("iframe");
            for (t.setAttribute("src", "//www.youtube.com/embed/" + this.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&rel=" + this.dataset.related + "&controls=" + this.dataset.control + "&showinfo=" + this.dataset.info), t.setAttribute("frameborder", "0"), t.setAttribute("id", "youtube-iframe"), t.setAttribute("style", "width: 100%; height: 100%; position: absolute; top: 0; left: 0;"), 1 == this.dataset.fullscreen && t.setAttribute("allowfullscreen", ""); this.firstChild;) this.removeChild(this.firstChild);
            this.appendChild(t)
        }
    }(), $.event.special.touchstart = {
        setup: function(t, e, o) {
            this.addEventListener("touchstart", o, {
                passive: !0
            })
        }
    }, $(document).scroll(function() {
        $(this).scrollTop() > 700 ? $(".bt_whatsapp").fadeIn() : $(".bt_whatsapp").fadeOut()
    }); */