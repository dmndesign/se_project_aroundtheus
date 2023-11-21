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

//Selecting buttons and form
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseButton = profileEditModal.querySelector(
  ".modal__close-button"
);
const newplaceAddButton = document.querySelector(".profile__add-button");
const newplacePopup = document.querySelector("#newplace-popup");
const newplaceClose = newplacePopup.querySelector(".newplace__close-button");
const previewImageContainer = document.querySelector("#preview-image");
const previewCloseButton = previewImageContainer.querySelector(
  ".preview__close-button"
);
const previewImage = previewImageContainer.querySelector(".preview__image");
//Selecting title and description with form inputs
const profileFormName = document.querySelector(".modal__form-name");
const profileFormDescription = document.querySelector(
  ".modal__form-description"
);
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const newplaceFormTitle = document.querySelector(".newplace__form-title");
const newplaceFormLink = document.querySelector(".newplace__form-url");

//Selecting form for submit event
const profileEditForm = profileEditModal.querySelector(".modal__form");
const newplaceForm = newplacePopup.querySelector(".newplace__form");

//Selecting card list
const cardList = document.querySelector(".cards__list");

//Selecting card template
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/*-----------------------------------------------------------------------------*/
/*----------------------------------FUNCTIONS----------------------------------*/
/*-----------------------------------------------------------------------------*/

//Function which add class that change visibility of modal
function togglePopup() {
  profileEditModal.classList.toggle("modal_opened");
}

//Function which will toggle add card pop up
function toggleNewplacePopup() {
  newplacePopup.classList.toggle("newplace_opened");
}
//Function which will toggle image preview
function toggleImagePreview() {
  previewImageContainer.classList.toggle("preview_opened");
}
/*Function that makes inputs values of name and description being
same as current name and description on page when form opened*/
function openProfilePopup() {
  profileFormName.value = profileName.textContent;
  profileFormDescription.value = profileDescription.textContent;
  togglePopup();
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

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_black");
  });

  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    previewImage.src = cardImage.src;
    toggleImagePreview();
  });

  return cardElement;
}

function renderCard(cardData) {
  cardList.prepend(getCardData(cardData));
}

function saveFormChanges(event) {
  event.preventDefault();
  profileName.textContent = profileFormName.value;
  profileDescription.textContent = profileFormDescription.value;
  togglePopup();
}

//Function which will add newplace card
function newplaceCreate(event) {
  event.preventDefault();
  const link = newplaceFormLink.value;
  const name = newplaceFormTitle.value;
  renderCard({
    name: name,
    link: link,
  });
  toggleNewplacePopup();
}

//Function that will make all cards visible
initialCards.forEach((cardData) => {
  renderCard(cardData);
});

/*-----------------------------------------------------------------------------------*/
/*----------------------------------SUBMIT HANDLERS----------------------------------*/
/*-----------------------------------------------------------------------------------*/

//OnClick event which will save changes that we entered in form and close it
profileEditForm.addEventListener("submit", saveFormChanges);
newplaceForm.addEventListener("submit", newplaceCreate);
/*-----------------------------------------------------------------------------------*/
/*----------------------------------EVENT LISTENERS----------------------------------*/
/*-----------------------------------------------------------------------------------*/

//Click events close, open pop ups
profileEditButton.addEventListener("click", openProfilePopup);
profileCloseButton.addEventListener("click", togglePopup);
newplaceAddButton.addEventListener("click", toggleNewplacePopup);
newplaceClose.addEventListener("click", toggleNewplacePopup);
//Close image preview on click
previewCloseButton.addEventListener("click", toggleImagePreview);
