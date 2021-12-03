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
const closePopupProfile = document.querySelector('.popup__btn-close');
const popupProfileForm = document.querySelector('.popup');
const nameProfile = document.querySelector('.profile__info-title');
const jobProfile = document.querySelector('.profile__info-subtitle');
const nameInput = popupProfileForm.querySelector('input[name=name]'); 
const jobInput = popupProfileForm.querySelector('input[name=job]');

const popupCard = document.querySelector('#popup-card');
const openPopupCard = document.querySelector('.profile__add-button');
const closePopupCard = document.querySelector('.popup-card__btn-close');
const popupCardForm = document.querySelector('.popup-card');

const addCard = document.querySelector('.popup-card__btn-save');
const placeInput = document.querySelector('input[name=place]');
const linkInput = document.querySelector('input[name=link]');

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
    popupCard.classList.add('popup-card_opened');
}
openPopupCard.addEventListener('click', openCard);

function closeCard() {
    popupCard.classList.remove('popup-card_opened');
}
closePopupCard.addEventListener('click', closeCard);

function handlerAddCard() {
    const placeText = placeInput.value;
    const item = getCards({name: placeText});
    cardsContainer.prepend(item);

    placeInput.value = '';
    closeCard();
}

addCard.addEventListener('click', handlerAddCard);

likeButton.addEventListener('click', function (evt) {
    console.log(evt);
});