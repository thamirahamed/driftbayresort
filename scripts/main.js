const headerBtn = document.querySelector('.header__bars');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavTwo = document.querySelector('.mobile-nav2');
      
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
      
// State
let isMobileNavTwoOpen = false;

headerBtn.addEventListener('click', () => {
    isMobileNavTwoOpen = !isMobileNavTwoOpen;
    if (isMobileNavTwoOpen) {
        mobileNavTwo.style.display = 'flex';
    } else{
        mobileNavTwo.style.display = 'none';
    }
});