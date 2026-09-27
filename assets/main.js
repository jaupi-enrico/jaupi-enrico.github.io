document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       MOBILE NAV
    ========================= */

    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            const open = links.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open);
        });

        links.querySelectorAll('a').forEach((a) => {
            a.addEventListener('click', () => links.classList.remove('open'));
        });
    }


    /* =========================
       CURSOR GLOW
    ========================= */

    const glow = document.querySelector('.cursor-glow');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (glow && !reduceMotion) {
        document.addEventListener('mousemove', (event) => {
            glow.animate(
                {
                    left: `${event.clientX}px`,
                    top: `${event.clientY}px`
                },
                {
                    duration: 600,
                    fill: 'forwards'
                }
            );
        });
    }


    /* =========================
       SCROLL REVEAL
    ========================= */

    const reveals = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: .15 }
        );

        reveals.forEach((element) => observer.observe(element));
    } else {
        reveals.forEach((element) => element.classList.add('visible'));
    }


    /* =========================
       CARD TILT
    ========================= */

    if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
        document.querySelectorAll('.project').forEach((card) => {

            card.addEventListener('mousemove', (event) => {
                const rect = card.getBoundingClientRect();

                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                const rotateX = ((y / rect.height) - .5) * -5;
                const rotateY = ((x / rect.width) - .5) * 5;

                card.style.transform =
                    `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-7px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });

        });
    }


    /* =========================
       FOOTER YEAR
    ========================= */

    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

});
