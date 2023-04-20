const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// value값 submit 이벤트
function onLoginSubmit(event) {
    event.preventDefault(); 
    // form을 submit하면 브라우저는 기본적으로 페이지를 새로고침한다.
    // preventDefault는 사전에 이벤트가 발생하지 않도록 막는다. 
    // preventDefault 함수를 추가해 브라우저가 기본 동작을 실행하지 못하게 막는다.

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // 브라우저 상의 API, LocalStorage에 데이터를 저장한다!
    // application - localStorage에서 확인 가능, 그러나 새로고침을 하면 사라진다.

    paintGreetings(username);
}


loginForm.addEventListener("submit", onLoginSubmit);

/*
addEventListener 안에 있는 함수는 직접 실행하지 않는다
브라우저가 실행시켜주고 브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다.
addEventListener의 함수에서 object에 대한 자리만 할당해주면
해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다!
이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 preventDefault를 이용하여 막을 수 있다!
*/

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}
