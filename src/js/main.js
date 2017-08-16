(function () {
    //toogle-collapse menu
    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('on');
        $(this).closest('.header').toggleClass('header--is-visible');
        $(this).closest('.header').find('.navbar-nav').toggleClass('navbar-nav--is-visible');
    });

})();