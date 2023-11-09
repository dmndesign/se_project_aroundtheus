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

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelectorAll("#profile-edit-modal");

profileEditButton.addEventListener("click", function () {
  profileEditModal.classList.toggle("modal__opened");
});

const profileCloseButton = document.querySelector(".modal__close-button");

profileCloseButton.addEventListener("click", function () {
  profileEditModal.classList.toggle("modal__opened");
});

let profileName = document.querySelector(".modal__form-name").value;
let profileDescription = document.querySelector(
  ".modal__form-description"
).value;

profileName.textContent = "Jacques Cousteau";
profileDescription.textContent = "Explorer";
