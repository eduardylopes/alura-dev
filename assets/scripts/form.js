import { codeInfo, setCodeInfoList } from "./storage.js"

const codeText = document.querySelector('[data-code-text]')
const codeTitle = document.querySelector('[data-code-title]')
const codeDescription = document.querySelector('[data-code-description]')
const codeLang = document.querySelector('[data-code-lang]')
const codeColor = document.querySelector('[data-color-picker-button]');
const saveButton = document.querySelector('[data-save-button]')
const editorColorFrame = document.querySelector('[data-color-wrapper]');

function getValues() {
    return {
        code: codeText.innerText,
        title: codeTitle.value,
        description: codeDescription.value,
        codeLanguage: codeLang.value,
        color: codeColor.value,
        likes: 0,
        comments: 0
    }
}

function validadeFields(codeInfo) {
    if (codeInfo.code.trim() === "" || codeInfo.title.trim() === "" || codeInfo.description.trim() === "") {
        throw new Error('Por favor, preencha todos os campos')
    }
}

function clearInputs() {
    codeText.innerText = ""
    codeTitle.value = ""
    codeDescription.value = ""
    codeColor.value = "#6BD1FF"
    editorColorFrame.style.backgroundColor = codeColor.value;
}

saveButton.addEventListener('click', () => {

    try {
        validadeFields(getValues())
        codeInfo.push(getValues())
        setCodeInfoList(codeInfo)
        clearInputs()

        alert('Projeto salvo com sucesso!')
    
    } catch (error) {
        alert(error.message)
    }

})