//1. const, let, var의 차이점

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


const player = {
    name: "nico",
    sayHello: function (otherPersonsName){
        console.log("Hello! " + otherPersonsName + "nice to meet you");
    }
};

player.sayHello("lynn");
