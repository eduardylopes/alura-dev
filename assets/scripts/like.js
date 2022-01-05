export function likeIconButton() {
    const likeIcon = document.querySelectorAll('[data-like-btn]');
    likeIcon.forEach((icon) => {
    
        let isLikeGiven = false;
    
        icon.addEventListener('click', () => {
            icon.classList.toggle('is-liked');
        
            if (isLikeGiven) {
                icon.nextElementSibling.innerText--;
                isLikeGiven = false;
            } else {
                icon.nextElementSibling.innerText++;
                isLikeGiven = true;
            }
        });
    });
}