const editor = document.querySelector('#editor');
const editorText = localStorage.getItem('editorText');

if (editorText !== null) {
    editor.value = editorText;
}

editor.addEventListener('input', () => {
    localStorage.setItem('editorText', editor.value);
});