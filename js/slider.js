document.addEventListener('DOMContentLoaded', () => {
  const promoModalEl = document.getElementById('promoModal');
  const promoModal = new bootstrap.Modal(promoModalEl);
  promoModal.show();

  const form = document.getElementById('subscribeForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que se recargue la página
    
    // Aquí podés agregar lógica para procesar el email, enviar a servidor, etc.

    // Cerrar modal
    promoModal.hide();
  });
});