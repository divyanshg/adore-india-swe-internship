
const blue_increment = document.getElementById('blue_increment');
const blue_decrement = document.getElementById('blue_decrement');


const blue_count_display = document.getElementById('blue_count_display');

var blue = localStorage.getItem('blue') | 0   ;

blue_count_display.textContent = blue ? blue : '0';

function increment_blue() {
  blue = blue + 1;
  localStorage.setItem("blue", blue);
  blue_count_display.textContent = blue? blue: "0";
}

function decrement_blue() {
    blue = Math.max(0, blue - 1);
    localStorage.setItem("blue", blue);
    blue_count_display.textContent = blue? blue: "0";
  }



blue_increment.addEventListener('click', increment_blue);

blue_decrement.addEventListener('click', decrement_blue);

