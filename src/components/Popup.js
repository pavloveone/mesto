class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');                                               // функция открытия попапа
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');                                           // функция закрытия попапа
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        const closePopupOverlay = this._popup.querySelector('.popup-overlay');
        const closePopupButton = this._popup.querySelector('.popup__btn-close');
        closePopupOverlay.addEventListener('click', () => this.close());
        closePopupButton.addEventListener('click', () => this.close());
    }
}

export default Popup;   