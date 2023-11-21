document.addEventListener('DOMContentLoaded', function () {
    var menuLinks = document.querySelectorAll('.ul a');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            var targetSectionId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetSectionId);

            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Feche o menu (se desejar)
            ul.classList.remove('ativo');
            document.querySelector('.menu-icon img').src = 'img/icon-menu.png';
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        var menu = document.querySelector('.fixed-menu');
        var menuOffsetTop = menu.offsetTop;
    
        window.addEventListener('scroll', function () {
            if (window.pageYOffset >= menuOffsetTop) {
                menu.classList.add('fixed-menu-active');
            } else {
                menu.classList.remove('fixed-menu-active');
            }
        });
    });    
});
