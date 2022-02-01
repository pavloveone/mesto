import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor({ selector, handleFormSubmit }) {
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup');
    }

    _getInputValues() {
        this._inputs = this._form.querySelectorAll('.popup__input');
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
}

export default PopupWithForm;