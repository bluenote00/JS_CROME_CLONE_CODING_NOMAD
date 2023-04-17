/*
// 1. const, let, var의 차이점

let a = 5;
let b = 2;
const veryLong = "anne";

console.log(a + 2);
console.log(a * 2);
console.log(a / 2);
console.log("hello " + veryLong);

// veryLong = "ara";

console.log("hello " + veryLong);

// const : 상수, 값이 바뀔 수 없다
// let : 값이 바뀔 수 있다. (업데이트 가능성이 있는 변수에 사용)
// var : 어떤 규칙도 없음 -> 어떻게 사용할 것인지 예측하기 힘들다. (왠만하면 사용하지 않는게 좋음)

const amIFat = null;
let something;
console.log(something, amIFat);

// 여기서 something은 정의되지 않았기에 undefined로 뜨며,amIFat은 null값이 뜬다.

// null : 값이 아무것도 없다 (false와 다르다. false에는 아니라는 값이 있음), null은 자연적으로 생겨나지 않는다. 값이 없음을 표현할떄 사용 '비어있다'



// 2. array

const mon = "mon";
const tue = "tue";
const wed = "wed";

//const daysOfWeek = mon + tue + wed;

const daysOfWeek = [mon, tue, wed];


// 0번째 element 받아오기
console.log(daysOfWeek);

//array에 추가하기 - 가장 마지막 배열에 추가 된다.
daysOfWeek.push("sun");


const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");

console.log(toBuy);


// 3. Objects 
const playerName = "ara";
const playerPoints = 12121212;
const playerHandsome = false;
const playerFat = "litte";


// Objects 안에서는 = 를 사용하지 않는다. - 내부 요소들을 property라고 한다.
const player = {
    name: "ara",
    points: 10,
    fat: true,
};

// object에 접근하는 방법
console.log(player);
console.log(player.name);
console.log(player.points);
console.log(player["name"]);

player.fat = false;
console.log(player);

// const는 상수인데 어떻게 fat:true를 false로 바꾸었는가? 
// -> object를 수정한것이 아니라 object의 boolean을 수정했기때문에 가능한것!



// Object에 추가하기
player.lastName = "potato";
console.log(player);
// 플레이어에 lastName이 추가된 것을 볼 수 있다.

console.log(player);
player.points = player.points + 15;
console.log(player); // 원본의 player.points(10)에서 15가 더해진 것을 볼 수 있다.

// 설명이 필요 없는 것들 -> array로!
// 설명이 필요한 것들 -> Object로!



// 4. Functions-1
// Function : 코드의 조각으로서 계속해서 반복으로 사용할 수 있는것 (코드를 효율적으로 사용하기 위해)

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
};

sayHello("nico", 10);
sayHello("dal", 23);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function divide(a, b) {
    console.log(a / b);
}

plus(8, 60);
divide(2, 4);

// NaN = Not a Number


/*

const player = {
    sayHello: function (otherPersonsName){
        console.log("Hello! " + otherPersonsName + " nice to meet you");
    }
};

player.sayHello("lynn");



const calculator = {
    plus: function (a, b) {
        console.log(a+b);
    },
    
    minus: function (a, b) {
        console.log(a-b);
    },

    multiple: function (a, b) {
        console.log(a*b);
    },

    divide: function (a, b) {
        console.log(a/b);
    }
};

calculator.plus(1,2);
calculator.minus(1,2);
calculator.multiple(1,2);
calculator.divide(1,2);


// Return
const age = 96;

function calculatorKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(age);

console.log(krAge);


const calculator = {
    plus: function (a, b) {
        return a+b;
    },
    
    minus: function (a, b) {
        return a-b;
    },

    multiple: function (a, b) {
        return a*b;
    },

    divide: function (a, b) {
        return a/b;
    }
};

const plusResult = calculator.plus(2, 3);

function안에서 return과 추가작업을 입력하면
return만 작업하고 추가 수행은 이뤄지지 않는다.
만약 return 앞에 기타작업이 있다면 이 작업은 수행된다.
즉, return"까지만" 수행된다!


// Conditional (조건문)
const age = parseInt(prompt("How old are you?"));

// parseInt로 age를 number로 형변환을 시켜주며, 문자를 입력할 경우 NaN를 띄운다.

if (isNaN(age) || age < 0) {
    //condition === true (숫자가 아닐 경우)
    console.log("Please write A number.");
} else if (age < 18) {
    // condition === false (숫자일 경우)
    console.log("you are too young");
} else if (age >= 18 && age <= 50) {
    console.log("you can drink");
} else if (age > 50 && age <= 80) {
    console.log("you should exercise");
} else if (age === 100) { // 조건문의 순서도 중요! 아래 80세 이상이 먼저 나오면 age === 100 조건과 겹쳐 실행되지 않는다.
    console.log("you are wise");
} else if (age > 80) {
    console.log("you can do whatever you want");
} else {
    console.log("you can drink");
}

// else는 위에 모든 조건이 전부 false여야 작동한다. 하나라도 true일 경우 작동하지 않는다.

true || true === true
false || true === true
true || false === true
false || false === false

true && true === true
false && true === false
true && false === false
false && false === false

=는 한개의 value를 할당하며,
==는 값만을 비교, 
===는 값과 유형을 비교한다.
!== 아닌 경우





// The Document Object 

const title = document.getElementById("title");
console.dir(title);

// JS는 HTMLE element를 가지고 오지만, HTML 자체를 보여주진 않는다.

title.innerText = "Got you";

//HTML의 ID="title" 텍스트를 바꾼다

console.log(title.id); //HTML의 ID="title" 확인
console.log(title.className); //HTML의 class의 이름 확인


// 1. getElementsByClassName : HTML에서 CLASS명으로 검색
const hellos = document.getElementsByClassName("hello");
console.log(hellos);


// 2. getElementsByTagName : HTML에서 TAG명으로 검색
const title = document.getElementsByTagName("h1");
console.log(title);


// 3. querySelector : HTML에서 element를 CSS 방식으로 검색
// 이 경우에는 첫번째것 하나만 나온다. (전부 다 갖고오고싶다면 querySelectorAll 사용)
const title2 = document.querySelector(".hello h1");
console.log(title2);

const title3 = document.querySelectorAll(".hello h1");
console.log(title3);

const title4 = document.querySelector("div.hello h1:first-child");
console.log(title4);

// getElementById 와 querySelector의 차이점 :
// getElementById는 class나 id명을 가져올 순 있지만 하위 form을 세부적으로 선택할순 없다 (ex) div, h1...


*/


// Evnets

const h1 = document.querySelector("div.hello h1:first-child");
//console.dir(h1);

//h1.style.color = "blue"; // 선택한 태그가 파란색으로 바뀐다

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
// document의 body나 title은 고유하기 때문에, div같은 하위 요소들은 호출이 되지 않는다.
// 나머지 element는 querySelector나, getElementById로 불러와야 한다.

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS NO WIFI");
}

function handleWindowOnline() {
    alert("Good");
}


h1.addEventListener("click", handleTitleClick);
//h1.onclick = handleTitleClick;

// 위에 두 코드는 동일하나 addEventListener를 선호하는 이유는
// removeEventListener을 통해서 event listener을 제거할수있기 때문이다.

h1.addEventListener("mouseenter", handleMouseEnter);
//h1.onmouseenter = handleMouseEnter;

h1.addEventListener("mouseleave", handleMouseLeave);
//h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
// resize : 콘솔창을 키거나, 창에 변화가 생기면 이벤트가 발생한다.

window.addEventListener("copy", handleWindowCopy);
// copy하면 알림창이 뜨는 이벤트 

window.addEventListener("offline", handleWindowOffline);

window.addEventListener("online", handleWindowOnline);