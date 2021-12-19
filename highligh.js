const codeLanguage = document.querySelector('[data-code-lang]');
const hljsButton = document.querySelector('[data-hljs-btn]');
const codeArea = document.querySelector('code');
let isCodeHighlighted = false;

function setHighlightOn() {
    const codeText = codeArea.innerText;

    codeArea.setAttribute('class', `editor__code-wrapper hjls ${codeLanguage.value}`);
    codeArea.setAttribute('contenteditable', 'false')
    codeArea.textContent = codeText;
    

    hljs.highlightElement(codeArea);

    hljsButton.innerText = 'Remover o hightlight';

    isCodeHighlighted = true;
};

function setHighlightOff() {
    const codeText = codeArea.innerText;
    
    codeArea.setAttribute('class', 'editor__code-wrapper hljs')
    codeArea.setAttribute('contenteditable', 'true');
    codeArea.textContent = codeText;
    
    hljsButton.innerText = 'Visualizar com o highlight';

    isCodeHighlighted = false;
}

hljsButton.addEventListener('click', () => {
    if (isCodeHighlighted == false) {
        setHighlightOn();
    }
    else {
        setHighlightOff();
    }
});