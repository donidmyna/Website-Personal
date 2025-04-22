//SCROLL JS
ScrollReveal({
    distance: '80px', 
    duration: 2000,
    delay: 200,
    
});

ScrollReveal().reveal('.home-content, heading, .skills-tittle', {origin: 'top'});
ScrollReveal().reveal('.home-img, .contact form', { origin: 'button'});
ScrollReveal().reveal('.home-contact h1, .about-img, .contact-tittle, .skills-left', { origin: 'left'});
ScrollReveal().reveal('.skills-right, .about-content', { origin: 'right'});

//TYPED JS
const typed = new Typed('.multiple-text', {
    strings: ['Made Doni Damayana','a Web Development Enthusiast',],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});