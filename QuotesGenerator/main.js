var quotes=["Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.― Virginia Woolf, A Room of One’s Own",
"“When you have a dream, you’ve got to grab it and never let go.” —Carol Burnett",
"“The biggest adventure you can take is to live the life of your dreams.” —Oprah Winfrey",
"“Confident people have a way of carrying themselves that makes others attracted to them.” —Sofia Vergara",
"“It is never too late to be what you might have been.” —George Elliot",
"“Promise me you’ll always remember: You’re braver than you believe, and stronger than you seem, and smarter than you think.” —A. A. Milne",
"“Don’t let yesterday take up too much of today.”—Will Rogers",
"“You don’t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.” —Mandy Hale",
"“I’m not going to continue knocking that old door that doesn’t open for me. I’m going to create my own door and walk through that.” —Ava DuVernay",
"“Dreams do not come true just because you dream them. It’s hard work that makes things happen. It’s hard work that creates change.” —Shonda Rhimes",
"“You miss 100% of the shots you don’t take.” —Wayne Gretzky",
"“In the end, it’s not the years in your life that count. It’s life in your years.” —Abraham Lincoln",
"“My interest is in the future because I am going to spend the rest of my life there.” —Charles Kettering"
];

var quoteDisplay=document.getElementById('quotes');
var generateBtn=document.getElementById('generateQuote');

function generateQuotes(){
    var randomQuote=Math.floor(Math.random()*quotes.length);
    var selectQuote=quotes[randomQuote];
    quoteDisplay.textContent=selectQuote;
}
generateBtn.addEventListener('click', generateQuotes);

function shareWhatsApp() {
  const selectQuote = quoteDisplay.textContent;
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(selectQuote)}`;
  window.open(url, '_blank');
}

function shareTwitter() {
  const selectQuote = quoteDisplay.textContent;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(selectQuote)}`;
  window.open(url, '_blank');
}

window.onload = generateQuotes;