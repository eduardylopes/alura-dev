const colorPickerButton = document.querySelector('[data-color-picker-button]');
const editorColorFrame = document.querySelector('[data-color-frame]');

console.log(editorColorFrame);

colorPickerButton.addEventListener('input', () => {
    editorColorFrame.style.backgroundColor = colorPickerButton.value;  
})