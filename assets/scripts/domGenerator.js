import { reload } from "./main.js";

const codeContainer = document.querySelector('[data-project]')

export function removeCodeCard(codeInfo, index) {
    codeInfo.splice(index, 1)

    reload();
}

export function addCodeCard(codeInfo, index) {
    
    const div = document.createElement('div')
    div.classList.add('project__card')
    div.innerHTML = innerHTMLCode(codeInfo)
    div.dataset.index = index

    codeContainer.appendChild(div)
}

function innerHTMLCode(codeInfo) {

    const html = `
        <div class="project__wrapper" style="background-color: ${codeInfo.color}" data-color-frame>
            <div class="project__container">
                <img class="project__mac-icon" src="./assets/images/icon-mac.svg">
                <pre>
                    <code class="project__code-area ${codeInfo.codeLanguage}" spellcheck="false" contenteditable="false"
                        aria-label="Editor de código" data-code>${codeInfo.code}</code>
                </pre>
            </div>
        </div>
        <div class="project__info">
            <div class="projext__title-wrapper">
                <h2>${codeInfo.title}</h2>
                <button class="project__remove-btn" data-remove-btn></button>
            </div>
            <p>${codeInfo.description}</p>
            <div class="project__footer">
                <div class="project__like-comment">
                    <div class="project__comment">
                        <button class="project__icon-comment"></button>
                        <span>${codeInfo.comments}</span>
                    </div>
                    <div class="project__like">
                        <button class="project__icon-like" data-like-btn></button>
                        <span data-like-count>${codeInfo.likes}</span>
                    </div>
                </div>
                <div class="project__profile">
                    <img class="project__user-image" src="./assets/images/profile-image.jpg" alt="">
                    <span>Eduardy</span>
                </div>
            </div>
        </div>`
        return html
}

export function clearCode() {
    codeContainer.innerHTML = ""
}