class Popup {
    constructor(selector) {
        this._selector = document.querySelector(selector);
    }

    open() {
        this._selector.classList.add('popup_opened');                                               // функция открытия попапа
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._selector.classList.remove('popup_opened');                                           // функция закрытия попапа
        document.removeEventListener('keydown', this.__handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        const closePopupOverlay = this._selector.querySelector('.popup-overlay');
        const closePopupButton = this._selector.querySelector('.popup__btn-close');
        closePopupOverlay.addEventListener('click', () => this.close());
        closePopupButton.addEventListener('click', () => this.close());
    }
}

export default Popup;   