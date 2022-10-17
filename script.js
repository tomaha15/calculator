let screen = document.querySelector(".screen");

const btns = document.querySelectorAll('button');
const buttons = Array.from(btns);
console.log(buttons);

//number buttons

buttons[2].addEventListener('click', function(){screen.textContent += '7'});
buttons[3].addEventListener('click', function(){screen.textContent += '8'});
buttons[4].addEventListener('click', function(){screen.textContent += '9'});
buttons[6].addEventListener('click', function(){screen.textContent += '4'});
buttons[7].addEventListener('click', function(){screen.textContent += '5'});
buttons[8].addEventListener('click', function(){screen.textContent += '6'});
buttons[10].addEventListener('click', function(){screen.textContent += '1'});
buttons[11].addEventListener('click', function(){screen.textContent += '2'});
buttons[12].addEventListener('click', function(){screen.textContent += '3'});
buttons[15].addEventListener('click', function(){screen.textContent += '0'});

//operations

buttons[0].addEventListener('click', function(){});
buttons[1].addEventListener('click', function(){});
buttons[5].addEventListener('click', function(){});
buttons[9].addEventListener('click', function(){});
buttons[13].addEventListener('click', function(){});
buttons[16].addEventListener('click', function(){});
buttons[17].addEventListener('click', function(){});






