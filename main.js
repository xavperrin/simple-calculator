
function calculate(inputValue){
   let result=0;
   console.log(inputValue);
   const expression=/\+|\-|\*|\//;
   const numbers = inputValue.split(expression);
   console.log(numbers);
   const numberA=parseInt(numbers[0]);
   const numberB=parseInt(numbers[1]);
   const operation=inputValue.match(expression);
   
   if(Number.isNaN(numberA) || Number.isNaN(numberB) || operation===null ){
      updateResult('operation not recognized');
      return;
   }

   const _calculator =new Calculator();
   _calculator.add(numberA);

   
   switch(operation[0]){
      case "+":
         result=_calculator.add(numberB);
         break;
      case "-":
         result=_calculator.subtract(numberB);
         break;
      case "*":
         result=_calculator.subtract(numberB);
      case "/":
         result=_calculator.divide(numberB);
      break;
   }
   updateResult(result);  
}

function updateResult(myresult){

   console.log(myresult);
   const element=document.getElementById('result');
   console.log(element);   
   if(element){
   element.innerText=myresult;
   }
}