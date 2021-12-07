const initialCards = [                                                            //массив карточек
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

const cardsContainer = document.querySelector('.elements');// поиск элементов
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
const placeInput = popupCard.querySelector('input[name=place]');
const linkInput = popupCard.querySelector('input[name=link]');

const popupImage = document.querySelector('#popup-image');
const popupFigure = popupImage.querySelector('.popup-image__figure');
const popupCaption = popupImage.querySelector('.popup-image__caption');
const closePopupImage = popupImage.querySelector('.popup__btn-close');

function renderCard() {                                                               //рендер элементов массива карточек
    const cardHTML = initialCards
    .map((card) => {
        return getCard(card);
    });

    cardsContainer.append(...cardHTML);
}
renderCard();

function getCard(card) {                                                               //функция создания карточки
    const newCard = templateCard.content.cloneNode(true);
    const cardTitle = newCard.querySelector('.element__container-title');
    const cardImage = newCard.querySelector('.element__image');
    cardTitle.textContent = card.name;
    cardImage.setAttribute('src', card.link);
	cardImage.setAttribute('alt', card.name);
    newCard.querySelector('.element__like-button').addEventListener('click', function(evt) {        // лайк
        evt.target.classList.toggle('element__like-button_active');
    });
    const removeCardBtn = newCard.querySelector('.element__del-button');            // удаление
    removeCardBtn.addEventListener('click', handlerRemoveCard);
    
    cardImage.addEventListener('click', () => {                                    // попап с изображением
        popupCaption.textContent = card.name;
        popupFigure.src = card.link;
        popupFigure.alt = card.name;
        openPopup(popupImage);
    });

    return newCard;
}

function openPopup(evt) {
    evt.classList.add('popup_opened');                                               // функция открытия попапа

}
function closePopup(evt) {
    evt.classList.remove('popup_opened');                                            // функция закрытия попапа
}


function handlerFormSubmit (evt) {                                                   // функция редактирования профиля
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup(popupProfile);
}


function handlerAddCard(evt) {                                                      // функция добавления места
    evt.preventDefault();
    const placeText = placeInput.value;
    const linkText = linkInput.value;
    const item = getCard({name: placeText, link: linkText});
    cardsContainer.prepend(item);
    placeInput.value = '';
    linkInput.value = '';
    closePopup(popupCard);
}


function handlerRemoveCard(evt) {                                                 // функция удаления элемента
    const targetEl = evt.target;
    const item = targetEl.closest('.element');
    item.remove();
}

openPopupProfile.addEventListener('click', () => {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    openPopup(popupProfile);
});

closePopupProfile.addEventListener('click', () => {
    closePopup(popupProfile);
});

popupProfileForm.addEventListener('submit', handlerFormSubmit);

openPopupCard.addEventListener('click', () => {
    openPopup(popupCard);
});

closePopupCard.addEventListener('click', () => {
    closePopup(popupCard);
});

closePopupImage.addEventListener('click', () => {
    closePopup(popupImage);
});

popupCardForm.addEventListener('submit', handlerAddCard);