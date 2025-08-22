<<<<<<< HEAD
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpeg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"];

const chooseImg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");
bgImg.src = `pictures/${chooseImg}`;
=======
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

const choosenImg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");
bgImg.src = `pictures/${choosenImg}`;
>>>>>>> f9e70787eb252b963c89ac7ea788e3456e0ff6d7
document.body.appendChild(bgImg);