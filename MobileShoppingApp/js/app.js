$(document).ready(function() {
  // create request server to client data

  const cardItem = document.querySelector(".cardItem");
  const hideLoginPage = document.querySelector("#hideLoginPage");
  const footerDisplay = document.querySelector("#footer");
  var results = [];

  function displayData(result) {
    let display = "";
    result.cardItems.forEach(item => {
      console.log(item.name);
      const { img, name, price, Colour, SizeName, description } = item;

      display += `
      <div class="card mb-5 col-md-4 " >
     <img class="card-img-top img-fluid" src=${img} alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">mobile name :${name}</h4>
        <h4 class="card-title">price : ${price}</h4>
         <h4 class="card-title">Colour : ${Colour}</h4>
         <h4 class="card-title">SizeName : ${SizeName}</h4
        <p>${description}</p>
    <button class="btn btn-primary" type="button">...more</button>
  </div>
</div>
       
       `;
    });
    cardItem.innerHTML = display;
    $("#hideLoginPage").css({ display: "none" });
    $("#showLogin").css({ display: "block" });
    footerDisplay.style.display = "block";
  }

  $("#LoginForm").on("submit", function(e) {
    e.preventDefault();
    const username = $("#username").val();
    const password = $("#password").val();
    const confirm_Password = $("#confirm_password").val();
    if (username && password && confirm_Password) {
      $.post("/app/login ", {}, function(data) {
        displayData(data);
      }).fail(function(data) {
        $(".msg")
          .text("Server Not Responding!!")
          .css({
            color: "red",
            fontSize: "14px",
            fontWeight: "bold",
            marginTop: "20px",
            letterSpacing: "0.1rem",
            textTransform: "capitalize"
          });
      });
    } else {
      $(".msg")
        .text("username and password mandatory!!")
        .css({
          color: "red",
          fontSize: "14px",
          fontWeight: "bold",
          marginTop: "20px",
          letterSpacing: "0.1rem",
          paddingLeft: "4rem",
          textTransform: "capitalize"
        });
    }
  });
});
