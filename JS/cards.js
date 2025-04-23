// Cards
const contactsCard = document.getElementById("contacts-card");
const passionsCard = document.getElementById("passions-card");
const homeCard = document.getElementById("home-card");
const designCard = document.getElementById("design-card");
const developmentCard = document.getElementById("development-card");

let cardNum = 2; // <-- home

// Banner buttons
const contactBanner = document.getElementById("contact-banner");
const passionBanner = document.getElementById("passions-banner");
const homeBanner = document.getElementById("home-banner");
const designBanner = document.getElementById("design-banner");
const developmentBanner = document.getElementById("development-banner");

let cardHashMap = new Map([
  [0, { card: contactsCard, banner: contactBanner }],
  [1, { card: passionsCard, banner: passionBanner }],
  [2, { card: homeCard, banner: homeBanner }],
  [3, { card: designCard, banner: designBanner }],
  [4, { card: developmentCard, banner: developmentBanner }],
]);

cardHashMap.forEach((val, i) => {
    val.banner.addEventListener("click", () => {
      cardNum = i;
      makeOtherCardsInvisible();
    });
  });
  

// Arrows
const arrowRight = document.getElementById("arrow-right");
const arrowLeft = document.getElementById("arrow-left");

arrowRight.addEventListener("click", () => {
  changeCardToLeft(false);
});

arrowLeft.addEventListener("click", () => {
  changeCardToLeft(true);
});


function changeCardToLeft(isLeft) {
  if (isLeft) {
    cardNum === 0 ? (cardNum = 4) : cardNum--;
  } else {
    cardNum === 4 ? (cardNum = 0) : cardNum++;
  }  
  makeOtherCardsInvisible()
}

// à changer pour ajouter des animations
function makeOtherCardsInvisible() {
    cardHashMap.forEach((val, i) => {
      if (i !== cardNum) {
        val.card.style.display = "none";
      } else {
        val.card.style.display = "block";
      }
    });
  }
  