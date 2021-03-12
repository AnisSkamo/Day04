function main(){
    //Only change code below this line
    firstNum = 6;
    secondNum = 25;
    thirdNum = 5.2;
    firstNum *= 9;
    secondNum /= 5;
    thirdNum *= 10;
    //Only change code above this line
    return{
        firstNum,
        secondNum,
        thirdNum,
    };
}

console.log(main());
module.exports = main;