const suits = ["hearts", "clubs", "diamonds", "spades"];
const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const card = document.querySelector(".card");

function generateRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomCard = numbers[Math.floor(Math.random() * numbers.length)];

  card.className = `card ${randomSuit}`;

  document.querySelector(".center").textContent = randomCard;

  const suitsElements = document.querySelectorAll(".suit");

  suitsElements.forEach(suitElement => {
    suitElement.textContent = "";
    suitElement.classList.remove("hearts", "clubs", "diamonds", "spades");
    suitElement.classList.add(randomSuit);
    suitElement.textContent = suitElement.getAttribute("data-suit");
  });
}

generateRandomCard();
