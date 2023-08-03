let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){

    let clear = document.querySelector('#clear')
    let equal = document.querySelector('.equal')
    let decimal = document.querySelector('.decimal')
    
    let nums = document.querySelectorAll('.num')
    let operators = document.querySelectorAll('.operator')
    
    let previousScreen = document.querySelector('.previous')
    let currentScreen = document.querySelector('.current')

    nums.forEach((num) => num.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + "" + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = previousValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function(){        
            calculate()
            previousScreen.textContent = ''
            currentScreen.textContent = previousValue;
           
        
    })

    decimal.addEventListener("click", function(){
        addDecimal()
    })
})

function handleNumber(num){
    if(currentValue.length <= 8){
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';

}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+"){
        previousValue += currentValue;
    } else if(operator === "-"){
        previousValue -= currentValue;
    } else if (operator === "x"){
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }

    

    //previousValue = previousValue.toString();
    //currentValue = previousValue.toString();
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.'
    }
}

