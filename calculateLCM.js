let firstNumber=15;
let secondNumber=25;
let largeNumber=firstNumber>secondNumber?firstNumber:secondNumber;
let lcm=0;
for(let number=largeNumber; number<=firstNumber*secondNumber;number++){
  if(number%firstNumber==0 && number%secondNumber==0){
    lcm=number;
    break;
  }
}
console.log("LCM of "+firstNumber+" & "+secondNumber+ " is "+ lcm);
