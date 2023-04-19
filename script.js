const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


// value값 submit 이벤트
function onLoginSubmit(event) {
    event.preventDefault(); 
    // form을 submit하면 브라우저는 기본적으로 페이지를 새로고침한다.
    // preventDefault는 사전에 이벤트가 발생하지 않도록 막는다. (브라우저가 기본 동작을 실행하지 못하게 막는다.)
    console.log(loginInput.value);
}



loginForm.addEventListener("submit", onLoginSubmit);
