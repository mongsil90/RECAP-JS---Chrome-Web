const quotes = [
    {
        quote: "Learning without will leaves no room for the self.",
        author: "Arthur Schopenhauer",
    },
    {
        quote: "Without suffering, we cannot fully become who we are.",
        author: "Arthur Schopenhauer",
    },
    {
        quote: "All I truly have the power to change is what I do, here and now.",
        author: "Me",
    },
    {
        quote: "Easy come, easy go.",
        author: "Unkown",
    },
    {
        quote: "Just Do it",
        author: "Nike",
    },
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
