
const showError = (form, input, errorMessageText, errorMessageClass, inputErrorClass) => {
    const errorMessage = form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = errorMessageText;
    errorMessage.classList.add(errorMessageClass);
    input.classList.add(inputErrorClass);
}

const hideError = (form, input, errorMessageClass, inputErrorClass) => {
    const errorMessage = form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = '';
    errorMessage.classList.remove(errorMessageClass);
    input.classList.remove(inputErrorClass);
}

const hasValidInput = (inputs) => {
    return Array.from(inputs).some((el) => !el.validity.valid);
}

const toggleButtonError = (inputs, button, inactiveButtonClass) => {
    if (hasValidInput(inputs)) {
        button.classList.add(inactiveButtonClass);
        button.disabled = true;
    } else {
        button.classList.remove(inactiveButtonClass);
        button.disabled = false;
    }
}

const checkInputValid = (form, input, { inputErrorClass, errorClass }) => {
    if (!input.validity.valid) {
        showError(form, input, input.validationMessage, inputErrorClass, errorClass);
    } else {
        hideError(form, input, inputErrorClass, errorClass);
    }
}

const setInputListeners = (form, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
    const inputs = form.querySelectorAll(inputSelector);
    const saveButton = form.querySelector(submitButtonSelector);
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValid(form, input, rest);
            toggleButtonError(inputs, saveButton, inactiveButtonClass);
        });
    });
}

const enableValidation = ({ formSelector, ...rest }) => {
    const forms = document.querySelectorAll(formSelector);

    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        setInputListeners(form, rest);
    });
}

enableValidation({
    formSelector: '.popup',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-save',
    inactiveButtonClass: 'popup__btn-save_disabled',
    errorClass: 'popup__input_type_error',
    inputErrorClass: 'popup__error_visible'
}); 