
const mobileNav = document.querySelector('.mobile-nav')
const hamburger = document.querySelector("img[alt='Menu']")
const hamburgerClose = document.querySelector("img[alt='Close']")

hamburger.addEventListener('click', ()=>{
    hamburger.style.display = 'none'
    hamburgerClose.style.display = 'block'
    mobileNav.classList.add('opened')
})

hamburgerClose.addEventListener('click', ()=>{
    hamburgerClose.style.display = 'none'
    hamburger.style.display = 'block'
    mobileNav.classList.remove('opened')
})
