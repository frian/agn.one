$(function() {


    // -- load header image and remove loader
    var header = $('[data-src]');
    var image = (header).attr('data-src');
    console.log(image);

    // TODO: change image size based on screen resolution
    // // -- responsive
    // if (screenWidth >= 992) {
    //     imgMaxHeight = screenHeight - 40;
    // }


    var img = new Image();
    img.onload = function () {
       header.css('background-image', 'url(' + image + ')');
       header.css('opacity', '1');
       $(".header-content").css('opacity', '1');
       $(".loader").remove();
    }
    img.src = image;

    // -- init fullpage
    var myFullpage = new fullpage('#fullpage', {

        normalScrollElements: '#menu',
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        scrollingSpeed: 300,
        // easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
    });

});
