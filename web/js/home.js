$(function() {

    $(".home-header").css('opacity', '1');
    // -- remove loader
    $(".loader").remove();

    // -- variables
    var
        // $section1 = $('#section1 .is-animated'),
        $section1img = $('#section1 img'),
        // $section2 = $('#section2 .is-animated'),
        $section2img = $('#section2 img'),
        // $section3 = $('#section3 .is-animated'),
        $section3img = $('#section3 img');

    var myFullpage = new fullpage('#fullpage', {

        normalScrollElements: '#menu',
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
                $section3img.addClass('animated fadeInDownBig');
                $section3img.css('animation-delay', '0.5s');
                $("#id4").css('opacity', 1);
            }
        }
    });


    sizeImages();


    // -- handle resize
    var
        timeout = false, // holder for timeout id
        delay = 250; // delay after event is "complete" to run callback

    $( window ).resize(function() {
        clearTimeout(timeout);

        var images = $(".illustration");

        images.each(function(i, img) {
            $(img).css('width', "80%");
            $(img).css('height', "auto");
        });

        timeout = setTimeout(sizeImages, delay);
    });

});


// -- helper funciton
function round(x, digits){
  return parseFloat(x.toFixed(digits))
}


// -- resize images if needed
function sizeImages() {

    // -- get screen size
    var
        screen = $(window),
        screenWidth  = screen.width(),
        screenHeight = screen.height(),

    // -- calculate max img height
        imgMaxHeight = (screenHeight / 2) - 40,

    // -- get image size
        img = $("#section1 img"),
        imgOriginalWidth =  img.width(),
        imgOriginalHeight = img.height(),

    // -- function
        process = 0,
        processWidth = 0;

    // -- responsive
    if (screenWidth >= 992) {
        imgMaxHeight = screenHeight - 40;
    }

    if (imgOriginalHeight > imgMaxHeight) {
        process = 1;
    }

    if (process) {

        var imgRatio  = round((imgOriginalWidth / imgOriginalHeight), 2);
        var images    = $(".illustration");
        var cssWidth  = 0;
        var cssHeight = 0;

        var newWidth = imgMaxHeight * imgRatio;
        cssWidth  = newWidth;
        cssHeight = imgMaxHeight;

        images.each(function(i, img) {
            $(img).css('width', cssWidth);
            $(img).css('height', cssHeight);
        });

    }
    else {
        return false;
    }
}
