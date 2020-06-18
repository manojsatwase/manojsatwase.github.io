(function() {
  const user_Icon = document.querySelector("#user-icon");
  const user_close = document.querySelector(".user_close");
  const asideClassADD = document.querySelector("aside");
  const nav_Right_Left = document.querySelector("header");
  const mainContent = document.querySelector(".main");
  user_Icon.addEventListener("click", function() {
    asideClassADD.classList.add("show");
    asideClassADD.style.display = "block";
    nav_Right_Left.classList.add("navbar-rigth-left");
    mainContent.classList.add("navbar-rigth-left");
  });
  user_close.addEventListener("click", function() {
    asideClassADD.classList.remove("show");
    asideClassADD.style.display = "none";
    nav_Right_Left.classList.remove("navbar-rigth-left");
    mainContent.classList.remove("navbar-rigth-left");
  });
})();
