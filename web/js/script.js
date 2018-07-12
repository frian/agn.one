$(function() {

    // variables
    var
        // $section1 = $('#section1 .is-animated'),
        $section1img = $('#section1 img'),
        // $section2 = $('#section2 .is-animated'),
        $section2img = $('#section2 img'),
        // $section3 = $('#section3 .is-animated'),
        $section3img = $('#section3 img');

    var myFullpage = new fullpage('#fullpage', {

        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',

        onLeave: function(origin, destination, direction) {

            if (origin.index == 0 && destination.index == 1) {
                // $section1.addClass('animated zoomInDown'); // bounceInDown, flipInX
                // $section1.eq(0).css('animation-delay', '.3s');
                // $section1.eq(1).css('animation-delay', '.6s');
                // $section1.eq(2).css('animation-delay', '.9s');
                $section1img.addClass('animated fadeInDownBig');
                $section1img.css('animation-delay', '0.5s');
                $("#id2").css('opacity', 1);
            }
            else if (origin.index == 1 && destination.index == 2) {
                $section2img.addClass('animated fadeInDownBig');
                $section2img.css('animation-delay', '0.5s');
                $("#id3").css('opacity', 1);
            }
            else if (origin.index == 2 && destination.index == 3) {
                $section2img.addClass('animated fadeInDownBig');
                $section2img.css('animation-delay', '0.5s');
                $("#id4").css('opacity', 1);
            }
        }
    });

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
    });
});
