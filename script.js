const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.dir(loginInput.value); //input창의 value 값을 확인 (입력된 값)
    console.log("click");
}

loginButton.addEventListener("click", onLoginBtnClick);