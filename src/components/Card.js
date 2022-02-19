class Card {
    constructor(selector, {data}, handleCardClick, handleDeleteCard, handleLikeCard, userId) {
        this._selector = selector;
        this._name = data.ame;
        this._link = data.link;
        this._id = data._id;
        this._likes = data.likes.length;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCard = handleDeleteCard;
        this._handleLikeCard = handleLikeCard;
        this._cardOwnerId = data.owner._id;
        this._userId = userId;
        this._isLikeId = data.likes;
        this._isLike = this._isLikesId.some((item) => {
            return item._id === this._userId;
        });
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

    deleteButton = () => {
        this._element.remove();
    }

    getView() {
        this._element = this._getCard();
        this._like = this._element.querySelector('.element__like-button');
        this._element.querySelector('.element__container-title').textContent = this._name;
        this._elementImage = this._element.querySelector('.element__image');
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._delButton = this._element.querySelector('.element__del-button');
        this._countLikes = this._element.querySelector('.element__text');
        this._countLikes.textContent = this._likes;

        if (this._cardOwnerId !== this._userId) {
                this._delButton.classList.add('element__del-button_hide')
            }

        if (this._isLike) { 
            this._like.classList.add('element__like-button_active')
         }
        this._setEventListeners();
        return this._element;
    }

    likeCard (data) {
        this._countLikes.textContent = formData.likes.length;
        this._isLike = !this._isLike;
        if (this._isLike) { 
            this._like.classList.add('element__like-button_active') 

        } else { 
            this._like.classList.remove('element__like-button_active') 

        } 
    }

    getIsLike() {
        return this._isLike
    }

    _setEventListeners() {
        this._like.addEventListener('click', this._handleLikeCard);

        this._delButton.querySelector('.element__del-button').addEventListener('click', this._handleDeleteCard);
        
        this._elementImage.addEventListener('click', this._handleCardClick);
    }
}

export default Card;