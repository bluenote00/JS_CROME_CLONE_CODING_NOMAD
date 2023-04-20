const clock = document.querySelector("h2#clock");

// interval : 매 분기마다 특정 이벤트가 발생하게 하는것
// timeout : 특정 시간이 종료되면 이벤트가 발생

/*
function sayHello() {
    console.log("hello");
}
*/ 

// setInterval(sayHello, 5000); // 5000ms마다 hello가 입력된다
// setTimeout(sayHello, 5000); // 5000ms 후 hello가 입력된다


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// padStart : 문자열의 앞에 원하는 자리만큼 특정 글자를 추가할 수 있다.
// hours와 minutes 앞에 0이 추가되지 않은 이유는 자릿수를 2로 설정했기 때문!

getClock();
setInterval(getClock, 1000); // 1초 시계
