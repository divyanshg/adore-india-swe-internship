
const orange_increment = document.getElementById('orange_increment');
const orange_decrement = document.getElementById('orange_decrement');


const orange_count_display = document.getElementById('orange_count_display');

var orange = localStorage.getItem('orange') | 0   ;

orange_count_display.textContent = orange ? orange : '0';

function increment_orange() {
  orange = orange + 1;
  localStorage.setItem("orange", orange);
  orange_count_display.textContent = orange? orange: "0";
}

function decrement_orange() {
    orange = Math.max(0, orange - 1);
    localStorage.setItem("orange", orange);
    orange_count_display.textContent = orange? orange: "0";
  }



orange_increment.addEventListener('click', increment_orange);

orange_decrement.addEventListener('click', decrement_orange);

