
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const subject = data.get('subject') || 'Website enquiry';
    const message = data.get('message') || '';
    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;
    window.location.href = `mailto:aftab@photrum.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    let status = form.querySelector('.form-status');
    if (!status) {
      status = document.createElement('p');
      status.className = 'form-status';
      form.appendChild(status);
    }
    status.textContent = 'Your email app should open now. Send the message from there.';
  });
})();
