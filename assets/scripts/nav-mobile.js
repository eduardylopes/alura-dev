const menuButton = document.querySelector('[data-nav-menu-btn]');
const navMobile = document.querySelector('[data-nav-mobile]');
const menuList = document.querySelector('[data-menu-list]');
const profile = document.querySelector('[data-header-profile]');
const searchButton = document.querySelector('[data-nav-search-btn]');
const logo = document.querySelector('[data-header-logo]');
const input = document.querySelector('[data-header-input]');

menuButton.addEventListener('click', () => {
    navMobile.innerHTML = "";
    menuButton.classList.toggle('header__close-btn');
    navMobile.classList.toggle('is-active');
    navMobile.innerHTML += menuList.outerHTML;
    navMobile.innerHTML += profile.outerHTML;
});

searchButton.addEventListener('click', () => {
    logo.classList.toggle('is-hide');
    input.classList.toggle('is-active');
    searchButton.classList.toggle('header__close-btn');
    menuButton.classList.toggle('is-hide');
})