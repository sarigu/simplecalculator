//Buttons for operations
let addBtn = document.querySelector("#addButton");
let substractBtn = document.querySelector("#substractButton");
let multiplyBtn = document.querySelector("#multiplyButton"); 
let divideBtn = document.querySelector("#divideButton");
let equalBtn = document.querySelector("#equalButton");

//Button for numbers
let nmb0 = document.querySelector("#number0"); 
let nmb1 = document.querySelector("#number1"); 
let nmb2 = document.querySelector("#number2"); 
let nmb3 = document.querySelector("#number3"); 
let nmb4 = document.querySelector("#number4"); 
let nmb5 = document.querySelector("#number5"); 
let nmb6 = document.querySelector("#number6"); 
let nmb7 = document.querySelector("#number7"); 
let nmb8 = document.querySelector("#number8"); 
let nmb9 = document.querySelector("#number9 "); 

//Textfield
let display = document.querySelector("#display");

//Others
let result; 
let divisionClicked = false; 
let additionClicked = false; 
let substractionClicked = false; 
let multiplicationClicked = false; 
let firstNumber = ""; 
let secondNumber =""; 
let first = true; 
let second = false; 


//Methods

addBtn.addEventListener("click",add); 
substractBtn.addEventListener("click", substract); 
multiplyBtn.addEventListener("click", multiply); 
divideBtn.addEventListener("click", divide); 
equalBtn.addEventListener("click", displayResult); 


nmb0.addEventListener("click", add0);
nmb1.addEventListener("click", add1);
nmb2.addEventListener("click", add2);
nmb3.addEventListener("click", add3);
nmb4.addEventListener("click", add4);
nmb5.addEventListener("click", add5);
nmb6.addEventListener("click", add6);
nmb7.addEventListener("click", add7);
nmb8.addEventListener("click", add8);
nmb9.addEventListener("click", add9);

function add(){
    first=false; 
    second=true; 
    additionClicked = true;  
}

function substract(){
    first=false; 
    second=true; 
    substractionClicked = true;  
}

function multiply(){
    first=false; 
    second=true; 
    multiplicationClicked = true; 
}

function divide(){
    first=false; 
    second=true; 
    divisionClicked = true; 
}

function displayResult(){
    if(additionClicked == true){
        result = parseInt(firstNumber) + parseInt(secondNumber); 
    } else if (substractionClicked == true){
        result = parseInt(firstNumber) - parseInt(secondNumber); 
    } else if (divisionClicked == true){
        result = parseInt(firstNumber) / parseInt(secondNumber); 
    } else if (multiplicationClicked == true){
        result = parseInt(firstNumber) * parseInt(secondNumber); 
    }
 
    display.textContent = result; 
    reset(); 
}

function reset(){
    firstNumber =""; 
    secondNumber =""; 
    first= true; 
    second = false;  
    additionClicked = false; 
    substractionClicked = false;
    multiplicationClicked = false; 
    divisionClicked = false; 
}

function add0(){
    if(first == true){
        firstNumber += "0"; 
        display.textContent = firstNumber; 
    } else {
        secondNumber += "0"; 
        display.textContent = secondNumber; 
    }
}

function add1(){
    if(first == true){
        display.textContent=""; 
        firstNumber += "1"; 
        display.textContent = firstNumber; 
    } else {
        secondNumber+="1"; 
        display.textContent = secondNumber; 
    }
}

function add2(){
    if(first == true){
        firstNumber +="2"; 
        display.textContent = firstNumber; 
    } else {
        secondNumber+="2"; 
        display.textContent = secondNumber;
    }
}

function add3(){
    if(first == true){
        firstNumber +="3"; 
        display.textContent = firstNumber; 
    } else {
        secondNumber+="3"; 
        display.textContent = secondNumber;
    }
}

function add4(){
    if(first == true){
        firstNumber += "4"; 
        display.textContent = firstNumber; 
    } else {
        secondNumber+="4"; 
        display.textContent = secondNumber;
    }
}

function add5(){
    if(first == true){
        firstNumber +="5"; 
        display.textContent = firstNumber; 
    } else {
        secondNumber+="5"; 
        display.textContent = secondNumber;
    }
}

function add6(){
    if(first == true){
        firstNumber +="6"; 
        display.textContent = firstNumber; 
    } else {
        secondNumber+="6"; 
        display.textContent = secondNumber;
    }
}

function add7(){
    if(first == true){
        firstNumber += "7"; 
        display.textContent = firstNumber; 
    } else {
        secondNumber+="7"; 
        display.textContent = secondNumber;
    }
}

function add8(){
    if(first == true){
        firstNumber += "8"; 
        display.textContent = firstNumber; 
    } else {
        secondNumber+="8"; 
        display.textContent = secondNumber;
    }
}

function add9(){
    if(first == true){
        firstNumber +="9"; 
        display.textContent = firstNumber; 
    } else {
        secondNumber+="9"; 
        display.textContent = secondNumber;
    }
}