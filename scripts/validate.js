
const showError = (form, input, errorMessageText, errorMessageClass, inputErrorClass) => {
    const errorMessage = form.querySelector(`#${input.id}--error`);
    errorMessage.textContent = errorMessageText;
    errorMessage.classList.add(errorMessageClass);
    input.classList.add(inputErrorClass);
}

const hideError = (form, input, errorMessageClass, inputErrorClass) => {
    const errorMessage = form.querySelector(`#${input.id}--error`);
    errorMessage.textContent = '';
    errorMessage.classList.remove(errorMessageClass);
    input.classList.remove(inputErrorClass);
}


const checkInputValid = (form, input, {inputErrorClass, errorClass }) => {
    if (!input.validity.valid) {
        showError(form, input, input.validationMassage, inputErrorClass, errorClass);
    } else {
        hideError(form, input, inputErrorClass, errorClass);
    }
}

const setEventListeners = (form, {inputSelector, ...rest}) => {
    const inputs = form.querySelectorAll(inputSelector);

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValid(form, input, rest);
        });
    });
}

const enableValidation = ({formSelector, ...rest }) => {
    const forms = document.querySelectorAll(formSelector);

    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        setEventListeners(form, rest);
    });
}

enableValidation({
    formSelector: '.popup',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}); 