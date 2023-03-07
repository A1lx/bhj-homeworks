const editor = document.getElementById('editor');
const clearButton = document.querySelector('.clear__button') 

editor.addEventListener('input', () => {
  if (editor.value.trim() !== '') {
    localStorage.setItem('editorValue', editor.value);
  }
});

clearButton.addEventListener('click', () => {
  editor.value = '';
  localStorage.clear();
});

editor.value = localStorage.getItem('editorValue');