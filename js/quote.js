const quotes = [
    {
    quote: "ddd",
    author: "ddd",
},
{
    quote: "ddd",
    author: "ddd",
},
{
    quote: "ddd",
    author: "ddd",
},
{
    quote: "ddd",
    author: "ddd",
},
{
    quote: "ddd",
    author: "ddd",
},
{
    quote: "ddd",
    author: "ddd",
},
{
    quote: "ddd",
    author: "ddd",
},
{
    quote: "ddd",
    author: "ddd",
},
{
    quote: "ddd",
    author: "ddd",
},
{
    quote: "ddd",
    author: "ddd",
},
{
    quote: "ddd",
    author: "ddd",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// 명언을 배열에 넣고 1부터 10 자리까지 랜덤 출력한다.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// Math.random() : 1이하의 숫자를 랜덤으로 출력
// Math.round() : 숫자를 반올림 함
// Math.ceil() : 소숫점의 숫자를 무조건 올림함
// Math.floor() : 소숫점의 숫자를 무조건 내림함
// array.length : 배열의 갯수를 반환해줌