let popup = document.querySelector('.popup-blackout');
let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__btn-close');
let formContainer = document.querySelector('.popup');
let nameProfile = document.querySelector('.profile-info__title');
let jobProfile = document.querySelector('.profile-info__subtitle');
let nameInput = formContainer.querySelector('input[name=name]'); 
let jobInput = formContainer.querySelector('input[name=job]');

function open() {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}
function close() {
    popup.classList.remove('popup_opened');
}
openPopup.addEventListener('click', open);
closePopup.addEventListener('click', close);

function formSubmitHandler (evt) {  
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    close();
}

formContainer.addEventListener('submit', formSubmitHandler);
