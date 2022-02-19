import Card from '../components/Card.js';
import FormValidator from '../components//FormValidator.js';
import Section from '../components//Section.js';
import PopupWithImage from '../components//PopupWithImage.js';
import PopupWithForm from '../components//PopupWithForm.js';
import UserInfo from '../components//UserInfo.js';
import PopupConfirm from '../components/PopupConfirm.js';
import Api from '../components/Api.js';
import {
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
const validateAvatarPopup = new FormValidator(enableValidation, popupAvatar)
validateCardPopup.resetValidation();
validateProfilePopup.enableValidation();
validateCardPopup.enableValidation();
validateAvatarPopup.enableValidation();

const cardList = new Section({                                                               //рендер элементов массива карточек
    renderer: (item) => {
        const cardHTML = getCard(item);
        cardList.addItem(cardHTML);
    }
}, 
cardsContainer);

const popupImage = new PopupWithImage('#popup-image');
popupImage.setEventListeners();

function getCard(data) {
    const handleCardClick = () => {
        popupImage.open(data);
    };

    const handleDeleteCard = () => {
        popupConfirmation.open(data);
        popupConfirmation.setSubmitAction(() => {
            api.delCard(card._id)
            .then(res => {
                card.delCard();
                popupConfirmation.close()
            })
            .catch(err => console.log(`del card error: ${err}`))
        })
    };

    const handleLikeCard = () => {
        if(!card.getIsLike()) {
            api.putLike(card._id)
            .then(res => {
                card.likeCard(res);
            })
            .catch(err => console.log(`don't put a like: ${err}`))
        } else {
            api.delLike(card._id)
            .then(res => {
                card.likeCard(res);
            })
            .catch(err => console.log(`don't clear a like: ${err}`))
        }
    };

    const card = new Card('.template', {data}, handleCardClick, handleDeleteCard, user._getId(), handleLikeCard);
    const cardElement = card.getView();
    return cardElement;
}

cardList.renderer();



const user = new UserInfo({ name: '.profile__info-title', job: '.profile__info-subtitle', avatar: '.profile__avatar' });
const formProfile = new PopupWithForm({
    selector: '#popup-profile',
    handleFormSubmit: (data) => {
        formProfile.renderLoading(true)
        api.editProfile(data)
        .then(res => {
            const profile = {
                name: res.name,
                job: res.about,
                avatar: res.avatar,
                id: res._id
            }
            user.setUserInfo(profile);
            formProfile.close(); 
        })
        .catch(err => console.log(`update profile error: ${err}`))
        .finally(() => {
            formProfile.renderLoading(false)
        })
    }
});
formProfile.setEventListeners();

const formCard = new PopupWithForm({
    selector: '#popup-card',
    handleFormSubmit: (data) => {
        formCard.renderLoading(true)
        api.addCard(data)
        .then(res => {
            cardList.addItem(getCard({...res, id: res._id}));
            formCard.close();
        })
        .catch(err => console.log(`card add error: ${err}`))
        .finally(() => {
            formCard.renderLoading(false)
        })
    }
});
formCard.setEventListeners();

const popupConfirmation = new PopupConfirm('#popup-confirm');
popupConfirmation.setEventListeners();

const popupAvatar = new PopupWithForm({
    selector: '#popup-avatar',
    handleFormSubmit: (data) => {
        popupAvatar.renderLoading(true)
        api.avatarProfile(data)
        .then(res => {
            const profile = {
                name: res.name,
                job: res.about,
                avatar: res.avatar,
                id: res._id
            }
            user.setUserInfo(profile);
            popupAvatar.close();
        })
        .catch(err => console.log(`card del error: ${err}`))
        .finally(() => {
            popupAvatar.renderLoading(false)
        })
    }
});
popupAvatar.setEventListeners();

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

avatar.addEventListener('click', () => {
    popupAvatar.open();
    validateAvatarPopup.resetValidation();
})

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-35',
    headers: {
      authorization: 'ed47390f-0f67-4f27-8d83-0ca378497787',
      'Content-Type': 'application/json'
    }
  });

const getInfo =
    api.getProfileInfo()
    .then(userData => {
       return userData
     })
    .catch(err => console.log(`profile load error: ${err}`));

const getCards = 
    api.getInitialCards()
    .then(cards => {
       return cards
     })
    .catch(err => console.log(`cards load error: ${err}`));

Promise.all([getInfo, getCards])
     .then(([userData, cards])=> {
         user.setUserInfo({
             name: userData.name,
             job: userData.about,
             avatar: userData.avatar,
             id: userData._id
         })
         cardList.renderer(cards);
     })
     .catch(err => console.log(`data load error: ${err}`));

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