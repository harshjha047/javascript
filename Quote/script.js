const Api_url = "https://dummyjson.com/quotes/random";
const quoteElement = document.querySelector(".quote");
const authorElement = document.querySelector(".author");

// Fetch quote from API

async function getQuote(url) {
  try {
    const response = await fetch(url);
    var data = await response.json();

    // return data.quote;
    console.log(data);
    quoteElement.textContent = data.quote;
    authorElement.innerHTML = `<span></span> ${data.author}`;
  } catch (error) {
    console.error("Error fetching quote:", error);
    return "An error occurred while fetching a quote.";
  }
}
getQuote(Api_url)

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quoteElement.textContent,"Tweet Window", 'width=600, height=500')
}

document.querySelector(".btn1").addEventListener("click", () => getQuote(Api_url));

// Display quote in webpage

// Call getQuote function

