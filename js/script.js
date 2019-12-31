/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



const quoteBoxElement = document.querySelector('#quote-box');
const bodyElement = document.getElementsByTagName('body');

//helping function that returns a random integer between 0 and the parameter max
const randomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const quotes = [
  {
    quote: "Talk is cheap. Show me the code.",
    source: "Linus Torvalds",
  },
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    source: "Harold Abelson",
    citation: "Structure and Interpretation of Computer Programs",
    year: "1984",
  },
  {
    quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    source: "John Woods",
  },
  {
    quote: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    source: "Rick Cook",
    citation: "The Wizardry Compiled",
    year: "1990",
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source: "Martin Fowler",
  },
  {
    quote: "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
    source: "Muhammad Waseem",
  },
  {
    quote: "Perl – The only language that looks the same before and after RSA encryption.",
    source: "Keith Bostic",
  },
  {
    quote: "Happiness should be a function without any parameters.",
    source: "Pranshu Midha",
  },
  {
    quote: "Everyday life is like programming, I guess. If you love something you can put beauty into it.",
    source: "Donald Knuth",
  },
  {
    quote: "The big optimizations come from refining the high-level design, not the individual routines.",
    source: "Steve McConnell",
    citation: "Code Complete",
  },
  {
    quote: "Also, don't forget that some of the most successful people in the world are self-taught programmers. Steve Wozniak, the founder of Apple, is a self-taught programmer. So is Margaret Hamilton, who received the Presidential Medal of Freedom for her work on NASA's Apollo Moon missions; David Karp, founder of Tumblr; Jack Dorsey, founder of Twitter; and Kevin Systrom, founder of Instagram.",
    source: "Cory Althoff",
    citation: "The Self-Taught Programmer: The Definitive Guide to Programming Professionally",
    year: "2017",
  },
  {
    quote: "Programming isn't about what you know; it's about what you can figure out",
    source: "Chris Pine",
    citation: "Learn to Program",
    year: "2006",
  },
  {
    quote: "So if you want to go fast, if you want to get done quickly, if you want your code to be easy to write, make it easy to read.",
    source: "Robert C. Martin",
    citation: "Clean Code: A Handbook of Agile Software Craftsmanship",
    year: "2007",
  },
]

const wrapper = () => {

  //indexArrayGen generates an array of indexes based on the array given as parameter
  //the array of indexes will be used to keep track of indexes unused yet
  const indexArrayGen = (arr) => arr.map((el, i) => i);
  let quotesIndexes = indexArrayGen(oquotes);

  //getRandomQuotePro returns a random quote out of the non returned yet,
  //if the array is empty it will repopulate it
  const getRandomQuotePro = () => {

    //randomPop splices an element at a random position in the array
    const randomPop = (arr) => arr.splice(randomNumber(arr.length), 1);
    const poppedIndex = randomPop(quotesIndexes);
    if (quotesIndexes.length === 0) quotesIndexes = indexArrayGen(quotes);
    return quotes[poppedIndex]
  }
  return getRandomQuotePro
}

const getRandomQuote = wrapper();

const printQuote = () => {
  changeBodyBGColor();
  const currentQuote = getRandomQuote();
  let htmlString = `<p class="quote"> ${currentQuote.quote}</p>
  <p class="source"> ${currentQuote.source}`;
  if (currentQuote.citation) {
    htmlString += `<span class="citation"> ${currentQuote.citation} </span>`;
  }
  if (currentQuote.year) {
    htmlString += `<span class="year"> ${currentQuote.year} </span>`;
  }
  htmlString += "</p>";

  quoteBoxElement.innerHTML = htmlString;
}


//dynamically changes hue of background to a random factor
//using hsl we can fix the luminance so the white font will always be clear to read
const changeBodyBGColor = () => {
  bodyElement[0].style.backgroundColor = `hsl(${randomNumber(360)}, 100%, 25%)`;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);