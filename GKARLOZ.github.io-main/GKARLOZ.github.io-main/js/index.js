const navToggle = document.querySelector('.nav-toggle');//nav-toogle is the buttons name from the html file
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');//when the button is clicked the nav is opend and it was named nav-open
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
