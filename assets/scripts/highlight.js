const codeLanguage = document.querySelector('[data-code-lang]');
const hljsButton = document.querySelector('[data-hljs-btn]');
const codeArea = document.querySelector('[data-code-text]');

let isCodeHighlighted = false;

function setHighlightOn() {
    const codeText = codeArea.innerText;

    codeArea.setAttribute('class', `code__area hjls ${codeLanguage.value}`);
    codeArea.setAttribute('contenteditable', 'false')
    codeArea.textContent = codeText;
    
    hljs.highlightElement(codeArea);

    hljsButton.innerText = 'Remover o hightlight';

    isCodeHighlighted = true;
};

function setHighlightOff() {
    const codeText = codeArea.innerText;
    
    codeArea.setAttribute('class', 'code__area hljs')
    codeArea.setAttribute('contenteditable', 'true');
    codeArea.textContent = codeText;
    
    hljsButton.innerText = 'Visualizar com o highlight';

    isCodeHighlighted = false;
}

hljsButton.addEventListener('click', () => {
    if (isCodeHighlighted) {
        setHighlightOff();
    }
    else {
        setHighlightOn();
    }
})

codeLanguage.addEventListener('change', setHighlightOff);