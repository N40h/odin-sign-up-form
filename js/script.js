/***********************
/*         DOM
/**********************/
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const passwordError = document.querySelector('#password-error');

/***********************
/*         Functions
/**********************/
function validatePassword() {
	const password = passwordInput.value;
	const confirmPassword = confirmPasswordInput.value;

	if (password !== confirmPassword) {
		passwordError.style.display = 'block';
	} else {
		passwordError.style.display = 'none';
	}
}

/***********************
/*         Events
/**********************/
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validatePassword);
