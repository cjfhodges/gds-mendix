if (typeof $ == 'function') {
    var minWidth = 641;
    var windowSize = function () {
        if ($(window).width() < minWidth) {
            $(".proposition-links").addClass("js-hidden");
            $(".proposition-links").removeClass("js-visible");
            $(".header-toggle").addClass("js-visible");
            $(".header-toggle").removeClass("js-hidden");
            $(".header-toggle").removeClass("open");
        }
        else {
            $(".proposition-links").addClass("js-visible");
            $(".proposition-links").removeClass("js-hidden");
            $(".header-toggle").removeClass("js-visible");
            $(".header-toggle").addClass("js-hidden");
            $(".header-toggle").removeClass("open");
        }
    };
    $(".header-toggle").click(function () {
        if ($(".header-toggle").hasClass("open")) {
            $(".proposition-links").removeClass("js-visible");
            $(".header-toggle").removeClass("open");
        }
        else {
            $(".proposition-links").addClass("js-visible");
            $(".header-toggle").addClass("open");
        }
    });
    $(document).ready(windowSize);
    $(window).resize(windowSize);
}