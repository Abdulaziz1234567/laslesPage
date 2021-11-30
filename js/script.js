$(function () {
    $('.exit').hide();
    $('.open').click(function () {
        $('.menu__nav-links').addClass('active');
        $('.menu__nav-links').addClass('actived');
        $('.open').slideUp(1000);
        setTimeout(() => {
            $('.exit').slideDown(1000).css({
                color: 'red'
            });
        }, 1000);
    });
    $('.exit').click(function () {
        setTimeout(() => {
            $('.open').slideDown(1000).css({
                color: 'red'
            });
        }, 1000);
        $('.exit').slideUp(1000);
        $('.menu__nav-links').removeClass('active');
    });
})