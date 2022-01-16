class FormValidator {
    constructor(selector, form) {
        this._form = form;
        this._inputSelector = selector.inputSelector;
        this._submitButtonSelector = selector.submitButtonSelector;
        this._inactiveButtonClass = selector.inactiveButtonClass;
        this._inputErrorClass = selector.inputErrorClass;
        this._errorClass = selector.errorClass;
        this._inputs = this._form.querySelectorAll(this._inputSelector);
        this._buttonSave = this._form.querySelector(this._submitButtonSelector);
    }

    _showError = (input, errorMessageText) => {
        const errorMessage = this._form.querySelector(`#${input.id}-error`);
        errorMessage.textContent = errorMessageText;
        errorMessage.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _hideError = (input) => {
        const errorMessage = this._form.querySelector(`#${input.id}-error`);
        errorMessage.textContent = '';
        errorMessage.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    }

    _hasValidInput = () => {
        const inputsList = Array.from(this._inputs)
        return inputsList.some((el) => !el.validity.valid);
    }

    _toggleButtonError = () => {
        if (this._hasValidInput(this._inputs)) {
            this._buttonSave.classList.add(this._inactiveButtonClass);
            this._buttonSave.disabled = true;
        } else {
            this._buttonSave.classList.remove(this._inactiveButtonClass);
            this._buttonSave.disabled = false;
        }
    }

    _setInputListeners () {
        this._inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValid(input);
                this._toggleButtonError();
            })
        })
    };

    _checkInputValid = (input) => {
        if (!input.validity.valid) {
            this._showError(input, input.validationMessage);
        } else {
            this._hideError(input);
        }
    }

    resetValidation() {
        this._toggleButtonError();
  
        this._inputs.forEach((inputElement) => {
          this._hideError(inputElement) 
        });
  
      }  

    enableValidation = () => {
        this._setInputListeners();
    };
}

export default FormValidator;