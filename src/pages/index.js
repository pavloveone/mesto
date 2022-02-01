import Card from '../components/Card.js';
import FormValidator from '../components//FormValidator.js';
import Section from '../components//Section.js';
import PopupWithImage from '../components//PopupWithImage.js';
import PopupWithForm from '../components//PopupWithForm.js';
import UserInfo from '../components//UserInfo.js';
import {
    initialCards,
    enableValidation,
    cardsContainer,
    nameInput,
    jobInput,
    popupProfile,
    openPopupProfile,
    popupCard,
    openPopupCard
} from '../utils/constants.js';
import './index.css';

const validateProfilePopup = new FormValidator(enableValidation, popupProfile);
const validateCardPopup = new FormValidator(enableValidation, popupCard);
validateCardPopup.resetValidation();
validateProfilePopup.enableValidation();
validateCardPopup.enableValidation();

const cardList = new Section({                                                               //рендер элементов массива карточек
    items: initialCards,
    renderer: (card) => {
        const cardHTML = getCard(card);
        cardList.addItem(cardHTML);
    }
}, 
cardsContainer);

const popupImage = new PopupWithImage('#popup-image');
popupImage.setEventListeners();

function getCard(card) {
    const handleCardClick = () => {
        popupImage.open(card);
    };
    const item = new Card('.template', card, handleCardClick);
    const cardElement = item.getView();
    return cardElement;
}

cardList.renderer();



const user = new UserInfo({ name: '.profile__info-title', job: '.profile__info-subtitle' });
const formProfile = new PopupWithForm({
    selector: '#popup-profile',
    handleFormSubmit: (data) => {
        user.setUserInfo(data);
        formProfile.close(); 
    }
});
formProfile.setEventListeners();

const formCard = new PopupWithForm({
    selector: '#popup-card',
    handleFormSubmit: (data) => {
        const card = {
            name: data.name,
            link: data.link
        };
        const newCard = getCard(card);
        cardList.addItem(newCard);
        formCard.close();
    }
});

formCard.setEventListeners();

openPopupProfile.addEventListener('click', () => {
    const inputs = user.getUserInfo()
    nameInput.value = inputs.nameInput;
    jobInput.value = inputs.jobInput;
    formProfile.open();
});

openPopupCard.addEventListener('click', () => {
    formCard.open();
    validateCardPopup.resetValidation();
});

// function handleImageOpen(name, link) {                                      // попап с изображением
//     popupCaption.textContent = name;
//     popupFigure.src = link;
//     popupFigure.alt = name;
//     openPopup(popupImage);
// };

// const templateCard = document.querySelector('.template');

// function renderCard() {                                                               //рендер элементов массива карточек
//     const cardHTML = initialCards
//     .map((card) => {
//         return getCard(card);
//     });

//     cardsContainer.append(...cardHTML);
// }
// renderCard();

// function getCard(card) {                                                               //функция создания карточки
//     const newCard = templateCard.content.cloneNode(true);
//     const cardTitle = newCard.querySelector('.element__container-title');
//     const cardImage = newCard.querySelector('.element__image');
//     cardTitle.textContent = card.name;
//     cardImage.setAttribute('src', card.link);
// 	   cardImage.setAttribute('alt', card.name);
//     newCard.querySelector('.element__like-button').addEventListener('click', function(evt) {        // лайк
//         evt.target.classList.toggle('element__like-button_active');
//     });
//     const removeCardBtn = newCard.querySelector('.element__del-button');            // удаление
//     removeCardBtn.addEventListener('click', handleRemoveCard);
    
//     cardImage.addEventListener('click', () => {                                    // попап с изображением
//         popupCaption.textContent = card.name;
//         popupFigure.src = card.link;
//         popupFigure.alt = card.name;
//         openPopup(popupImage);
//     });

//     return newCard;
// }

// function handleRemoveCard(evt) {                                                 // функция удаления элемента
//     const targetEl = evt.target;
//     const item = targetEl.closest('.element');
//     item.remove();
// }


// const saveButton = document.querySelector('#popup-card-btn-save');
// const popupProfileOverlay = document.querySelector('#profile-overlay');
// const popupCardOverlay = document.querySelector('#card-overlay');
// const popupImageOverlay = document.querySelector('#image-overlay');



// const closePopupProfile = popupProfile.querySelector('.popup__btn-close');
// const nameProfile = document.querySelector('.profile__info-title');
// const jobProfile = document.querySelector('.profile__info-subtitle');



// const closePopupCard = popupCard.querySelector('.popup__btn-close');
// const placeInput = popupCard.querySelector('input[name=place]');
// const linkInput = popupCard.querySelector('input[name=link]');

// const popupImage = document.querySelector('#popup-image');
// const popupFigure = popupImage.querySelector('.popup-image__figure');
// const popupCaption = popupImage.querySelector('.popup-image__caption');
// const closePopupImage = popupImage.querySelector('.popup__btn-close');

// function openPopup(evt) {
//     evt.classList.add('popup_opened');                                               // функция открытия попапа
//     document.addEventListener('keydown', closePopupEsc);
// }
// function closePopup(evt) {
//     evt.classList.remove('popup_opened');                                           // функция закрытия попапа
//     document.removeEventListener('keydown', closePopupEsc);
// }

// function closePopupEsc(evt) {                                                  //функция закрытия попапа esc
//     if (evt.key === 'Escape') {
//         const openedPopup = document.querySelector('.popup_opened');
//         closePopup(openedPopup);
//     }
// }