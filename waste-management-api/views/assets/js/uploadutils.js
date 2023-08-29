(function() {
      const dropArea = document.getElementById('dropArea');
      const fileElem = document.getElementById('fileElem');
  
      dropArea.addEventListener('click', () => {
        fileElem.click();
      });
  
      dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
      });
  
      dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        handleFiles(files);
      });
  
      fileElem.addEventListener('change', () => {
        handleFiles(fileElem.files);
      });
  
      function handleFiles(files) {
        const formData = new FormData();
        formData.append('file', files[0]);
    
        const controllerType = dropArea.getAttribute('data-controller');
        const uploadURL = `/api/upload?controller=${controllerType}`;
    
        fetch(uploadURL, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle the server response here
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
      }
    
  })();