// $(function () {
// $('.ham').on('click', function () {
// $('nav .li').toggleClass('is-active');
// })
// });

$(function () {
    $('.ham').on("click", function () {
        $('.nav').toggleClass('hamburger');
        $('.nav-list').toggleClass('open');
        $('.menu-list').toggleClass('open-menu');
        /*       $('.bar-top').toggleClass('open-list');
                $('.bar-mid').toggleClass('open-mid');
                */
        $('.bar-bottom').toggleClass('open-bottom');


        $('.ham').toggleClass('menu--isOpen');

        $('.bar').toggleClass('open-bottom');
    });
});


$(function () {
    // #で始まるリンクをクリックしたら実行されます
    $('a[href^="#"]').click(function () {
        // スクロールの速度
        var speed = 400; // ミリ秒で記述
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});

$('a[href^="#"]').on('click', function () {
    $(".ham").click();
});