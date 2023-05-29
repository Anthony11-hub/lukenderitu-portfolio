/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),navToggle = document.getElementById('nav-toggle'), navClose = document.getElementById('nav-close')


if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
    

}

window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'), contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_1tdwemt', 'template_yva4bzh', '#contact-form', 'ywnNdgz6LokBfTCwi')
        .then(() => {
            // show sent message
            contactMessage.textContent = 'Message sent successfully'

            // remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // clear input fields
            contactForm.reset()
        }, () => {
            // show error message
            contactMessage.textContent = 'Message not sent'
        })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')

}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop -58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[ref*=' + sectionId + ']')

        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
