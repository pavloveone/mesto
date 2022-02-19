import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor({ selector, handleFormSubmit }) {
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup');
        this._inputs = this._form.querySelectorAll('.popup__input');
        this._submitBtn = this._form.querySelector('.popup__btn-save');
        this._text = this._submitBtn.textContent;
    }

    _getInputValues() {
        this._formValues = {};
        this._inputs.forEach(input => {
        this._formValues[input.name] = input.value;
        });

    return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
    }

    close() {
        super.close();
        this._form.reset();
    }

    renderLoading(isLoading, btnText = 'Сохранение...') {
        if (isLoading) {
          this._submitBtn.textContent = btnText;
        } else {
          this._submitBtn.textContent = this._text;
        }
      }
}

export default PopupWithForm;