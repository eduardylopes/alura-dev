import { removeCode } from "./domGenerator.js";
import { codeInfo } from "./domGenerator.js";

const projectCard = document.querySelectorAll('.project__card')
const removeButton = document.querySelectorAll('[data-remove-btn]')
const editButton = document.querySelectorAll('[data-edit-btn]')

projectCard.forEach(element => {
    element.addEventListener('mouseenter', () => {
        const divButtons = element.querySelector('[data-project-buttons]')
        divButtons.classList.add('is-active')
    })

    element.addEventListener('mouseleave', () => {
        const divButtons = element.querySelector('[data-project-buttons]')
        divButtons.classList.remove('is-active')
    })
});

removeButton.forEach(element => {
    element.addEventListener('click', () => {
        const index = element.closest('.project__card').getAttribute('data-index')
        removeCode(codeInfo, index)
    })
})

editButton.forEach(element => {
    element.addEventListener('click', () => {
        const index = element.closest('.project__card').getAttribute('data-index')
    })
})
