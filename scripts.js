let a;
let b;
let operator="";
let memory=[];
let result=0;
let display = "";
let clearDisplay = false;
let firstNumberChosen = false;

const operators = [{
    description: "plus",
    symbol: "+",
    css: ".btn-plus"
},{
    description: "minus",
    symbol: "-",
    css: ".btn-minus"
},{
    description: "times",
    symbol: "X",
    css: ".btn-times"
},{
    description: "divide",
    symbol: "÷",
    css: ".btn-divide"
}]

const highlightOperator = function(a){
    if(a==="none"){
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(btn => btn.classList.remove("highlight"));    }
    else {
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(btn => btn.classList.remove("highlight"));    const op = operators.find(obj => obj.description === a);
    if (op) {
    const targetButton = document.querySelector(op.css);
    targetButton.classList.add("highlight");
    }
    }
}

const setNumber = function(number){
    memory.push(number);
    if(operator === ""){
        result = 0;
        a = undefined;
        b = undefined;
        firstNumberChosen = false;
        console.log("working");
    }
    if(clearDisplay===true){
        display = "";
        clearDisplay = false;
        display += number.toString();
        document.getElementById("display").textContent = display;
    }
    else{
        display += number.toString();
        document.getElementById("display").textContent = display;
    }
}

//define the basic functions for operators
const setOperator = function(chosenOperator){
    if(firstNumberChosen===false && memory.length === 0){
        clearDisplay = true;
        return;
    }
    else if(firstNumberChosen===false){
        a = Number(memory.reduce((acc, current)=>acc+=current.toString(),""));
        firstNumberChosen = true
        operator = chosenOperator;
        highlightOperator(operator);
        clearDisplay = true;
        memory = [];
        // updateDisplay(chosenOperator);
        return;
    }
    else if (firstNumberChosen === true && memory.length === 0){
        operator = chosenOperator;
        highlightOperator(operator);
        return;
    }

    else if (firstNumberChosen===true){
        b = Number(memory.reduce((acc, current)=>acc+=current.toString(),""));
        operate(a,b,operator); 
        clearDisplay = true;
        display = result.toString();
        document.getElementById("display").textContent = display;
        a = result;
        operator = chosenOperator;
        highlightOperator(operator);
        firstNumberChosen = true;
        memory = [];
        // updateDisplay(chosenOperator);
        return;
    }
    else {
        return;
    }
}

//define the function for operate
const operate = function(a,b,operator){
    if (operator==="plus"){
        result = Number((a+b).toFixed(2));
        console.log(a);
        console.log(operator);
        console.log(b);
        console.log(result);
        highlightOperator("none");
        return result;
    }
    if(operator ==="minus"){
        result = Number((a-b).toFixed(2));
        console.log(a);
        console.log(operator);
        console.log(b);
        console.log(result);
        highlightOperator("none");
        return result;
    }
    if(operator === "divide"){
        result = Number((a / b).toFixed(2));
        console.log(a);
        console.log(operator);
        console.log(b);
        console.log(result);
        highlightOperator("none");
        return result;
    }
    if(operator ==="times"){
        result = Number((a*b).toFixed(2));
        console.log(a);
        console.log(operator);
        console.log(b);
        console.log(result);
        highlightOperator("none");
        return result;
    }
}

const equals = function(){
    b = Number(memory.reduce((acc, current)=>acc+=current.toString(),""));
    operate(a,b,operator);
    display = result;
    document.getElementById("display").textContent = display;
    a = result;
    firstNumberChosen = true;
    b = undefined;  
    memory = [];
    operator = "";
    clearDisplay = true;
}

const clear = function(){
    a=undefined;
    b=undefined;
    operator="";
    memory=[];
    result=0;
    display = ""
    firstNumberChosen = false;
    clearDisplay = false;
    document.getElementById("display").textContent = result;
    highlightOperator("none");

}

const one = document.querySelector(".btn-1");
one.addEventListener("click",() => setNumber(1));

const two = document.querySelector(".btn-2");
two.addEventListener("click",() => setNumber(2));

const three = document.querySelector(".btn-3");
three.addEventListener("click",() => setNumber(3));

const four = document.querySelector(".btn-4");
four.addEventListener("click",() => setNumber(4));

const five = document.querySelector(".btn-5");
five.addEventListener("click",() => setNumber(5));

const six = document.querySelector(".btn-6");
six.addEventListener("click",() => setNumber(6));

const seven = document.querySelector(".btn-7");
seven.addEventListener("click", () => setNumber(7));

const eight = document.querySelector(".btn-8");
eight.addEventListener("click", () => setNumber(8));

const nine = document.querySelector(".btn-9");
nine.addEventListener("click", () => setNumber(9));

const zero = document.querySelector(".btn-0");
zero.addEventListener("click", () => setNumber(0));

const plus = document.querySelector(".btn-plus");
plus.addEventListener("click", () => setOperator("plus"));

const minus = document.querySelector(".btn-minus");
minus.addEventListener("click", () => setOperator("minus"));

const times = document.querySelector(".btn-times");
times.addEventListener("click", () => setOperator("times"));

const divide = document.querySelector(".btn-divide");
divide.addEventListener("click", () => setOperator("divide"));

const clearButton = document.querySelector(".btn-clear");
clearButton.addEventListener("click", () => clear());

const equalsButton = document.querySelector(".btn-equals");
equalsButton.addEventListener("click", () => equals(a,b,operator));


// type a number each one goes to memory as typed
// hit an operator - log it to slot a
// log the chosen operator to operator
// type a number each one typed goes to memeory as typed
// hit an operator - log it to slot b
// set teh operator
// operate
// update the display
// set a as the result
// hit an operator 
// let the operator to that chosen operator
// type numbers add them to memory
// hit equals/operator operate




//when an operator is chosen we want to send a css class to a particular div
//we also want to clear it from all the other divs