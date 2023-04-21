const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    // console.log("I will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span); // li안에 span을 생성할 수 있도록함
    span.innerText = newTodo;
    console.log(li);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); // 제출하면 새로고침 제어
    const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
    // console.log(toDoInput.value);
    toDoInput.value = ""; // 엔터를 치면 입력값이 사라진다.
    // console.log(newTodo, toDoInput.value);
    paintToDo(newTodo);
}


toDoForm.addEventListener("submit", handleToDoSubmit);