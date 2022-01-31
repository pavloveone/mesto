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

const enableValidation = ({
    formSelector: '.popup',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-save',
    inactiveButtonClass: 'popup__btn-save_disabled',
    errorClass: 'popup__input_type_error',
    inputErrorClass: 'popup__error_visible'
});

const cardsContainer = document.querySelector('.elements');  // поиск элементов
const openPopupProfile = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#popup-profile');
const openPopupCard = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('#popup-card');
const popupProfileForm = popupProfile.querySelector('.popup');
const nameInput = popupProfileForm.querySelector('input[name=name]');
const jobInput = popupProfileForm.querySelector('input[name=job]');

export { 
    initialCards,
    enableValidation,
    cardsContainer,
    openPopupProfile,
    popupProfile,
    openPopupCard,
    popupCard,
    jobInput,
    nameInput,
    popupProfileForm
};