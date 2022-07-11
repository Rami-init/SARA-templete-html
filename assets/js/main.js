
// nav toggle
const toggleNav = (navMenu, navToggle)=>{
    const navmenu = document.getElementById(navMenu);
    const navtoggle = document.getElementById(navToggle);
    if(navmenu && navtoggle) {
        navtoggle.addEventListener('click', ()=>{
            navmenu.classList.toggle('show')
        })
    }
}
toggleNav('nav-menu', 'nav-toggle')

// add and  remove active 
const navmenu = document.getElementById('nav-menu')
const navLink = document.querySelectorAll('.nav-link')
const addActive = (e)=>{
    navLink.forEach(n => n.classList.remove('active'))
    e.target.classList.add('active')
    navmenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', addActive))