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