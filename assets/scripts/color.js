const colorPickerButton = document.querySelector('[data-color-picker-button]');
const editorColorFrame = document.querySelector('[data-color-frame]');

colorPickerButton.addEventListener('input', () => {
    editorColorFrame.style.backgroundColor = colorPickerButton.value;  
})