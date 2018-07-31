$(document).ready(function() {
    $(".price-item-link").on("click", function(e) {
        e.preventDefault();
        $(this).find("#dropdown-arrow").toggleClass("point-downwards");
        $(this).children("#diagnostic-more-info").toggleClass("pricing-item-hidden");
    })

    //Shamlessly taken from https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/
    //Thanks
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 35
        }, 500, 'linear');
    });

    $(".hamburger-menu").on("click", function(e) {
        $("#ham-top").toggleClass("ham-top-rotate");
        $("#ham-bottom").toggleClass("ham-bottom-rotate");
        $(".mobile-nav-horiz").toggleClass("mobile-nav-horiz-expanded");
        $(".hamburger-menu").toggleClass("is-active");
    });

    $(".mobile-nav-dropdown").on("click", function(e) {
        $("#mobile-nav-page-menu").toggleClass("hidden");
    })

});