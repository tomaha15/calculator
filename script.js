let screen = document.querySelector(".screen");
const btns = document.querySelectorAll('button');
const buttons = Array.from(btns);
console.log(buttons);



//number buttons

buttons[2].addEventListener('click', function(){current += this.textContent;screen.textContent = `${stored}${operator}${current}`;});
buttons[3].addEventListener('click', function(){current += this.textContent;screen.textContent = `${stored}${operator}${current}`;});
buttons[4].addEventListener('click', function(){current += this.textContent;screen.textContent = `${stored}${operator}${current}`;});
buttons[6].addEventListener('click', function(){current += this.textContent;screen.textContent = `${stored}${operator}${current}`;});
buttons[7].addEventListener('click', function(){current += this.textContent;screen.textContent = `${stored}${operator}${current}`;});
buttons[8].addEventListener('click', function(){current += this.textContent;screen.textContent = `${stored}${operator}${current}`;});
buttons[10].addEventListener('click', function(){current += this.textContent;screen.textContent = `${stored}${operator}${current}`;});
buttons[11].addEventListener('click', function(){current += this.textContent;screen.textContent = `${stored}${operator}${current}`;});
buttons[12].addEventListener('click', function(){current += this.textContent;screen.textContent = `${stored}${operator}${current}`;});
buttons[15].addEventListener('click', function(){current += this.textContent;screen.textContent = `${stored}${operator}${current}`;});

//operations

buttons[0].addEventListener('click', function(){screen.textContent = '';});
buttons[1].addEventListener('click', function(){});
buttons[5].addEventListener('click', function(){});
buttons[9].addEventListener('click', function(){});


buttons[13].addEventListener('click', function(){
    stored = current;
    current = '';
    operator = this.textContent;
    screen.textContent = `${stored}${operator}${current}`;
});



buttons[16].addEventListener('click', function(){

    stored = calcScreen(stored, current);
    current = '';
    operator = '';
    screen.textContent = `${stored}${operator}${current}`;


});
buttons[17].addEventListener('click', function(){});

//supporting functions

//ako je screen.textContent = "" - nista. return
// - call func() { - last char numb ? ako jeste calculate i dodaj operator to string
// ako nije- zamijeni last char sa !!operator}
// 
// 
// 
// 
// 

//store current text cont into number var

let a = 0;
let current = '';
let stored = '';
let operator = '';



function calcScreen (a, b) {
    a = Number(a);
    b = Number(b);
    if (operator === '+') {return a + b }
}
