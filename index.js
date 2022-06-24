'use strict';

const quotes = require('./quotes.json');

module.exports = {

    getQuote: () => {
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        return `"${randomQuote.quote.trim()}" - ${randomQuote.author}`;
    },
    getArrayOfQuotes: () => {
        let arrayOfQuotes = quotes;
        return arrayOfQuotes;
    },
    getMultipleQuotes: (numberOfQuotes) => {
        let randomQuotes = []; 
        for (let i = 0; i < numberOfQuotes; i++) {
            let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            if (randomQuotes.includes(randomQuote)) {
                i--;
            } else {
                randomQuotes.push(`\"${randomQuote.quote.trim()}" - ${randomQuote.author}`);
            }
        } 
        return randomQuotes;
    }   
}
