/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



const quoteBoxElement = document.querySelector('#quote-box');
const quoteElement = document.querySelector('.quote');
const bodyElement = document.getElementsByTagName('body');

const ramdomNumber = (max) => Math.floor(Math.random() * Math.floor(max))
const rangeArrayGen = (n) => Array.from(Array(n).keys())
const randomPoP = (arr) => arr.splice(ramdomNumber(arr.length),1)



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

// const arrValidator = quotes.every(objValidator)
// console.log(arrValidator)



const getRandomQuoteBasic = (quotes) => {
  const randomIndex = Math.floor(Math.random() * Math.floor(quotes.length))
  return quotes[randomIndex]
}



const wrapper = () => {
  let quotesIndexRange = rangeArrayGen(quotes.length)
  const getRandomQuotePro = () => { 
    const popped2 = randomPoP(quotesIndexRange);
    if (quotesIndexRange.length === 0) quotesIndexRange = rangeArrayGen(quotes.length) 
    return quotes[popped2]; 
   }
return getRandomQuotePro
}

const getRandomQuotePro = wrapper()



const printQuote = () => {
  changeBodyBGColor();
  const currentQuote = getRandomQuotePro();
  const htmlString = `
  <p class="quote"> ${currentQuote.quote}</p>
  <p class="source">
  ${currentQuote.source}
  ${currentQuote.citation ? `<span class="citation"> ${currentQuote.citation} </span>` : ''}
  ${currentQuote.year ? `<span class="year"> ${currentQuote.year} </span>` : ''}
  </p>
  `
  quoteBoxElement.innerHTML = htmlString;
}


const changeBodyBGColor = () => {

  bodyElement[0].style.backgroundColor = `hsl(${ramdomNumber(360)}, 100%, 25%)`;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);