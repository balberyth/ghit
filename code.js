const colorButton = document.getElementById('colorButton');
const box = document.querySelector('.box');

colorButton.addEventListener('click', function() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  box.style.backgroundColor = "#" + randomColor;
});
