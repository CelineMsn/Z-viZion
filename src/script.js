var cards = document.querySelectorAll(".cardo__inner");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function (e) {
    cards[i].classList.toggle("is-flipped");
  });
}
