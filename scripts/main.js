const headerBtn = document.querySelector('.header__bars');
const mobileNav = document.querySelector('.mobile-nav');
      
// State
let isMobileNavOpen = false;

headerBtn.addEventListener('click', () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
        mobileNav.style.display = 'flex';
    } else{
    mobileNav.style.display = 'none';
    }
});