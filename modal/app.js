(function () {
 const loginBtn = document.querySelector("#Login__Button");
 const modal = document.querySelector(".modal");
 const modaldialog = document.querySelector(".modal__dialog");
 function main() {
  loginBtn.addEventListener("click", function (e) {
   modal.classList.add("in", "modal-backdrop")
  })
  window.addEventListener("click", function (e) {
   console.log(e.target)
   if (e.target === modaldialog || e.target === modal) {
    modal.classList.remove("in", "modal-backdrop")
   }
  })
 }
 main()
}());
