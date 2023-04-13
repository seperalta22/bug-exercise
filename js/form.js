const form = document.querySelector('.contact__form');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', (event) => {
	if (emailInput.value !== emailInput.value.toLowerCase()) {
		emailError.innerHTML = 'The email must be written in lower case.';
		emailError.style.display = 'block';

		// Prevents the form from submitting
		event.preventDefault();

		// Hides the error message after 5 seconds
		setTimeout(() => {
			emailError.style.display = 'none';
		}, 5000);
	}
});

// Local Storage section

function saveData() {
	// this is the object required
	const data = {
		name: nameInput.value,
		email: emailInput.value,
		message: messageInput.value,
	};

	localStorage.setItem('formData', JSON.stringify(data));
}

function loadData() {
	const formData = JSON.parse(localStorage.getitem('formData'));

	if (formData) {
		nameInput.value = formData.name;
		emailInput.value = formData.email;
		messageInput.value = formData.message;
	}
}

emailInput.addEventListener('input', saveData);
nameInput.addEventListener('input', saveData);
messageInput.addEventListener('input', saveData);
loadData();

form.addEventListener('submit', () => {
	localStorage.removeItem('formData');
});
