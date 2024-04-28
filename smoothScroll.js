const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');

    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth' });
}
