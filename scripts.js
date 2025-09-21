//we're building a calculator which can do addition, 
//subtraciton, multiplication and division.
//we need to have three variables which will work 
//via an operator function to do the math
//define these varaiables as a, operator, b
//define the function operate
//we need to use the number buttons to assign the variables a and b
//we need to use the operator buttons to assign the variable operator
//we need a way to first assign the variable a, then the variable b
//we need a running total which is the outcome which is what the 
//operate function updates
//clear will 0 this
//user presses a number this then updates the variable a, 
//no matter how many numbers they press a temporary variable called 'memory' keeps gorwing
//user presses an operator, now if a is empty = put it in a clear the memory, if a is full put it in b clear the memory and set the operator if a and b are both full operate
//user triggers an operate via the operator operate 
//take a operator b = result
//user presses equal operate and clear result

//define the variables
let a;
let b;
let operator="";
let memory=[];
let result=0;
let lastAnswer;

const setNumber = function(number){
    memory.push(number);
    console.log(memory)
}

//define the basic functions for operators
const setOperator = function(chosenOperator){
    if(memory.length === 0){
        console.log(memory)
        return;
    }
    else if(a===undefined){
        a = Number(memory.reduce((acc, current)=>acc+=current.toString(),""));
        memory = ["a"];
        operator = chosenOperator;
        return;
    }
    else if (b===undefined && memory.includes("a")){
        memory.shift();
        b = Number(memory.reduce((acc, current)=>acc+=current.toString(),""));
        memory = ["b"];
        operate(a,b,operator);
        operator = chosenOperator;
        return;
    }
    else if (memory.includes("b")){
        a=result;
        memory.shift();
        b=Number(memory.reduce((acc, current)=>acc+=current.toString(),""));
        memory = ["b"];
        operate(a,b,operator);
        operator = chosenOperator;
    }
    else {
        return;
    }
}

//define the function for operate
const operate = function(a,b,operator){
    if (operator==="plus"){
        result = a+b;
        console.log(result);
        console.log(operator);
        return result;
    }
    if(operator ==="minus"){
        result = a-b;
        console.log(result);
        console.log(operator);
        return result;
    }
    if(operator === "divide"){
        result = a / b;
        console.log(result);
        console.log(operator);
        return result;
    }
    if(operator ==="times"){
        result = a*b;
        console.log(result);
        console.log(operator);
        return result;
    }
}

const equals = function(a,b,operator){
    memory.shift();
    b = Number(memory.reduce((acc, current)=>acc+=current.toString(),""));
    lastAnswer = operate(a,b,operator);
    console.log(lastAnswer);
    clear();
}

const clear = function(){
    a=undefined;
    b=undefined;
    operator="";
    memory=[];
    result=0;
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


//we type numbers
//each of these are added to an array
//when we chooose an operator we then smash this array together and put it in variable a, that's our first number
//we also set the operator as our chosen operator
//now we type more numbers these are added to the array
//when we choose an operator again we need to compute the first calculation and show it as a result 
//we need to set it as the operator
//we choose another number and it is added to an array a
//we choose an operator
//we then have another number
//we choose another operator, this needs to compute the sum of the first one and then add it to the result
//now we choose another number
