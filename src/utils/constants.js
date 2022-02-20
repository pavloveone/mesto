const cardsContainer = document.querySelector('.elements');
const openPopupProfile = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#popup-profile');
const openPopupCard = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('#popup-card');
const popupProfileForm = popupProfile.querySelector('.popup');
const nameInput = popupProfileForm.querySelector('input[name=name]');
const jobInput = popupProfileForm.querySelector('input[name=job]');
const avatar = document.querySelector('.profile__avatar');


const enableValidation = ({
    formSelector: '.popup',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-save',
    inactiveButtonClass: 'popup__btn-save_disabled',
    errorClass: 'popup__input_type_error',
    inputErrorClass: 'popup__error_visible'
});

export { 
    enableValidation,
    cardsContainer,
    openPopupProfile,
    popupProfile,
    openPopupCard,
    popupCard,
    jobInput,
    nameInput,
    popupProfileForm,
    avatar
};