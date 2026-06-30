const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('.form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name').trim();
  formStatus.textContent = `Thank you${name ? `, ${name}` : ''}. Our team will contact you within 24 hours.`;
  contactForm.reset();
});
