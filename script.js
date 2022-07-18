const hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

hamburgerIcon.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})