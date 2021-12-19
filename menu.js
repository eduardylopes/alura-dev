const menuButton = document.querySelector('[data-menu-btn]');
const asideMenuRight = document.querySelector('[data-aside-menu]');
const asideMenuLeft = document.querySelector('[data-menu-list]');
const profile = document.querySelector('[data-header-profile]');
const searchButton = document.querySelector('[data-search-btn]');
const searchInput = document.querySelector('[data-header-input]');
const logo = document.querySelector('[data-header-logo]');

menuButton.addEventListener('click', () => {
    asideMenuRight.innerHTML = "";

    menuButton.classList.toggle('header__close-btn');

    asideMenuRight.classList.toggle('is-open');

    asideMenuRight.innerHTML += asideMenuLeft.outerHTML;
    asideMenuRight.innerHTML += profile.outerHTML;
})

searchButton.addEventListener('click', () => {
    logo.classList.toggle('is-hide');
    searchInput.classList.toggle('is-open');
    searchButton.classList.toggle('header__close-btn');
    menuButton.classList.toggle('is-hide');
})

