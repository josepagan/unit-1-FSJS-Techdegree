/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

 const quotes = [
  {
    quote:"Talk is cheap. Show me the code.",
    source:"Linus Torvalds",
  },
  {
    quote:"Programs must be written for people to read, and only incidentally for machines to execute.",
    source:"Harold Abelson",
    citation:"Structure and Interpretation of Computer Programs",
    year:"1984",
  },
  {
    quote:"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    source:"John Woods",
  },
  {
    quote:"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    source:"Rick Cook",
    citation:"The Wizardry Compiled",
    year:"1990",
  },
  {
    quote:"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source:"Martin Fowler",
  },
  {
    quote:"Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
    source:"Muhammad Waseem",
  },
  {
    quote:"Perl – The only language that looks the same before and after RSA encryption.",
    source:"Keith Bostic",
  },
  {
    quote:"Happiness should be a function without any parameters.",
    source:"Pranshu Midha",
  },
  {
    quote:"Everyday life is like programming, I guess. If you love something you can put beauty into it.",
    source:"Donald Knuth",
  },
  {
    quote:"The big optimizations come from refining the high-level design, not the individual routines.",
    source:"Steve McConnell",
    citation:"Code Complete",
  },
  {
    quote:"Also, don't forget that some of the most successful people in the world are self-taught programmers. Steve Wozniak, the founder of Apple, is a self-taught programmer. So is Margaret Hamilton, who received the Presidential Medal of Freedom for her work on NASA's Apollo Moon missions; David Karp, founder of Tumblr; Jack Dorsey, founder of Twitter; and Kevin Systrom, founder of Instagram.",
    source:"Cory Althoff",
    citation:"The Self-Taught Programmer: The Definitive Guide to Programming Professionally",
    year:"2017",
  },
  {
    quote:"Programming isn't about what you know; it's about what you can figure out",
    source:"Chris Pine",
    citation:"Learn to Program",
    year:"2006",
  },
  {
    quote:"So if you want to go fast, if you want to get done quickly, if you want your code to be easy to write, make it easy to read.",
    source:"Robert C. Martin",
    citation:"Clean Code: A Handbook of Agile Software Craftsmanship",
    year:"2007",
  },
]

const objValidator = (quoteObj) => {
  return quoteObj.hasOwnProperty('quote')
}

const arrValidator = quotes.every(objValidator)
// console.log(arrValidator)







const getRandomQuoteBasic = (quotes) => {
  const randomIndex = Math.floor(Math.random() * Math.floor(quotes.length))
  return quotes[randomIndex]
}
// console.log(getRandomQuote(quotes))





const wrapper = () => {
  const rangeArrayGen = (n) => Array.from(Array(n).keys())
  let quotesIndexRange = rangeArrayGen(quotes.length)
  const randomIndex = (arrayLength) => Math.floor(Math.random() * Math.floor(arrayLength))
  const getRandomQuotePro = () => { 
    const popped = quotesIndexRange.splice(randomIndex(quotesIndexRange.length),1) 
    if (quotesIndexRange.length === 0) quotesIndexRange = rangeArrayGen(quotes.length) 
    console.log("popped", popped)
    return popped 
   }

return getRandomQuotePro

}

const getRandomQuotePro = wrapper()

getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()
getRandomQuotePro()

// Array.prototype.randomPop = function(){
// const randomIndex = (arrayLength) => Math.floor(Math.random() * Math.floor(arrayLength))
//   this.splice(randomIndex(this.length), 1)
//   return this
// }

// const quotesIndexRange = myArray.map((element, i) => i)







// const printQuote => () => {}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);