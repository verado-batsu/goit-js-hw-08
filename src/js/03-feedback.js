import throttle from "lodash.throttle";
import { load, save } from "./storage";

const formEl = document.getElementsByClassName('feedback-form')[0];

const FORM_DATA_KEY = "feedback-form-state";
const data = {
	email: '',
	message: '',
}

const emailEl = document.querySelector("[name = 'email']");
const messageEl = document.querySelector("[name = 'message']");

window.addEventListener("DOMContentLoaded", onLoaded);

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);


function onLoaded(e) {
	const loadedData = load(FORM_DATA_KEY);
	if (!loadedData) {
		return;
	}
	emailEl.value = loadedData.email;
	messageEl.value = loadedData.message;
	data.email = loadedData.email;
	data.message = loadedData.message;
}

function onFormSubmit(e) {
	e.preventDefault();
	if (emailEl.value === '' || messageEl.value === '') {
		alert("Обидва поля повинні бути заповнені!");
		return;
	}
	e.currentTarget.reset();
	console.log(load(FORM_DATA_KEY));
	localStorage.removeItem(FORM_DATA_KEY);
	data.email = '';
	data.message = '';
}

function onFormInput(e) {
	const currentInput = e.target;
	if (currentInput.name === 'email') {
		data.email = currentInput.value;
	}
	if (currentInput.name === 'message') {
		data.message = currentInput.value;
	}

	save(FORM_DATA_KEY, data);
	
	return;
}
	
