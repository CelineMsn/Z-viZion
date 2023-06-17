var cards = document.querySelectorAll(".cardo__inner");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function (e) {
    cards[i].classList.toggle("is-flipped");
  });
}

function makeAge() {
  var age = document.querySelector("#age");
  const ageNumber =
    new Date().getFullYear() - new Date(1988, 10 - 1, 10).getFullYear() - 1;
  console.log(ageNumber);
  console.log(age)
  //make it work later:
  // age && (if it doesn't work or is null then it won't continue)
  if (age)
    age.innerHTML = ageNumber;
}
makeAge();
