function main(numOne, numTwo){
    
    var quotient;
    if(numTwo ===0){
        quoitent = 'Divide by 0! Cannot divide by zero!';
    } else {
quoitent=numOne/numTwo
    }
    return quotient;
}
console.log(main(15, 3));
console.log(main(25, 5));
console.log(main(420, 10));
console.log(main(55, 0));
module.exports = main;

