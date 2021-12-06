const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const cardsContainer = document.querySelector('.elements');
const templateCard = document.querySelector('.template');

const popupProfile = document.querySelector('#popup-profile');
const openPopupProfile = document.querySelector('.profile__edit-button');
const closePopupProfile = popupProfile.querySelector('.popup__btn-close');
const popupProfileForm = popupProfile.querySelector('.popup');
const nameProfile = document.querySelector('.profile__info-title');
const jobProfile = document.querySelector('.profile__info-subtitle');
const nameInput = popupProfileForm.querySelector('input[name=name]'); 
const jobInput = popupProfileForm.querySelector('input[name=job]');

const popupCard = document.querySelector('#popup-card');
const openPopupCard = document.querySelector('.profile__add-button');
const closePopupCard = popupCard.querySelector('.popup__btn-close');
const popupCardForm = popupCard.querySelector('.popup');

const addCard = popupCard.querySelector('.popup__btn-save');
const placeInput = popupCard.querySelector('input[name=place]');
const linkInput = popupCard.querySelector('input[name=link]');

const popupImage = document.querySelector('#popup-image');
const popupFigure = popupImage.querySelector('.popup-image__figure');
const popupCaption = popupImage.querySelector('.popup-image__caption');
const closePopupImage = popupImage.querySelector('.popup-image__btn-close');

function renderCard() {
    const cardHTML = initialCards
    .map((card) => {
        return getCards(card);
    });

    cardsContainer.append(...cardHTML);
}
renderCard();

function getCards(card) {
    const newCard = templateCard.content.cloneNode(true);
    const cardTitle = newCard.querySelector('.element__container-title');
    const cardImage = newCard.querySelector('.element__image');
    cardTitle.textContent = card.name;
    cardImage.setAttribute('src', card.link);
	cardImage.setAttribute('alt', card.name);
    newCard.querySelector('.element__like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like-button_active');
    });
    const removeCardBtn = newCard.querySelector('.element__del-button');
    removeCardBtn.addEventListener('click', handlerRemoveCard);
    
    function openImage() {
        popupCaption.textContent = card.name;
        popupFigure.src = card.link;
        popupFigure.alt = card.name;
        popupImage.classList.add('popup_opened');
    }
    cardImage.addEventListener('click', openImage);

    function closeImage() {
        popupImage.classList.remove('popup_opened');
    }
    closePopupImage.addEventListener('click', closeImage);

    return newCard;
}

function openProfile() {
    popupProfile.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}
openPopupProfile.addEventListener('click', openProfile);

function closeProfile() {
    popupProfile.classList.remove('popup_opened');
}
closePopupProfile.addEventListener('click', closeProfile);

function formSubmitHandler (evt) {  
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closeProfile();
}
popupProfileForm.addEventListener('submit', formSubmitHandler);

function openCard() {
    popupCard.classList.add('popup_opened');
}
openPopupCard.addEventListener('click', openCard);

function closeCard() {
    popupCard.classList.remove('popup_opened');
}
closePopupCard.addEventListener('click', closeCard);

function handlerAddCard(evt) {
    evt.preventDefault();
    const placeText = placeInput.value;
    const linkText = linkInput.value;
    const item = getCards({name: placeText, link: linkText});
    cardsContainer.prepend(item);
    placeInput.value = '';
    linkInput.value = '';
    closeCard();
}
addCard.addEventListener('click', handlerAddCard);

function handlerRemoveCard(evt) {
    const targetEl = evt.target;
    const item = targetEl.closest('.element');
    item.remove();
}

