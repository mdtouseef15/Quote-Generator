// Collection Of Quote
const quotes = [{
    quote: 'I Am Not Goku Nor Vegeta. I Am The Instrument Of Your Defeat!',
    author: `- Gogeta`
}, {
    quote: `Come On, Who Do You Think Taught Him?`,
    author: `- Chi-Chi`
}, {
    quote: `I’m Sure He’d Be Glad To See You Writhing In Agony Like The Worm You Are.`,
    author: `- Piccolo`
}, {
    quote: `You Can Destroy Whole Planets, But It Seems You Can’t Even Destroy A Single Man, Huh?`,
    author: `- Goku`
}, {
    quote: `You can take control of my mind and my body,but there is one thing a Saiyan always keeps...his PRIDE!`,
    author: `- Vegeta`
}, {
    quote: `Imagine: This And Every Other World Would Be But The Merest Of Baubles In Your Collection.`,
    author: `- King Cold`
}, {
    quote: `It Is No Sin To Fight For What Is Right.`,
    author: `- Android 16`
}, {
    quote: `All Hail Vegeta, Prince Of No One!`,
    author: `- Frieza`
}, {
    quote: `It’s Not An Overseer That The Earth Needs Right Now. It Needs A Warrior.`,
    author: `- Kami`
}, {
    quote: `I’m Going To Crush You… And Throw You Into The Wind!`,
    author: `- Majin Vegeta`
} ]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})