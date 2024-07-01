// JavaScript for form submission handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add form validation or send the form data to a backend server here
    // Example: Send form data using Fetch API
    const formData = new FormData(contactForm);
    fetch('https://example.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        contactForm.reset(); // Reset form after successful submission
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an issue sending your message. Please try again later.');
    });
});
