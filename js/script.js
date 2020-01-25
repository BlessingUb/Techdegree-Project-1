/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
 
  {
    quote : 'Mama always said life was like a box of chocolates. you never know what you are gonna get.' ,
    source: 'Forrest Gump',
    year : "1994"
  }, 
  {
    quote : 'There is no place like home',
    source : 'The Wizard of Oz ',
    year : "1939"
  },
  {
    quote : 'Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.' ,
    source : 'William Shakespeare',
    citation : "Twelfth Night", 
  },   
  {
    quote : 'Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind.' ,
    source : 'William Shakespeare',
    citation : "A Midsummer Night's Dream"
  }, 
  {
    quote : 'Always vote for principle, though you may vote alone, and you may cherish the sweetest reflection that your vote is never lost.' ,
    source : 'John Quincy Adams'
  }, 
  {
    quote : 'A day without laughter is a day wasted.' ,
    source : 'Charlie Chaplin'
  },
  {
    quote : 'There is a thin line that separates laughter and pain, comedy and tragedy, humor and hurt.' , 
    source : 'Erma Bombeck'
  }, 
  
  {
    quote : 'A winner is a dreamer who never gives up.' ,
    source : 'Nelson Mandela'
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
var randomNum = (Math.floor(Math.random() * quotes.length) ) 
return quotes[randomNum];
}
console.log(getRandomQuote());

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);