
const form = document.getElementById('form');
const progress = document.getElementById('progress');
const fileInput = document.getElementById('file');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  if (!fileInput.files.length) {
    alert('Выберите файл');
    return;
  }

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action); 

  xhr.upload.addEventListener('progress', (e) => {
    if (e.lengthComputable) {
      const fraction = e.loaded / e.total; 
      progress.value = fraction;     
    }
  });

  xhr.addEventListener('load', () => {
    if (xhr.status === 200 || xhr.status === 201) {
      progress.value = 1;
      alert('Файл успешно загружен ✨');
    } else {
      progress.value = 0;
      alert('Ошибка сервера при загрузке файла 😢');
      console.error('Статус ответа:', xhr.status, xhr.statusText);
    }
  });

  xhr.addEventListener('error', () => {
    progress.value = 0;
    alert('Ошибка сети при загрузке файла');
  });

  xhr.send(formData);
});