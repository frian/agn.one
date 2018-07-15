$(function() {

    var header = $('[data-src]');
    var image = (header).attr('data-src');
    console.log(image);

    var img = new Image();
    img.onload = function () {
       header.css('background-image', 'url(' + image + ')');
       setTimeout(function() {
           header.css('opacity', '1');
           $(".header-content").css('opacity', '1');
           $(".loader").remove();
       }, 100);


    }
    img.src = image;



    // if (screenWidth >= 992) {
    //     imgMaxHeight = screenHeight - 40;
    // }

    // header.css('background-image', 'url(' + image + ')');


    var myFullpage = new fullpage('#fullpage', {

        normalScrollElements: '#menu',
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        scrollingSpeed: 300,
        // easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
    });

});
