import { removeCodeCard } from "./domGenerator.js";
import { codeInfo } from "./storage.js";


export function removeButton() {
    const removeButtons = document.querySelectorAll('[data-remove-btn]')
    removeButtons.forEach(element => {
        element.addEventListener('click', () => {
            let index = element.closest('.project__card').getAttribute('data-index')
            removeCodeCard(codeInfo, index)
        })
    })
}