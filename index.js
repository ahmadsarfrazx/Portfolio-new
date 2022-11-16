const hamburger = document.querySelector('.hamburger');
const navigationTwo = document.querySelector('.navigation-two');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navigationTwo.classList.toggle('active');
});
const navItem = document.querySelectorAll('.nav');
for (let i = 0; i < navItem.length; i += 1) {
    navItem[i].addEventListener('click', () => {
        hamburger.classList.remove('active');
        navigationTwo.classList.remove('active');
    });
} 