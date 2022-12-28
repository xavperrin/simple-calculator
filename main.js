const displayresult=document.querySelector('#result');

function updateresult(myresult){
   displayresult.textContent=myresult;
}

function calculate(inputValue){
   let result=0;
   const expression=/\+|\-|\*|\//;
   const numbers = inputValue.split(expression);
   console.log(numbers);
   const numberA=parseInt(numbers[0]);
   const numberB=parseInt(numbers[1]);
   const operation=inputValue.match(expression);
   if(Number.isNaN(numberA) || Number.isNaN(numberB) || operation===null){
      updateresult('operation not recognized');
      return;
}

   const calculator =new Calculator;
   calculator.add(numberA);
   switch(operation[0]){
      case "+":
         result=calculator.add(numberB);
         break;
      case "-":
         result=calculator.subtract(numberB);
         break
      case "*":
         result=calculator.subtract(numberB);
      case "/":
         result=calculator.divide(numberB);
      break;
   }
   updateresult(result);  
}