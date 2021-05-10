/**
 * vanila jS second time
 * function
 */

const Nayoon = {
    name:'Nayoon',
    age: 19,
    gender: 'FeMale',
    isStudent: true
}
//console.log(Nayoon.age);

//console은 object log는 function 
//내장함수(bult-in function)
//console.log(console);
function sayHello(name,age){
    return (`Hello ${name} you are ${age} years old`);
}
const greetNayoon = sayHello('NaYoon',19);
const greetJun =sayHello('Jun',25);
//console.log(greetNayoon);


//make object and function
const calculator = {
    plus : function(a,b){
        return a+b;
    }
    ,minus : function(a,b){
        return a-b;
    }
    ,mul : function(a,b){
        return a*b;
    }
    ,div : function(a,b){
        return a/b;
    }
    ,power : function(a,b){
        return a**b;
    }
}

const plus = calculator.plus(5,7);
console.log(plus);