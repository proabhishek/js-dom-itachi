let input = document.querySelector('input');
         
let btn = document.querySelector('button');
  let output = document.querySelector('.output');

// addEventListener

btn.addEventListener("click", calculateTip)

function calculateTip() {
let amount = input.value;
let tip = amount*2/100;
output.innerHTML = ` Tip amount for the waiter is <span>  ${tip} </span>`;
}