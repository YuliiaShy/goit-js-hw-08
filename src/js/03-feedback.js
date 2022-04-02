
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const dataForm = {};

initForm();

formEl.addEventListener('submit', onSubmitForm);
formEl.addEventListener('input', throttle(onInputForm, 500));

function onInputForm(event) {
  dataForm[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function initForm() {
  const localStorageGet = localStorage.getItem(STORAGE_KEY);

  if (localStorageGet) {
    const { email, message } = JSON.parse(localStorageGet);
    formEl.email.value = email || '';
    formEl.message.value = message || '';
    dataForm.email = email;
    dataForm.message = message;
  }
}

function onSubmitForm(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    alert('Please fill in all the fields!');
    return;
  }

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, key) => {
    console.log(`${key}, ${value}`);
  });

  formEl.reset();

  localStorage.removeItem(STORAGE_KEY);
}

