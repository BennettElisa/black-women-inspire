![npm](https://img.shields.io/npm/v/black-women-inspire?style=for-the-badge)
![image](portraits-of-women.jpeg)
Licensed Photo from [Adobe Stock](https://stock.adobe.com/)

# 70 Inspiring Quotes from Black Women

> A collection of 70 inspiring quotes from Black women. Quotes range from civil-rights icons to writers, singers, poets, politicians, lawyers and influencers. All of these quotes will inspire you and help you seize each day with confidence, courage and self-love.

# Install using npm

```
npm install black-women-inspire
```

# Usage

```js
const blackWomenInspire = require('black-women-inspire')

blackWomenInspire.getQuote();
// =>  "Success is liking yourself, liking what you do, and liking how you do it." -  Maya Angelou

blackWomenInspire.getQuote()
// => "Am I good enough? Yes I am." - Michelle Obama

blackWomenInspire.getArrayOfQuotes()
/* => [
        {
            quote: 'Success is liking yourself, liking what you do, and liking how you do it.',
            author: 'Maya Angelou'
        },
        {
            quote: 'You will be wounded many times in your life. You’ll make mistakes. Some people will call them failures but I have learned that failure is really God’s way of saying, “Excuse me, you’re moving in the wrong direction.” It’s just an experience, just an experience.',
            author: 'Oprah Winfrey'
        } .... ]
*/
blackWomenInspire.getMultipleQuotes(3)
/* => 
    [
        `"You cannot live to please everyone else. You have to edify, educate and fulfill your own dreams and destiny, and hope that whatever your art is that you're putting out there, if it's received, great, I respect you got receiving it. If it's not received, great, I respect you for not." - Octavia Spencer`,
        '"Never work just for money or for power. They won’t save your soul or help you sleep at night." - Marian Wright Edelman',
        `"I'd rather regret the risks that didn't work out than the chances I didn't take at all." - Simone Biles`
    ]
*/
```

# API

- ```.getQuote()```

    Type: `Function`

    Random quote with author name.

- ```.getArrayOfQuotes()```

    Type: `Function`

    Returns an array with all the quotes. Each quote is an object with two properties - quote and author.
- ```.getMultipleQuotes(numberOfQuotes)```

    Type: `Function`
    arguments : `numberOfQuotes` - number of quotes to return.

    Returns an array with multiple quotes. Each quote is an object with two properties - quote and author.

# License

MIT © Elisa Bennett
