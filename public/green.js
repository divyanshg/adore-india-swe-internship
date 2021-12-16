
const green_increment = document.getElementById('green_increment');
const green_decrement = document.getElementById('green_decrement');


const green_count_display = document.getElementById('green_count_display');

var green = localStorage.getItem('green') | 0   ;

green_count_display.textContent = green ? green : '0';

function increment_green() {
  green = green + 1;
  localStorage.setItem("green", green);
  green_count_display.textContent = green? green: "0";
}

function decrement_green() {
    green = Math.max(0, green - 1);
    localStorage.setItem("green", green);
    green_count_display.textContent = green? green: "0";
  }



green_increment.addEventListener('click', increment_green);

green_decrement.addEventListener('click', decrement_green);

