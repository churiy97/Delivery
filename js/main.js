const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

//day 1

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');


let login = localStorage.getItem('gloDelivery');

console.dir(modalAuth);

function toggleModalAuth() {
	modalAuth.classList.toggle('is-open');
}

function autorized() {

	function logOut(event){
		login = null;
		buttonAuth.style.display = '';
		buttonOut.style.display = '';
		userName.style.display = '';
		buttonOut.removeEventListener('click', logOut);

		localStorage.removeItem('gloDelivery');

		checkAuth();		
	}

	console.log('Авторизован');

	userName.textContent = login;

	buttonAuth.style.display = 'none';
	buttonOut.style.display = 'block';
	userName.style.display = 'inline';

	buttonOut.addEventListener('click', logOut);
}


function notAutorized() {
	console.log('Не авторизован');

	function logIn(event){
		event.preventDefault();
		login = loginInput.value;
		if (login) {
			loginInput.style.backgroundColor = '';
			loginInput.placeholder = '';

			localStorage.setItem('gloDelivery', login);

			toggleModalAuth();
			buttonAuth.removeEventListener("click", toggleModalAuth);
			closeAuth.removeEventListener("click", toggleModalAuth);
			loginForm.removeEventListener("submit", logIn);
			logInForm.reset();
			checkAuth();
		} else {
			console.dir(loginInput);
			loginInput.style.backgroundColor = '#ffc1a8';
			loginInput.placeholder = 'Введите логин';
		}
	}

	buttonAuth.addEventListener("click", toggleModalAuth);
	closeAuth.addEventListener("click", toggleModalAuth);
	loginForm.addEventListener("submit", logIn);
}


function checkAuth() {
	if (login) {
		autorized();
	} else {
		notAutorized();
	}
}
checkAuth();