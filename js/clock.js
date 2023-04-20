const clock = document.querySelector("h2#clock");

// interval : 매 분기마다 특정 이벤트가 발생하게 하는것

function sayHello() {
    console.log("hello");
}

setInterval(sayHello, 5000)