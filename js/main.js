document.addEventListener('DOMContentLoaded', function() {
  
    const subjectInput = document.getElementById('subject');
    const ccInput = document.getElementById('cc');
    const messageInput = document.getElementById('message');
  
    const subjectError = document.getElementById('subjectError');
    const ccError = document.getElementById('ccError');
    const messageError = document.getElementById('messageError');

    subjectInput.addEventListener('blur', function() {
      if (subjectInput.value.trim() === '') {
        subjectInput.classList.add('input-invalid');
        subjectInput.classList.remove('input-valid');
        subjectError.textContent = 'El asunto no puede estar vacío.';
      } else {
        subjectInput.classList.add('input-valid');
        subjectInput.classList.remove('input-invalid');
        subjectError.textContent = '';
      }
    });
  
    ccInput.addEventListener('blur', function() {
      if (!validateEmail(ccInput.value)) {
        ccInput.classList.add('input-invalid');
        ccInput.classList.remove('input-valid');
        ccError.textContent = 'El correo CC no es válido.';
      } else {
        ccInput.classList.add('input-valid');
        ccInput.classList.remove('input-invalid');
        ccError.textContent = '';
      }
    });
  
    messageInput.addEventListener('blur', function() {
      if (messageInput.value.trim() === '') {
        messageInput.classList.add('input-invalid');
        messageInput.classList.remove('input-valid');
        messageError.textContent = 'El mensaje no puede estar vacío.';
      } else {
        messageInput.classList.add('input-valid');
        messageInput.classList.remove('input-invalid');
        messageError.textContent = '';
      }
    });
  
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
    
  });