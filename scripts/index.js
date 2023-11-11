//Cards Array
const initialCards = [
  (object1 = {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  }),
  (object2 = {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  }),
  (object3 = {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  }),
  (object4 = {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  }),
  (object5 = {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  }),
  (object6 = {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  }),
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

//Selecting save button
const profileSaveButton = profileEditModal.querySelector(".modal__save-button");

//Selecting card list
const cardList = document.querySelector(".cards__list");

//Selecting card template
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/*-----------------------------------------------------------------------------*/
/*----------------------------------FUNCTIONS----------------------------------*/
/*-----------------------------------------------------------------------------*/

//Function which add class that change visibility of form
function toggleForm() {
  profileEditModal.classList.toggle("modal__opened");
  /*Form inputs values of name and description will be same,
  as current name and description on page when form opened*/
  profileFormName.value = profileName.textContent;
  profileFormDescription.value = profileDescription.textContent;
}

//Function which will make Save button work properly
function saveFormChanges(event) {
  event.preventDefault();
  profileName.textContent = profileFormName.value;
  profileDescription.textContent = profileFormDescription.value;
  toggleForm();
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
  //Adding styling to our images because it being removed because we using link as source
  cardImage.style.borderRadius = "10px 10px 0px 0px";
  return cardElement;
}

//Function that will make all cards visible
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardList.append(cardElement);
});

/*-----------------------------------------------------------------------------------*/
/*----------------------------------EVENT LISTENERS----------------------------------*/
/*-----------------------------------------------------------------------------------*/

//Two onClick events one open form and another close form
profileEditButton.addEventListener("click", toggleForm);
profileCloseButton.addEventListener("click", toggleForm);

//OnClick event which will save changes that we entered in form and close it
profileSaveButton.addEventListener("click", saveFormChanges);
