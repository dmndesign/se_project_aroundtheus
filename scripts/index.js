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

//Selecting title and description with form inputs
const profileFormName = document.querySelector(".modal__form-name");
const profileFormDescription = document.querySelector(
  ".modal__form-description"
);
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//Selecting form for submit event
const profileEditForm = profileEditModal.querySelector(".modal__form");

//Selecting card list
const cardList = document.querySelector(".cards__list");

//Selecting card template
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

//Selecting add card pop up elements
const addNewCardButton = document.querySelector(".profile__add-button");
const addNewCardContainer = document.querySelector("#addcard-button");
const addNewCardForm = addNewCardContainer.querySelector(".addcard__form");

/*-----------------------------------------------------------------------------*/
/*----------------------------------FUNCTIONS----------------------------------*/
/*-----------------------------------------------------------------------------*/

//Function which add class that change visibility of modal
function togglePopup() {
  profileEditModal.classList.toggle("modal_opened");
}
//Function which add class that change visibility of addcard pop up
function toggleNewcardPopup() {
  addNewCardContainer.toggle("addcard_opened");
}
/*Function that makes inputs values of name and description being
same as current name and description on page when form opened*/
function openProfilePopup() {
  profileFormName.value = profileName.textContent;
  profileFormDescription.value = profileDescription.textContent;
  togglePopup();
}

//Function which will take all cards from array
function getCardElement(data) {
  //Selecting card and cloning it same amount of times as array length
  const cardElement = cardTemplate.cloneNode(true);
  //Selecting images and title of our card
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  //Setting text, image and alt data same as arrays data
  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;
  return cardElement;
}

function saveFormChanges(event) {
  event.preventDefault();
  profileName.textContent = profileFormName.value;
  profileDescription.textContent = profileFormDescription.value;
  togglePopup();
}

//Function that will make all cards visible
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardList.append(cardElement);
});

/*-----------------------------------------------------------------------------------*/
/*----------------------------------SUBMIT HANDLERS----------------------------------*/
/*-----------------------------------------------------------------------------------*/

//OnClick event which will save changes that we entered in form and close it
profileEditForm.addEventListener("submit", saveFormChanges);

/*-----------------------------------------------------------------------------------*/
/*----------------------------------EVENT LISTENERS----------------------------------*/
/*-----------------------------------------------------------------------------------*/

//Two onClick events one open form and another close form
profileEditButton.addEventListener("click", openProfilePopup);
profileCloseButton.addEventListener("click", togglePopup);
addNewCardButton.addEventListener("click", toggleNewcardPopup);
