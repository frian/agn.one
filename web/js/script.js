$(function() {

    // var myFullpage = new fullpage('#fullpage', {
    //     licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    //     easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
    // });

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
    });
});
