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
    const links = document.querySelectorAll('a, i'); 

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
});
