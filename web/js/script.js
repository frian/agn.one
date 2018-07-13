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
                $section3img.addClass('animated fadeInDownBig');
                $section3img.css('animation-delay', '0.5s');
                $("#id4").css('opacity', 1);
            }
        }
    });

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
    });



    // -- get screen size
    var screen = $(window);
    var screenWidth  = screen.width();
    var screenHeight = screen.height();

    // console.log("SCREEN SIZE");
    // console.log("  screenWidth : " +  screenWidth);
    // console.log("  screenHeight : " + screenHeight);
    // console.log("");


    // -- calculate max img width and height
    var imgMaxWidth  = screenWidth * 80 / 100;
    var imgMaxHeight = (screenHeight / 2) - 40;

    // console.log("IMAGE BOUNDARIES");
    // console.log("  imgMaxWidth : " +  imgMaxWidth);
    // console.log("  imgMaxHeight : " + imgMaxHeight);
    // console.log("");


    // -- get image size
    var img = $("#section1 img");

    var imgOriginalWidth =  img.width();
    var imgOriginalHeight = img.height();

    // console.log("IMAGE SIZE");
    // console.log("  imgOriginalWidth : " +  imgOriginalWidth);
    // console.log("  imgOriginalHeight : " + imgOriginalHeight);
    // console.log("");


    console.log("REPORT");
    var process = 0;
    var processWidth = 0;
    var processHeight = 0;

    if (imgOriginalWidth > imgMaxWidth) {
        console.log("  image is to large.");
        process = 1;
        processWidth = 1
    }
    if (imgOriginalHeight > imgMaxHeight) {
        console.log("  image is to height :");
        console.log("    imgOriginalHeight : " + imgOriginalHeight);
        console.log("    imgMaxHeight : " + imgMaxHeight);

        process = 1;
        processHeight = 1;
    }
    console.log('');


    if (process) {

        var imgRatio = round((imgOriginalWidth / imgOriginalHeight), 2);

        var images = $(".illustration");
        console.log(images);

        if (processWidth) {
            console.log("not implemented");
        }
        else {
            console.log("PROCESSING HEIGHT :");
            var newWidth = imgMaxHeight * imgRatio;
            console.log("  new image width : " + newWidth);
            console.log("  applying css ...");

            images.each(function(i, img) {
                $(img).css('width', newWidth);
                $(img).css('height', imgMaxHeight);
            });

            console.log("  done.");
        }

    }
    else {
        console.log("  nothing to do :)");
        return false;
    }

});

function round(x, digits){
  return parseFloat(x.toFixed(digits))
}
