$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20, // Kartochkalar orasidagi masofa
    responsiveClass: true,
    responsive: {
        0: {
            items: 1, // Mobil telefonda 1 ta kartochka
            nav: false
        },
        600: {
            items: 2, // Planshetda 2 ta kartochka
            nav: false
        },
        1000: {
            items: 4, // Kompyuterda 4 ta kartochka
            nav: true,
            loop: false
        }
    }
});

