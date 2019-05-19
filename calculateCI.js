let principle=1000;
let rate=10;
let year=1;
let amount= principle * Math.pow((1+rate/100),year);
let compoundInterest=amount-principle;
console.log("Compound Interest is "+ compoundInterest);
