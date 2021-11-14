// 테스트
// alert('테스트');
// img태그 선택,  태그안의 속성 src를 수정한다.
// 이미지 경로 'images/dice6.png'
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var h1 = document.querySelector('h1');

// 랜덤 숫자 1~6사이 값을 만든다.
var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;
console.log(random1)
console.log(random2)

img1.setAttribute('src', 'images/dice' + random1 + '.png');
img2.setAttribute('src', 'images/dice' + random2 + '.png');

if (random1 > random2) {
    h1.textContent = "Player1 Wins!";
} else if (random2 > random1) {
    h1.textContent = "Player2 Wins!";
} else {
    h1.textContent = "Draw!";
}