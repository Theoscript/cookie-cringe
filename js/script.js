const modal = document.querySelector("#modal");
const modalBtnClose = document.querySelector("#modal__btn-close");

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
