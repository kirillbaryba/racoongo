(function () {

//init flickity carusel
    $('.carusel').flickity({
        // options
        autoPlay: 5000,
        pauseAutoPlayOnHover: false,
        cellAlign: 'left',
        wrapAround: true,
        pageDots: false,
        contain: true,
        arrowShape: {
            x0: 0,
            x1: 70, y1: 50,
            x2: 70, y2: 0,
            x3: 70
        }
    });

    //toogle-collapse menu
    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('on');
        $(this).closest('.header').toggleClass('header--is-visible');
        $(this).closest('.header').find('.navbar-nav').toggleClass('navbar-nav--is-visible');
    });

})();