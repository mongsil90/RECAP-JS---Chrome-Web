const quotes = [
    {
        quote: "A person can change nothing but their own actions — here and now.",
        author: "Me.",
    },
    {
        quote: "Even a 1% shift can transform everything.",
        author: "Me.",
    },
    {
        quote: "Those who define the world for themselves aren't shaken by bullshit.",
        author: "Me.",
    },
    {
        quote: "Those who act from their own convictions have no reason to envy others.",
        author: "Me.",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;