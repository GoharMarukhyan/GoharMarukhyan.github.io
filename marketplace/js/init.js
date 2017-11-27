window.onload = function() {

    $(".top-baner-block").height(windowHeight - headerHeight);


    /*******Window resize function*******/
    $(window).resize(function () {
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;
        var headerHeight = $(".site-header").height();
        $(".top-baner-block").height(windowHeight - headerHeight);
    });
    /*******Window resize function END*******/

    /*******Carusels function*******/
    $('.home-page-carusel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            780: {
                items: 2
            },
            1200: {
                items: 3
            },
            1520: {
                items: 4
            }
        }
    });

    $('.home-page-team-carusel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.chefs-page-carusel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
    /*******Carusels function END*******/

    /*******Site menu click function*******/

    $('.mobile-menu-icon').click(function(){
        $(this).toggleClass('animate');
        $(".site-header-bottom-block").toggleClass('open-menu');
        $(".user-block").toggleClass('show');
        $(".cart-block").toggleClass('show');
    });

    /*******Site menu click function END*******/
};
