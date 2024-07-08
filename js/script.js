
/*========== dark light mode ==========*/

let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx bx-moon');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.Home-content, .heading, .main-text', { origin: 'top'});