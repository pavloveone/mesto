class Card {
    constructor(selector, name, link, handleImageOpen) {
        this._selector = selector;
        this._name = name;
        this._link = link;
        this._handleImageOpen = handleImageOpen;
    }

    _getCard() {
        return document.querySelector(this._selector)
            .content
            .querySelector('.element')
            .cloneNode(true)
    }

    _likeButton = () => {
        this._like.classList.toggle('element__like-button_active');
    }

    _deleteButton = () => {
        this._element.remove();
    }

    getView() {
        this._element = this._getCard();
        this._like = this._element.querySelector('.element__like-button');
        this._element.querySelector('.element__container-title').textContent = this._name;
        this._elementImage = this._element.querySelector('.element__image');
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._setEventListeners();
        return this._element;
    }

    _setEventListeners() {
        this._like.addEventListener('click', this._likeButton);

        this._element.querySelector('.element__del-button').addEventListener('click', this._deleteButton);
        
        this._elementImage.addEventListener('click', () => {
            this._handleImageOpen(this._name, this._link)
        });
    }
}

export default Card;