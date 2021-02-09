'use strict';

const quotes = require('./quotes.json');

module.exports = {

    getQuote: () => {
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        return `"${randomQuote.quote.trim()}" - ${randomQuote.author}`;
    }
}
