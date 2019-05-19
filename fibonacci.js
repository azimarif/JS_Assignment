let firstNumber=0;
let secondNumber=1;
let numberOfTerms=10;
let nextNumber=0;
console.log(firstNumber);
console.log(secondNumber);
for(let fiboCounter=2;i<numberOfTerms;fiboCounter++){    
  nextNumber=firstNumber+secondNumber;    
  console.log(nextNumber);    
  firstNumber=secondNumber;    
  secondNumber=nextNumber;    
}  
