document.getElementById('file').addEventListener('change', function() {
  const fileName = this.files[0].name; 
  const fileDesc = document.querySelector('.input__wrapper-desc');
  fileDesc.textContent = fileName; 
});

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this); 
  const progress = document.getElementById('progress');
  const xhr = new XMLHttpRequest();

  xhr.open('POST', this.action, true);
  
  xhr.upload.addEventListener('progress', function(e) {
    if (e.lengthComputable) {

      const percent = e.loaded / e.total;
      progress.value = percent; 
    }
  });

  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Файл успешно загружен на сервер!');
      progress.value = 1; 
    } 
    else {
      alert('Произошла ошибка при загрузке файла!');
      progress.value = 0; 
    }
  };

  xhr.send(formData);
});
