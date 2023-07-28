// Variable for suits and assigning a number value to the face cards 
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const faceCards = { 11: "Jack", 12: "Queen", 13: "King", 14: "Ace"};

// Creating the card object
function Card(value,suit)
{
    this.value = value;
    this.suit = suit;
}

// This is us creating our deck to input 52 card objects
function createDeck()
{
    const deck = []; //container for our deck 
    for (let suit of suits) 
    {
        for (let value =2; value <= 14; value++) //Since Ace was assigned 14, this the cards 2 - 14
        {
            deck.push(new Card(value, suit)); // This is how we add a card to our empty deck array
        }
    }
    return deck;
}

let deck = createDeck();
let hand = []; // Container to put cards for our 'hand'

// Function to draw five cards 
function drawCards()
{
    hand= []; // Another empty container for our hand, but will clear the last one if we have pulled already
    while (hand.length < 5)
    {
        // Create a random index between = and the current deck length
        const randomIndex = Math.floor(Math.random() * deck.length);
        
        // Use splice to remove a random card from randomly generated index 
        const card = deck.splice(randomIndex, 1)[0];
        hand.push(card); // This is our we add it to our hand
    }
}

// This is how were going to display it on our HTML 
function displayCards()
{
    const cardsDiv = document.getElementById("cards"); // Accesing our "cards" div
    cardsDiv.innerHTML = ""; // Clears previous cards displayed 

    // For loop to display card in hands 
    for(let card of hand)
    {
        let cardInfo = `Card: ${card.value} of ${card.suit}`;
        if (faceCards[card.value]) 
        {
            cardInfo = `Card: ${faceCards[card.value]} of ${card.suit}`; // If card value matches a face card, display name
        }

        const cardElement = document.createElement("p"); // This p element will be used to display card
        cardElement.textContent = cardInfo;
        cardsDiv.appendChild(cardElement); // Add the cardElement into the cardsDiv as a <p>
    }
}

function dealCards()
{
    // This is how we have it so cards are not reused between hands
    if (deck.length <5 ) 
    deck = createDeck();
    {
        drawCards(); // Draw our 5 random cards  
        displayCards(); //Dispaly cards on HTML 
    }
}