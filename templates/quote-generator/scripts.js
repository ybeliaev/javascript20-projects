const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
// Get Quote From API
async function getQuote() {
    // We need to use a Proxy URL to make our API call in order to avoid a CORS error
    const proxyUrl = 'https://jacinto-cors-proxy.herokuapp.com/';
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        console.dir(data)
        // Check if Author field is blank and replace it with 'Unknown'
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Гвидон Вишневский';
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        // Dynamically reduce font size for long quotes
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText;
    } catch (error) {
        getQuote();
        console.log("Упс..нет цитаты!", error)
    }
}

// On Load
getQuote();