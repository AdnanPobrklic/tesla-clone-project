const menu = document.querySelector('#menu')
const mobileNav = document.querySelector('.options')
const exitMenu = document.querySelector('#exit')

menu.addEventListener('click', () => mobileNav.classList.add('show'))
exitMenu.addEventListener('click', () => mobileNav.classList.remove('show'))

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  })
})

const hiddenEl = document.querySelectorAll('.hidden')
hiddenEl.forEach(el => observer.observe(el))