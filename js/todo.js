const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
    // JSON.stringify : string으로 변환
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    // console.log(event.target.parentElement.innerText); // 같은 하위 li 중 어떤 것이 선택되었는지 구분함
}

function paintToDo(newTodo) {
    // console.log("I will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span); // li안에 span을 생성할 수 있도록함
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); // 제출하면 새로고침 제어
    const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
    // console.log(toDoInput.value);
    toDoInput.value = ""; // 엔터를 치면 입력값이 사라진다.
    // console.log(newTodo, toDoInput.value);
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);