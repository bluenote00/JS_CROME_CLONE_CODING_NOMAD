const images = [
    "0.jpg",
    "0.jpg",
    "0.jpg",
    "0.jpg",
    "0.jpg",
    "0.jpg",
    "0.jpg",
    "0.jpg",
]

const chosenImage = images[Math.floor(Math.random() * quotes.length)];

const bgImage = document.createElement("img");
// 이미지를 생성

bgImage.src = `/img/${chosenImage}`;
// 위에 생성한 이미지 태그에 넣을 소스를 가져옴

document.body.appendChild(bgImage);
//appendChild : html에 추가함