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

//Selecting buttons and form
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseButton = profileEditModal.querySelector(
  ".modal__close-button"
);

//Selecting title and description with form inputs
let profileFormName = document.querySelector(".modal__form-name");
let profileFormDescription = document.querySelector(".modal__form-description");
let profileName = document.querySelector(".profile__title");
let profileDescription = document.querySelector(".profile__description");

//Function which add class that change visibility of form
function toggleForm() {
  profileEditModal.classList.toggle("modal__opened");
  /*Form inputs values of name and description will be same,
  as current name and description on page when form opened*/
  profileFormName.value = profileName.textContent;
  profileFormDescription.value = profileDescription.textContent;
}

//Two onClick events one open form and another close form
profileEditButton.addEventListener("click", toggleForm);
profileCloseButton.addEventListener("click", toggleForm);

//Selecting save button
const profileSaveButton = profileEditModal.querySelector(".modal__save-button");

//New function which will make Save button work properly
function saveFormChanges() {
  profileName.textContent = profileFormName.value;
  profileDescription.textContent = profileFormDescription.value;
  toggleForm();
}

profileSaveButton.addEventListener("click", saveFormChanges);
