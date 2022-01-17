export {};


// this is my main.js located in scripts catalog
// document.getElementById('script') = "<p> hii </p>"




// 1. Select the div element using the id property
const app = document.getElementById("scipt");

// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");

// 3. Add the text content
p.textContent = "Hello, World!";

// 4. Append the p element to the div element
app?.appendChild(p);



// function displayCards(cards: any) {
    
    
// }
//if no cards = show create first card!
// if card isn't filled = no show
// if card is filled = show
// max 5 cards 