import Popup from "./Popup.js";

class PopupConfirm extends Popup {
    constructor(selector) {
        super(selector);
        this._confirmButton = this._popup.querySelector('.popup__btn-save');
    }

    open(card) {
        super.open();
        this._element = card;
    }

    setSubmitAction(func) {
        this._handleDeleteCard = func;

    }

    setEventListeners() {
        super.setEventListeners();
        this._confirmButton.addEventListener('click', () => {
            this._handleDeleteCard(this._element);
        });
    }
}

export default PopupConfirm;