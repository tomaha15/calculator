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

buttons[0].addEventListener('click', function(){clearAll()}); //AC

buttons[1].addEventListener('click', function(){    // podijeljeno
    if(Number(current) == 0) { clearAll(); console.log('ass');};
    stored = calcScreen(stored, current);
    operator = this.textContent;
    current = '';
    screen.textContent = `${stored}${operator}${current}`;});

buttons[5].addEventListener('click', function(){    //puta
    stored = calcScreen(stored, current);
    operator = this.textContent;
    current = '';
    screen.textContent = `${stored}${operator}${current}`;});

buttons[9].addEventListener('click', function(){ //minus
    stored = calcScreen(stored, current);
    operator = this.textContent;
    current = '';
    screen.textContent = `${stored}${operator}${current}`;});


buttons[13].addEventListener('click', function(){ //plus
    stored = calcScreen(stored, current);
    operator = this.textContent;
    current = '';
    screen.textContent = `${stored}${operator}${current}`;
});



buttons[16].addEventListener('click', function(){

    current = calcScreen(stored, current);
    stored = '';
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

let current = '';
let stored = '';
let operator = '';



function calcScreen (a, b) {
    a = Number(a);
    b = Number(b);
    if (a === '') return b
    else if (operator === '+') {return a + b}
    else if(operator === '-') {return a - b}
    else if(operator === 'x') {return a * b}
    else if(operator === '÷') {return a / b}
    else return b;
}

function clearAll (){
    screen.textContent = '';stored ='';current = ''; operator = '';
}