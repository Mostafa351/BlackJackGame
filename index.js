let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl= document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// get element using queryselector
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el");

function getRandomCard(){
 let randy =  Math.floor(Math.random()*13 +1);
 if (randy === 1)return 11;
 else if (randy > 10 )return 10;
 else return randy;
}

function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards.push(firstCard,secondCard);
  sum = cards[0]+cards[1];
  renderGame();
}

function renderGame(){
sumEl.textContent = `Sum: ${sum}`;
cardsEl.textContent = `Cards: ${cards[0]}  -  ${cards[1]}`;
for (let i = 2; i < cards.length; i++) {
  cardsEl.textContent += ` -  ${cards[i]}`;
}


  if(sum <= 20){
    sumEl.classList.remove("winner");
    messageEl.classList.remove("loser");
    messageEl.classList.remove("winner");
    sumEl.classList.remove("loser");
    message = "Do you want to draw another card?";
  }else if(sum === 21){
    messageEl.classList.remove("loser");
    messageEl.classList.remove("winner");
    sumEl.classList.remove("loser");
    message="You have got blackjack";
    hasBlackJack = true;
    sumEl.classList.add("winner");
    messageEl.classList.add("winner");
  }else{
    sumEl.classList.remove("winner");
    messageEl.classList.add("loser");
    sumEl.classList.add("loser");
    message = "You are out of the game";
    isAlive = false;
  }
  messageEl.textContent =message;
}

function drawNewCard(){
  if(isAlive && hasBlackJack === false){
    newCard()
  }
}

function newCard(){
  
  if(sum < 22 ){
    let newCard = getRandomCard();
  cards.push(newCard);
  sum += newCard;
    renderGame();
  }else{
    messageEl.textContent = "Game Over";
  }
  sumEl.textContent = `Sum: ${sum}`;
}

