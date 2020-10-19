 this.setupSpoilers = function (elem) {
        if (!elem) {
            elem = $("html");
        }
        elem.find(".spoiler-title").click(function () {
            var $spoiler = $(this).closest(".spoiler");
            if ($spoiler.hasClass("spoiler-open")) {
                $spoiler.removeClass("spoiler-open");
                $(this).parent().children(".spoiler-content").slideUp();
            } else {
                $spoiler.addClass("spoiler-open");
                var $content = $(this).parent().children(".spoiler-content");
                $content.slideDown();
            }
            return false;
        });
    };
