/*
1. Boolean is a type of data, along with number of string. It contains only two values, true or false.
3 examples:
console.log(5==6);

isHandsome = true;
console.log(isHandsome)

x = 5;
console.log(x < 10);

2. A flow chart is the graphical representation of an algorithm

3. Nested conditionals is basically if/else statements.

if (x > 0) {
    console.log('x la so duong);
} else if (x = 0) {
    console.log('x = 0');
} else {
    console.log('x la so am');
}


4. Turtle exercises

clear()
color('red')
lt(30)
for(i=0;i<4;i++) {
fd(50)
rt(60)
fd(50)
rt(120)
fd(50)
rt(60)
fd(50)
lt(150)
}

clear()
color('blue')
rt(30)
fd(100)
rt(120)
fd(100)
rt(120)
color('red')
fd(100)
rt(90)
fd(100)
rt(90)
fd(100)
rt(90)
fd(100)
lt(162)
color('blue')
fd(100)
lt(72)
fd(100)
lt(72)
fd(100)
lt(72)
fd(100)
lt(192)
color('red')
fd(100)
rt(60)
fd(100)
rt(60)
fd(100)
rt(60)
fd(100)
rt(60)
fd(100)
rt(60)

Serious exercises

1. BMI

let height, weight, BMI;
height = prompt('Enter your height in cm');
weight = prompt('Enter you weight in kg');
BMI = weight / (height/100)**2;
console.log(BMI);

if (BMI < 16) {
    console.log('Severely underweigh');
} else if (BMI >= 16 && BMI < 18.5) {
    console.log('Underweight');
} else if (BMI >= 18.5 && BMI < 25) {
    console.log('Normal');
} else if (BMI >= 25 && BMI < 30) {
    console.log('Overweight');
} else {
    console.log('Obese');
}

2. Factorial of n

Solution 1:

let x = prompt("Enter a number");
x = Number(x);

if (x < 0) {
    console.log('Khong tinh duoc');
} else if (x === 0) {
    console.log('1');
} else if (x > 0) {
    function factorial(x) {
    if (x === 0) {
        return x = 1;
    }
    return x*factorial(x-1);
}
console.log(factorial(x));
}


Solution 2:

let x = prompt('Enter a number');

var total =1;
if (x < 0) {
    console.log('Khong tinh duoc');
} else if (x == 0) {
    console.log(total);
} else if (x > 0) {

    for (let a = 1; a <= x; a++) {
        total *= a;
    }
    console.log(total);
}
    


*/