import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const dataForm = { email: '', message: '' };
const KEY_STORAGE = 'feedback-form-state';
populationInput();

feedbackForm.addEventListener('input', throttle(onInputForm, 500));
feedbackForm.addEventListener('submit', onSubmitForm);
function onInputForm(event) {
  const keyForm = event.target.name;
  const valueForm = event.target.value;
  dataForm[keyForm] = valueForm;
  localStorage.setItem(KEY_STORAGE, JSON.stringify(dataForm));
}

function onSubmitForm(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(KEY_STORAGE);
  console.log(dataForm);
  dataForm.email = '';
  dataForm.message = '';
}
function populationInput() {
  const saveData = localStorage.getItem(KEY_STORAGE);
  const parseData = JSON.parse(saveData);
  if (parseData) {
    textarea.value = parseData.message;
    input.value = parseData.email;
    Object.assign(dataForm, parseData);
  }
}
