const modal = document.querySelector("#modal");
const modalBtnClose = document.querySelector("#modal__btn-close");
const modalForm = document.querySelector(".modal__inner-form");
const modalFormInputNameSurname = document.querySelector(
  "#form__user-name-surname"
);
const modalFormInputEmail = document.querySelector("#form__user-email");
const modalText = document.querySelector("#modal__inner-text");

setTimeout(function () {
  /**
   * setting the modal to display block is more
   * consistent in layout and cross browser functionality
   * compared to setting it to inline
   */
  modal.style.display = "block";
}, 3500);

modalBtnClose.addEventListener("click", () => {
  modal.style.display = "none";
});

modalForm.addEventListener("submit", function (submit) {
  submit.preventDefault();
  console.log("Form Submitted!");
  modalFormInputNameSurname.value = "";
  modalFormInputEmail.value = "";
  modalText.innerHTML = `<div class="modal__inner-loading">
                          <img src="../assets/images/loading.svg" class="loading" />
                          <p id="modal__inner-upload-text">
                            Uploading your information to the dark web 😈
                          </p>`;
});
