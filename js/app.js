

(function() {
  window.addEventListener("load", () => {
    // loading
  const loadingBarEl = document.querySelector(".loading-bar__item");
  let width = 1;

  function loadingBar(num) {
    let loadingEl = setInterval(function() {
      if (width >= num) {
        clearInterval(loadingEl);
        document.querySelector(".loading-bar__item").style = "";
      } else {
        width++;
        loadingBarEl.style.width = width + "%";
      }
    }, 8);
  }
  loadingBar(100);
// end of logic loading
 document.querySelector(".loading-bar__item").style = "";
  });
})();
$(function() {
  $(window).on("load resize", function() {
    $(".fill-screen").css("height", window.innerHeight);
  });

   $(".js").animate({ width: "90%" }, 3000);
  $(".ds").animate({ width: "80%" }, 3000);
  $(".html").animate({ width: "85%" }, 3000);
  $(".bootstrap").animate({ width: "80%" }, 3000);
  $('.NodeJS').animate({width:'75%'},3000);
  $('.ReactJS').animate({width:'75%'},3000);
  $('.MongoDB').animate({width:'70%'},3000);
  $('.jquery').animate({width:'70%'},3000);
  

  // scrollspy
  $("body").scrollspy({
    target: ".navbar-nav ",
    offset: 150
  });

  $("nav a").bind("click", function() {
    $($(this).attr("href")).animatescroll({ scrollSpeed: 2000, padding: 50 });
    event.preventDefault();
  });

  /*
    $('.progress-bar').each(function() {
        var bar_value = $(this).attr('aria-valuenow') + '%';                
        $(this).animate({ width: 100% }, { duration: 2000, easing: 'easeOutCirc' });
    });*/

  // select all buttons
  const filterBtn = document.querySelectorAll(".filter-btn");
  //  console.log(filterBtn);
  filterBtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      event.preventDefault();
      const value = event.target.dataset.filter;
      //  console.log(value);
      const items = document.querySelectorAll(".store-item");
      items.forEach(function(item) {
        if (value === "all") {
          item.style.display = "block";
          item.classList.add("slideFromLeft");
        } else {
          if (item.classList.contains(value)) {
            item.style.display = "block";
            item.classList.add("slideFromLeft");
          } else {
            item.style.display = "none";
            item.classList.add("slideFromLeft");
          }
        }
      });
    });
  });
});
