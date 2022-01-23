export function hover() {
    const card = document.querySelectorAll('[data-index]');
    card.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.querySelector('.project__footer').classList.add('is-active')
        })

        element.addEventListener('mouseleave', () => {
            element.querySelector('.project__footer').classList.remove('is-active')
        })
        
    })

}