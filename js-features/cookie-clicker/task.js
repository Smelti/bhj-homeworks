const image = document.getElementById('cookie');
const clickCount = document.getElementById('clicker__counter');
let count = 0;
let cookieClick = false;
image.addEventListener('click', () => {
  count++;
  clickCount.textContent = count;
  
  if (cookieClick) {
   image.style.width = '210px'
   image.style.height = '140px'
  }
  else {
    image.style.width = '200px'
    image.style.height = '130px'
  };
  cookieClick = !cookieClick
});
