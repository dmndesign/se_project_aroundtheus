//Cards Array
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/*----------------------------------------------------------------------------*/
/*----------------------------------ELEMENTS----------------------------------*/
/*----------------------------------------------------------------------------*/

//Selecting profile elements
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddCardButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//Selecting modal elements
const modal = document.querySelector(".modal");
const modalCloseButton = modal.querySelector(".modal__close-button");

//Selecting modal profile elements
const modalProfileFormName = modal.querySelector(".modal__form-name_profile");
const modalProfileFormDescription = modal.querySelector(
  ".modal__form-description_profile"
);

//Selecting modal newplace elements
const modalNewPlaceFormTitle = modal.querySelector(
  ".modal__form-title_newplace"
);
const modalNewPlaceFormLink = modal.querySelector(".modal__form-url_newplace");

//Selecting modal form
const modalProfileForm = modal.querySelector(".modal__form_profile");
const modalNewPlaceForm = modal.querySelector(".modal__form_newplace");

//Selecting modal image preview elements
const modalImagePreview = modal.querySelector(".modal__image_preview");
const modalImageCaption = modal.querySelector(".modal__caption_preview");

//Selecting card list
const cardList = document.querySelector(".cards__list");

//Selecting card template
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/*-----------------------------------------------------------------------------*/
/*----------------------------------FUNCTIONS----------------------------------*/
/*-----------------------------------------------------------------------------*/

function openPopup() {
  modal.classList.add("modal_opened");
}

function closePopup() {
  modal.classList.remove("modal_opened");
}
/*Function that makes inputs values of name and description being
same as current name and description on page when form opened*/
function openProfilePopup() {
  modalProfileFormName.value = profileName.textContent;
  modalProfileFormDescription.value = profileDescription.textContent;
  openPopup();
}

//Function which will get card data
function getCardData(cardData) {
  //Selecting card and cloning it same amount of times as array length
  const cardElement = cardTemplate.cloneNode(true);

  //Selecting images and title of our card
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  //Selecting like button
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  //Selecting delete button
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  //Setting text, image and alt data same as arrays data
  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  //OnClick event for heart icon which will change color of it
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_black");
  });

  //OnClick event for trash icon which will delete card
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  //OnClick event which will open image preview with caption
  cardImage.addEventListener("click", () => {
    modalImagePreview.src = cardImage.src;
    modalImageCaption.textContent = cardTitle.alt;
    openPopup();
  });

  return cardElement;
}

//Function which will render card
function renderCard(cardData) {
  cardList.prepend(getCardData(cardData));
}

//Function which will save changes that we made with profile form
function modalProfileFormChanges(event) {
  event.preventDefault();
  profileName.textContent = profileFormName.value;
  profileDescription.textContent = profileFormDescription.value;
  openPopup();
}

//Function which will add new place card
function modalNewPlaceAddCardForm(event) {
  event.preventDefault();
  const link = newplaceFormLink.value;
  const name = newplaceFormTitle.value;
  renderCard({
    name: name,
    link: link,
  });
  openPopup();
}

//Function that will make all cards visible
initialCards.forEach((cardData) => {
  renderCard(cardData);
});

/*-----------------------------------------------------------------------------------*/
/*----------------------------------SUBMIT HANDLERS----------------------------------*/
/*-----------------------------------------------------------------------------------*/

//Submit profile form
modalProfileForm.addEventListener("submit", modalProfileFormChanges);

//Submit new place form
modalNewPlaceForm.addEventListener("submit", modalNewPlaceAddCardForm);

/*-----------------------------------------------------------------------------------*/
/*----------------------------------EVENT LISTENERS----------------------------------*/
/*-----------------------------------------------------------------------------------*/

//Open profile edit form
profileEditButton.addEventListener("click", openProfilePopup);

//Close any modal
modalCloseButton.addEventListener("click", closePopup);

//Open form which will add new place
profileAddCardButton.addEventListener("click", openPopup);
