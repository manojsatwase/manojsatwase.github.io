(function () {
  // Merge function from earlier
  function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    return results;
  }

  // Recrusive Merge Sort
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  function binarySearch(arr, elem, arrSearch) {
    let msg = document.getElementById("msg");

    // console.log("searching number is " + elem);
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
      if (elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
    }
    // return arr[middle] === elem
    //   ? (msg.innerText = `number is fount ${arr[middle]}`)
    //  arr[arr.length - 1]
    let markup = "";
    let searchMsg = document.getElementById("searchMsg");
    let displaySearch = item => {
      let { name, img, age, professional, link, developer, desciption } = item[middle];

      markup += `
   
     <div class="row">
 <div class="col s4 m4">
 <div class="card">
   <div class="card-image">
     <img src=${img}>
     <span class="card-title">name : ${name}</span>
   </div>
   <div class="card-content">
     <h4>About Me:</h4>
     <p>${desciption}</p>
   </div>
   <div class="card-action">
     <a href='#'>I'm a ${developer}</a>
     <a class="blue-text ml-5" target="_" href='https://manojsatwase.github.io/'>${link}</a>
   </div>
 </div>
</div>
</div>
    `;
      searchMsg.innerHTML = markup;
    };

    return arr[middle] === elem
      ? displaySearch(arrSearch)
      : (searchMsg.innerHTML = "" + " search item is not found");
  }

  function SearchBinary() {
    let searchItem = document.getElementById("search");
    searchItem.onkeyup = function (e) {
      if (!searchItem) return null;
      if (e.keyCode == 13) {
        let deval = {
          name: "deval",
          img: "deval.jpg",
          desciption: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          developer: "SQL developer",
          link: "click here"
        };
        let shubham = {
          name: "shubham",
          img: "subham.jpg",
          desciption: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          developer: "Java Developer",
          link: "click here"
        };
        let manoj = {
          name: "manoj",
          img:
            "https://pbs.twimg.com/profile_images/1159031468741390336/cQXyltgq_400x400.jpg",
          desciption: "I’m a Full js Stack Developer in building website with a big interest in pure CSS3, HTML5, Bootstrap4 and Javascript, React Js Node Js and MongoDB.",
          developer: "Frond End Developer",
          link: "MyPortfolio"
        };

        let rahul = {
          name: "rahul",
          img: "rahul.jpg",
          desciption: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          developer: "Java Developer",
          link: "click here"
        };
        let atul = {
          name: "atul",
          img: "atul.JPG",
          desciption: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          developer: "NA",
          link: "click here"
        };
        let suyog = {
          name: "suyog",
          img: "suyog.jpg",
          desciption: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          developer: "SQl and PLSQL Developer",
          link: "click here"
        };
        let arrSearch = [atul, deval, manoj, rahul, shubham, suyog];

        let newArr = arrSearch.map(item => item.name);
        // console.log(
        //   newArr.map(item => sort(a, b => b.name.length - a.name.length))
        // );

        binarySearch(mergeSort(newArr), searchItem.value, arrSearch);
        searchItem.value = "";
      }
    };
  }
  SearchBinary();
})();