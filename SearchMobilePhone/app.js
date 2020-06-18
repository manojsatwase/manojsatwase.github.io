(function() {
  function MobileData(title, dataItem, cardText, img, price) {
    let mobileList = document.querySelector(".mobileList");
    let card = document.querySelector(".card");
    let div = document.createElement("div");
    div.innerHTML += `
        <div class="col-md-5 mx-auto">
         <div
          class="card ${dataItem} store-item mx-auto"
          data-item="${dataItem}"
          style="width: 18rem;"
        >
          <img style="height:280px !important"
            class="card-img-top"
            src=${img}
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Product :- ${title}</h5>
            <h6 class="card-title">price : - ${price} rs</h6>
            <p class="card-text">
             description :- ${cardText}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>

      `;
    mobileList.appendChild(div);
  }
  MobileData(
    "MI a2",
    "mi",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    9999
  );
  MobileData(
    "Iphone x",
    "iphone",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "https://images.unsplash.com/photo-1542068464-dede446db503?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "60,000"
  );
  MobileData(
    "Oppo f1",
    "oppo",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "https://images.unsplash.com/photo-1558885544-2defc62e2e2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    "16,000"
  );
  MobileData(
    "Oppo f2",
    "oppo",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
    "24,000"
  );
  MobileData(
    "Samsung m13",
    "samsung",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "https://images.unsplash.com/photo-1545138697-45eb2968b249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=659&q=80",
    "12,000"
  );
  MobileData(
    "Huawei",
    "huawei.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "https://images.unsplash.com/photo-1551355738-1875b6664915?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80",
    "15,000"
  );
  MobileData(
    "Lenovo.",
    "lenovo",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "12,000"
  );
  MobileData(
    "Motorola",
    "motorola",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "https://images.unsplash.com/photo-1543069190-9d380c458bc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=800",
    "18,000"
  );
  let search = document.querySelector("#search");
  let item = document.querySelectorAll(".store-item");
  search.addEventListener("keyup", function() {
    let value = search.value.toLowerCase().trim();
    item.forEach(item => {
      let type = item.dataset.item;
      let length = value.length;
      let match = type.slice(0, length);
      if (value === match) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
})();
