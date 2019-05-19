let firstNumber=11;
let lastNumber=20;
let sum=0;
for(let number=firstNumber;number<=lastNumber;number++){
  if(number%2==0){
    sum+=number;
  }
}
console.log("Sum = "+ sum);
