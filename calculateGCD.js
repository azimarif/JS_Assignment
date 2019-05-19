let firstNumber=7;
let secondNumber=5;
let gcd=1;
let smallNumber=firstNumber>secondNumber?secondNumber:firstNumber;
for(let number=smallNumber; number>=2;number--){
  if(firstNumber%number==0 && secondNumber%number==0){
    gcd=number;
    break;
  }
}
console.log("GCD of "+firstNumber+" & "+secondNumber+ " is "+ gcd);
