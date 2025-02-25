function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function tiltCard(card) {
    card.style.transform = 'rotate(5deg) scale(1.05)';
    card.onmouseout = () => card.style.transform = 'translateY(-10px)';
}

function flipCard(card) {
    card.classList.toggle('flipped');
}