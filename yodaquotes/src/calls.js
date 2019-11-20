import queryString from "query-string";
import quotes from "./data/quotes.json";

const key = "95479cdd10msh19a9768602e6420p1eb996jsn9af2770b3ba4";

const headers = {
  "x-rapidapi-host": "yodish.p.rapidapi.com",
  "x-rapidapi-key": key,
  "content-type": "application/x-www-form-urlencoded"
};

const address = "https://yodish.p.rapidapi.com/yoda.json";

export async function yodaTranslate(string) {
  let response;
  const query = queryString.stringify({
    text: string
  });
  try {
    const settings = {
      method: "POST",
      headers: headers
    };
    response = await fetch(address + "?" + query, settings);
    const res = await response.json();
    return res.contents.translated;
  } catch (e) {
    console.log(e);
  }
}

export async function getQuiz() {
  const correctIndex = Math.floor(Math.random() * quotes.length);
  const otherAuthor1 = Math.floor(Math.random() * quotes.length);
  const otherAuthor2 = Math.floor(Math.random() * quotes.length);

  const correctQuote = quotes[correctIndex].quote;
  const resultAuthor = quotes[correctIndex].author;
  const resultQuote = await yodaTranslate(correctQuote);
  console.log(resultQuote);
  const choices = [correctIndex, otherAuthor1, otherAuthor2].sort().map(index => quotes[index].author);

  return {
    quote: resultQuote,
    correct: resultAuthor,
    choices: choices
  };
}
