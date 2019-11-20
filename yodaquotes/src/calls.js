import queryString from "query-string";

const key = "3ed0227abdmsh80a46d8a4a799cdp1ea67djsn0c23bd3c37fd";

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
