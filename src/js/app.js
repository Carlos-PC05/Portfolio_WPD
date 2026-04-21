document.addEventListener('DOMContentLoaded', () => {
    const changingText = document.querySelector('#texto-cambiante');
    const esfera = document.querySelector('.cursor-esfera');

    // Listen to mouse movement across the entire screen
    document.addEventListener('mousemove', (e) => {
        // e.clientX and e.clientY give us the exact position of the mouse
        esfera.style.left = e.clientX + 'px';
        esfera.style.top = e.clientY + 'px';
    });

    // 2. Define which elements activate each effect:

    // 'a' for links, 'i' for social media icons
    const links = document.querySelectorAll('a, i, .hamburger');

    // textBlocks where we want the "Magnifier" effect
    const textBlocks = document.querySelectorAll('.text-container', 'logo');


    // 3. LINK EFFECT: Hide sphere when entering, show when leaving
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            esfera.classList.add('on-link');
        });
        link.addEventListener('mouseleave', () => {
            esfera.classList.remove('on-link');
        });
    });


    // 4. TEXT EFFECT: Enlarge sphere when entering, normalize when leaving
    textBlocks.forEach(textBlock => {
        textBlock.addEventListener('mouseenter', () => {
            esfera.classList.add('on-text');
        });
        textBlock.addEventListener('mouseleave', () => {
            esfera.classList.remove('on-text');
        });
    });


    /* Changing text */
    if (!changingText || typeof Typed === 'undefined') {
        return;
    }

    new Typed('#texto-cambiante', {
        strings: ['CARLOS', 'SPORTMAN', 'TRAVELER', 'COMPUTER SCIENTIST'],
        typeSpeed: 100,
        backSpeed: 70,
        backDelay: 2500,
        loop: true
    });

    /* ── Animation of phrases with Intersection Observer ── */

    //IntersectionObserver -> to detect when an element enters the viewport
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                /*
                * entry.isIntersecting → true when the element
                * has entered the visible area defined by 'threshold'
                */
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: '-10% 0px'
        }
    );

    /* We observe each .phrase-container */
    document.querySelectorAll('.phrase-container').forEach(el => {
        observer.observe(el);
    });

    const esMovil = window.matchMedia('(max-width: 480px)').matches;

    if (!esMovil) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2, rootMargin: '-10% 0px' }
        );

        document.querySelectorAll('.phrase-container').forEach(el => {
            observer.observe(el);
        });
    }

    // Fixed navegation
    const nav = document.querySelector('.nav');
    const foto = document.querySelector('.photo');

    document.addEventListener('scroll', function () {
        console.log(foto.getBoundingClientRect().top)
        if (foto.getBoundingClientRect().top < 500) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });

});
