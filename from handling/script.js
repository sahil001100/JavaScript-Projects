
    const form = document.createElement('form');
    form.id = 'dynamicForm';

    const fields = [
      { label: 'Name', type: 'text', name: 'name', minLength: 2 },
      { label: 'Email', type: 'email', name: 'email' },
      { label: 'Message', type: 'textarea', name: 'message', minLength: 10 }
    ];

    fields.forEach(field => {
      const label = document.createElement('label');
      label.textContent = field.label;

      let input;
      if (field.type === 'textarea') {
        input = document.createElement('textarea');
      } else {
        input = document.createElement('input');
        input.type = field.type;
      }

      input.name = field.name;
      input.required = true;
      if (field.minLength) input.minLength = field.minLength;

      const error = document.createElement('div');
      error.className = 'error';
      error.style.display = 'none';

      input.addEventListener('input', () => {
        if (!input.validity.valid) {
          error.textContent = `Please enter a valid ${field.label.toLowerCase()}.`;
          error.style.display = 'block';
        } else {
          error.textContent = '';
          error.style.display = 'none';
        }
      });

      form.appendChild(label);
      form.appendChild(input);
      form.appendChild(error);
    });

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';
    form.appendChild(submitBtn);

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (name.length < 2 || message.length < 10 || !email.includes('@')) {
        alert('Please fill out all fields correctly.');
        return;
      }

      alert(`Thanks, ${name}! Your message has been received.`);
      form.reset();
    });

    document.getElementById('formContainer').appendChild(form);
