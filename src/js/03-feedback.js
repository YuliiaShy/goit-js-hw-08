import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

initForm();

formEl.addEventListener('input', throttle(onInputForm, 500));

formEl.addEventListener('submit', onSubmitForm);

function onInputForm(event) {
  let savedMessage = localStorage.getItem('feedback-form-state');

  savedMessage = savedMessage ? JSON.parse(savedMessage) : {};

  savedMessage[event.target.name] = event.target.value;

  if (savedMessage) {
    localStorage.setItem('feedback-form-state', JSON.stringify(savedMessage));
  }
}

function onSubmitForm(event) {
  event.preventDefault();

    const formData = new FormData(formEl);
    
  formData.forEach((value, name) => {
    console.log(`${name}, ${value}`);
  });

  formEl.reset();

  localStorage.removeItem('feedback-form-state');
}

function initForm() {
  let localStorageMessage = localStorage.getItem('feedback-form-state');

  if (localStorageMessage) {
    localStorageMessage = JSON.parse(localStorageMessage);
  }

  Object.entries(localStorageMessage).forEach(([name, value]) => {
    formEl.elements[name].value = value;
  });
}
