
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const dataForm = {};

formEl.addEventListener('submit', onSubmitForm);
formEl.addEventListener('input', throttle(onInputForm, 500));

initForm();

function initForm() {
  const localStorageGet = localStorage.getItem(STORAGE_KEY);

  if (localStorageGet) {
    const { email, message } = JSON.parse(localStorageGet);
    formEl.email.value = email;
    formEl.message.value = message;
    dataForm.email = email;
    dataForm.message = message;
  }
}

function onInputForm(event) {
  dataForm[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function onSubmitForm(event) {
  event.preventDefault();

  formEl.reset();

  localStorage.removeItem(STORAGE_KEY);

  console.log(dataForm);
}
