document.addEventListener('DOMContentLoaded', () => {
    const changingText = document.querySelector('#texto-cambiante');
    const esfera = document.querySelector('.cursor-esfera');

    // Escuchamos el movimiento del ratón en toda la pantalla
    document.addEventListener('mousemove', (e) => {
        // e.clientX y e.clientY nos dan la posición exacta del ratón
        esfera.style.left = e.clientX + 'px';
        esfera.style.top = e.clientY + 'px';
    });

    // 2. Definimos qué elementos activan cada efecto:

    // 'a' para enlaces, 'i' para tus iconos de redes sociales (que supongo que son enlaces)
    const links = document.querySelectorAll('a, i, .hamburger'); 

    // 'h1', 'p', 'li' para textos donde queremos el efecto de "Lupa"
    const textBlocks = document.querySelectorAll('.text-container', 'logo'); 


    // 3. EFECTO LINK: Ocultar esfera al entrar, mostrar al salir
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            esfera.classList.add('on-link');
        });
        link.addEventListener('mouseleave', () => {
            esfera.classList.remove('on-link');
        });
    });


    // 4. EFECTO TEXTO: Agrandar esfera al entrar, normalizar al salir
    textBlocks.forEach(textBlock => {
        textBlock.addEventListener('mouseenter', () => {
            esfera.classList.add('on-text');
        });
        textBlock.addEventListener('mouseleave', () => {
          esfera.classList.remove('on-text');
        });
    });


    /* Texto cambiante */
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

    /* ── Animación de frases con Intersection Observer ── */

    //IntersectionObserver -> to detect when an element enters the viewport
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                /*
                * entry.isIntersecting → true cuando el elemento
                * ha entrado en la zona visible definida por 'threshold'
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

    /* Observamos cada .phrase-container */
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

    document.addEventListener('scroll', function(){
        console.log(foto.getBoundingClientRect().top)
        if(foto.getBoundingClientRect().top < 500){
            nav.classList.add('fixed');
        }else{
            nav.classList.remove('fixed');
        }
    });

});
