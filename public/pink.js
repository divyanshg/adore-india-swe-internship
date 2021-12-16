
const pink_increment = document.getElementById('pink_increment');
const pink_decrement = document.getElementById('pink_decrement');


const pink_count_display = document.getElementById('pink_count_display');

var pink = localStorage.getItem('pink') | 0   ;

pink_count_display.textContent = pink ? pink : '0';

function increment_pink() {
  pink = pink + 1;
  localStorage.setItem("pink", pink);
  pink_count_display.textContent = pink? pink: "0";
}

function decrement_pink() {
    pink = Math.max(0, pink - 1);
    localStorage.setItem("pink", pink);
    pink_count_display.textContent = pink? pink: "0";
  }



pink_increment.addEventListener('click', increment_pink);

pink_decrement.addEventListener('click', decrement_pink);

