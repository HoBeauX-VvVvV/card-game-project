// 1. Declare variables (arrays) for two decks of cards.
let deck1 = [];
let deck2 = [];
let cardToRemove;
// 2. Create HTML elements (two <div>s) for the card decks:
let deck1El = document.querySelector('#deck-1');
let deck2El = document.querySelector('#deck-2');
  // 1. Deck 1 should display the back of a card with a shadow outline, indicating a larger stack.
  // 2. Deck 2 should display an empty card outline.
// 3. Create cached element references for each of the card decks.
// 4. Add an event listener for the "Flip" button.

const render = (cardPicked) => {
    if (deck2.length === 1) {
        deck2El.classList.remove('outline');
     } if (deck2.length > 1 ) {
            deck2El.classList.remove(cardToRemove);
        }
        cardToRemove = cardPicked
        deck2El.classList.add(cardPicked)
        if (deck2.length === 26) {
            deck2El.classList.add('shadow');
            deck1El.classList.remove('shadow');
        }if (deck1.length === 0) {
            deck1El.classList.add('outline');
            deck1El.classList.remove('back-blue');
        }
    } 

const handleClick = () => {
    if (deck1.length > 0) {
        let randomIdx = Math.floor(Math.random() * deck1.length);
        let cardPicked = deck1.splice(randomIdx, 1)[0];
        deck2.push(cardPicked)
        render(cardPicked);
    }
}
document.querySelector('#btn').addEventListener('click', handleClick);
// 5. Write an initialization function that assigns 52 cards" to deck 1, then invoke it.

const init = () => {
    deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}
init();
// 6. Declare a render() function to display a card after it is flipped.
// 7. Stub up a handleClick() function for the event listener to call.


  // 1. Select a random card from deck 1.
  // 2. Remove the card from deck 1.
  // 3. Add the card to deck 2.
  // 4. Call the render() function and pass the card to it.

// 8. Within the render() function (situated above handleClick()):

  // 1. After the first card is picked, remove the outline on deck 2.
  // 2. Add the class name to display the card picked on deck 2.
  // 3. When half of the cards are flipped, move the shadow from deck 1 to deck 2.
  // 4. When the final card is picked, add an outline to deck 1.
