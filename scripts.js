
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Por favor, completa todos los campos del formulario.');
    } else {
      // Aquí puedes realizar acciones adicionales, como enviar el formulario por AJAX
  
      
      alert('¡Formulario enviado correctamente!');
      
      
      document.getElementById('contact-form').reset();
    }
  });
  