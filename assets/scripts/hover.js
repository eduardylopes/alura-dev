import { removeCodeCard } from "./domGenerator.js";
import { codeInfo } from "./storage.js";

const projectCard = document.querySelectorAll('.project__card')
const removeButton = document.querySelector('[data-remove-btn]')
const removeButtons = document.querySelectorAll('[data-remove-btn]')

projectCard.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.closest('.project__remove-btn')
    })

    element.addEventListener('mouseleave', () => {
        element.closest('.project__remove-btn')
    })
})

removeButtons.forEach(element => {
    element.addEventListener('click', () => {
        const index = element.closest('.project__card').getAttribute('data-index')
        removeCodeCard(codeInfo, index)
    })
})