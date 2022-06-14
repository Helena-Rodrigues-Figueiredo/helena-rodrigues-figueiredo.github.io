const header = document.querySelector('header');
const scrollReveal = ScrollReveal ({
    distance: '50px',
    duration: 2700,
    reset: true
});

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', this.window.scrollY > 5);
});

scrollReveal.reveal('.photo, .color', {delay:350, origin: 'right'});
scrollReveal.reveal('.apres-img', {delay:350, origin: 'left'});

scrollReveal.reveal('#h1-about-me, #p-about-me, #codeGirl', {delay:200, origin: 'bottom'});
scrollReveal.reveal('#h1-skills, .skill', {delay:200, origin: 'bottom'});
scrollReveal.reveal('#h1-projects, .project', {delay:200, origin: 'bottom'});