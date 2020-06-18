(() => {
  const quote = document.querySelector("#quote");
  const quoteAuthor = document.querySelector(".quote-author");
  const btn = document.querySelector("#quote-btn");
  const quotesList = [
    {
      text: "Design is not for philosophy it's for life.",
      author: "- Issey Miyake -"
    },
    {
      text: "You cannot have a positive life and a negative mind.",
      author: "- Joyce Meyer -"
    },
    {
      text: "The true sign of intelligence is not knowledge, but imagination.",
      author: "- Albert Enstein -"
    },
    {
      text: "Do what you can, with what you have, where you are.",
      author: "- Theodore Roosevelt -"
    },
    {
      text: "The journey of a thousand miles begins with one step.",
      author: "- Lao Tzu -"
    },
    {
      text: "Don't cry because it's over. Smile because it happened.",
      author: "- Dr.Seuss -"
    },
    {
      text: "It always seems impossible until its done.",
      author: "- Nelson Mandela -"
    }
  ];

  btn.addEventListener("click", function() {
    let randomList = Math.floor(Math.random() * quotesList.length);
    quote.textContent = `" ${quotesList[randomList].text} "`;
    quoteAuthor.textContent = quotesList[randomList].author;
    document.querySelector("p").classList.add("show");
    document.querySelector("span").classList.add("show");
    setTimeout(function() {
      document.querySelector("p").classList.remove("show");
      document.querySelector("span").classList.remove("show");
    }, 1000);
  });
})();
