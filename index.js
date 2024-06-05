// alert("Javascript Problem Solving - 2024");

//1. Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them) 


let num1 = 10;
let num2 = 20;

let max = num1 > num2 ? num1 : num2;

console.log("the maximum number is = ", max);

// to find minimum number 

let min = num1 < num2 ? num1 : num2;
console.log("the minimum number is = ", min);


// 2. Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition) 

let number = -10;

// Check if the number is negative, positive, or zero
if (number < 0) {
    console.log( number, "= is negative number.");
} else if (number > 0) {
    console.log(number,"= is positive number.");
} else {
    console.log(number, "= is zero.");
}

// 3 Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

let divNumber = 10;

// check if number is divisible by 10 or not. 

if(divNumber % 10 === 0){
    console.log("yes, " + divNumber +" number is divisible by 10");
}else{
    console.log("no. " + divNumber + "  number is not divisible");
}

// 4 Solve the problem with Javascript  to check whether a number is even or odd. 

let checkNum = 10;
if (checkNum % 2 === 0){
    console.log(checkNum, "= is even Number");
}else{
    console.log(checkNum, "= is odd Number");
}

// 5 Solve the problem with Javascript  to check whether a character is in the alphabet or not

let alpha = "a"

if (
    (alpha >= 'A' && alpha <= 'Z') || (alpha >= 'a' && alpha <= 'z'))
    {
        console.log(alpha, " is Alphabet word");
}else{
    console.log(alpha, "this is not Alphabet");

}

// 6 Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)
 let temp = 26;

 if (temp >= 30){
    console.log("the weater is Hot");
 }else if (temp <= 25){
    console.log("the weater is Cool");
 }else{
    console.log("weater is Normal");
 }

 
//  7 Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)
let a = 1000;
let b = 500;
let c = 250;

if(a > b && a > c){
    console.log("maximum number is ", a);
}else if (b > c && b > c){
    console.log("maximum number is ", b);
}else{
    console.log("maximum number is ", c);
}

// to find minimum number 
if(a < b && a < c){
    console.log("minimum number is ", a);
}else if (b < c && b < c){
    console.log("minimum number is ", b);
}else{
    console.log("minimum number is ", c);
}

// 8 Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

let x = 5;

let result = (x % 2 === 0) ? "Even Number" : "Odd Number";
console.log(result);

// 9 Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

let numOne = 25;
let numTwo = 60;

if (numOne > 30 && numTwo > 30){
    console.log("numOne and numTwo, are both greater than 30");
}else{
    console.log("numOne and numTwo,both are not greater than 30");
}

// 10 Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)
let age = 16;

if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else {
    console.log("Not a teenager");
}

//11 Create a program that uses the logical OR operator to check if either one of two strings str1 or str2 is equal to "JavaScript". Output a boolean result.

let str1 = "Python";
let str2 = "JavaScript";

const isOutput = (str1 === 'Phython' || str2 === 'JavaScript');
document.write(isOutput);


        /*12 Given 3 subjects Math, English and Physics find the total marks and average of 3 subjects.
            Find out if the average grade:
            If Percentage >= 90% then print “Grade A”
            Percentage >= 80% : Grade B
            Percentage >= 70% : Grade C
            Percentage >= 60% : Grade D
            Percentage >= 40% : Grade E
            Percentage <br 40% : Grade F*/   
        document.write('<p>EX 12: Given 3 subjects Math, English and Physics find the total marks and average of 3 subjects.Find out if the average grade: , </br></p>');

            function calculateGrade(math, english, physics) {
            // Calculate total and average
            const total = math + english + physics;
            const average = total / 3;
            let grade;

            if (average >= 90) {
                grade = "Grade A";
            } else if (average >= 80) {
                grade = "Grade B";
            } else if (average >= 70) {
                grade = "Grade C";
            } else if (average >= 60) {
                grade = "Grade D";
            } else if (average >= 40) {
                grade = "Grade E";
            } else {
                grade = "Grade F";
            }
                return {
                    totalMark: total,
                    averageMark: average,
                    gradeMark: grade
                };
            }

        // Example usage
        let math = 80; //parseInt(prompt('enter math number'));
        let english = 60; //parseInt(prompt('enter english number'));
        let physics = 80; //parseInt(prompt('enter physics number'));

        const resultGrade = calculateGrade(math, english, physics);
        document.write('Total Marks: ' + resultGrade.totalMark + '</br>');
        document.write('Average Marks:' + resultGrade.averageMark + '</br>');
        document.write('Average Marks:' + resultGrade.gradeMark + '</br>');

        document.write('<p>End</p> </br>');
        //13 Find the random number between 1 to 10
        document.write('<p>EX 13: Find the random number between 1 to 10, </br></p>');

        function isRandomNumber(){
            return Math.floor(Math.random() * 10) + 1;

        }
        let randomNumber = isRandomNumber();
            document.write('"CHECK ON INSPACT. THE RESULT IS SHOWN ON CONSOLE AREA"');
            console.log('The random number is', randomNumber);

        document.write('<p>End</p> </br>');
        // 14 Create 3 meaningful arrays and  3 objects
        document.write('<p>EX 14: Create 3 meaningful arrays and  3 objects, </br></p>');

        const names = ['sumit', 'jihad','sayem', 'monika', 'jitu'];
        const age = [30, 26, 40, 22, 45];
        const fruits = ['mango', 'apple', 'banana', 'orange', 'jackfruit'];

        document.write('Name is = ', names[3], '</br>');
        document.write('Age is = ', age[1], '</br>');
        document.write('Fruit is = ', fruits[0], '</br>');

        const studentsName = {
            name: 'Sumit sarkar',
            rollNo: '301',
            grade : 'Grade A'

        };
        const carNames = {
            model: 'Audi 505',
            color: 'crystal Black',
            reg: 'TD552#FF',
            engine: 'Hydred Auto MM3',
            price: '$50000'
        };
        const book ={
            author: 'Humayun Ahamed',
            bookName: 'kothao keu nei',
            cover: 'Druvo esh',
            price: '180 tk',
            year: '2005'
        }

        document.write('From Car object = ',carNames.color, '</br>');
        document.write('From Book object = ',book.author, '</br>');
        document.write('From Student name object = ',studentsName.rollNo, '</br>');


        document.write('<p>End</p> </br>');
        // 15 Create a while loop which prints values from 10 to 50 
        document.write('<p>EX 15: Create a while loop which prints values from 10 to 50, </br></p>');

        var i = 10;
        while (i <= 50) {document.write(" " + i); i = i + 1;} 
    
        document.write('<p>End</p> </br>');
        document.write('<p>EX 16: Create a for loop which prints values from 20 to 60, </br></p>');
        // 16 Create a for loop which prints values from 20 to 60 
        for(let x = 20; x <= 60; x++){
            document.write(' ' + x);
        }

        document.write('</br>');
        for (let x = 60; x >= 20; x--){
            document.write(' ' + x);
        }


        document.write('<p>End</p> </br>');
        //17 Create a function of adding two numbers 
        document.write('<p>EX 17: Create a function of adding two numbers, </br></p>');


        function addNumber(a, b){
            return a + b;
        }

        let inputA = 5; //parseInt(prompt('enter 1st number'));
        let inputB = 10; //parseInt(prompt('enter 2nd number'));
        let sum = addNumber(inputA, inputB);
        document.write('total result =', sum);


        document.write('<p>End</p> </br>');
        //18 Create a function which returns a for loop which takes two parameter one is initial value & final value to return the list of number from initial to final value. 
        document.write('<p>EX 18:  Create a function which returns a for loop which takes two parameter one is initial value & final value to return the list of number from initial to final value. , </br></p>');

        function createNumberList(a, b) {
        let numberList = [];
        for (let i = a; i <= b; i++) {
            numberList.push(i);
        }
        return numberList;
        }
        let x = 5; //parseInt(prompt('enter 1st initial number'));
        let y = 10; //parseInt(prompt('enter 1st final number'));
        let result = createNumberList(x ,y);
        document.write(result);

        document.write('<p>End</p> </br>');
        // 19 Create a function which return whether the year is leap year or not 
        document.write('<p>EX 19: Create a function which return whether the year is leap year or not, </br></p>');

        function isLeapYear(year) {
            if ((year % 4 === 0)) {
                return (leapYear + ' is leap year');
            } else {
                return ( leapYear + ' is not leap year');
            }
        }

        let leapYear = 2001; //parseInt(prompt('enter year'));
        let leapYearResult = isLeapYear(leapYear);
        document.write(leapYearResult);


        document.write('<p>End</p> </br>');
        // 20 Create a function which return whether the temperature is hot or cold (30 <=  is hot, 25 >= is cold , anyother value is normal)  
        document.write('<p>EX 20: Create a function which return whether the temperature is hot or cold (30 <=  is hot, 25 >= is cold , anyother value is normal) , </br></p>');


        function isTemperature(inputTemp){
            if (inputTemp >= 30) {
                return (temp + ' is Hot');
            } else if (inputTemp <= 25) {
                return (temp + ' is cold');
            } else {
                return (temp + ' is Normal');
            }

        }

        let temp = 20;//parseInt(prompt('enter temperature'));
        let tempResult = isTemperature(temp);
        document.write(tempResult);

        document.write('<p>End</p> </br>');
        // 21 Create a function which return whether the year is leap year or not 
        document.write('<p>EX 21: Create a function which returns whether the number is odd or even, </br></p>');


        function isEvenOdd(inputNumber){
            if ((inputNumber %2 == 0)){
                return ( numEvenOdd + '= This is Even number');
            }
            else{
                return ( numEvenOdd + '= This is Odd number');
            }

        }
        let numEvenOdd = 2; //parseInt(prompt('enter number'));
        let evenOddResult = isEvenOdd(numEvenOdd);
        document.write(evenOddResult);


        document.write('<p>End</p> </br>');
        //22 Splice and an given array - remove two items and adding two new elements 
        document.write('<p>EX 22: Splice and an given array - remove two items and adding two new elements, </br></p>');
        let className =['a', 'b', 'c', 'd', 'e'];
        console.log(className);

        className.splice(0, 'X', 'Y');
        document.write(className , '</br>');

        let className2 =['a', 'b', 'c', 'd', 'e'];

        className2.splice(1, 2, 'M', 'N');
        document.write(className2);

        
        document.write('<p>End</p> </br>');
        //23 Reverse and sort an array where arr = [2,45,4,55,12,42,34,78]
        document.write('<p>EX 23: Reverse and sort an array where arr = [2,45,4,55,12,42,34,78], </br></p>');

        let reverseArray = [2,45,4,55,12,42,34,78];
        
        reverseArray.reverse();
        document.write(reverseArray , '</br>');

       
        reverseArray.sort();
        document.write(reverseArray);

        


        document.write('<p>End</p> </br>');
        //25 Reverse an given string. Where, - let text = “I love coding” - after reverse a string output will be - ‘gnidoc evol i’
        document.write('<p>EX 25: Reverse an given string. Where, - let text = “I love coding” - after reverse a string output will be , </br></p>');

        let word = 'I Love Coding';
        let reverseWord = word.toLowerCase().split(' ').reverse().join();

        document.write(reverseWord);




        document.write('<p>End</p> </br>');
        //26 Create an array with list of items. Iterate the array to view the list of the items in the console using for loop.
        document.write('<p>EX 26: Create an array with list of items. Iterate the array to view the list of the items in the console using for loop., </br></p>');


        const itemList = ['Tiger ', 'Lion ', 'Monkey ', 'Elephant ', 'Zebra ', 'Bear '];

        for(let i=0; i<itemList.length; i=i+1){
            document.write(itemList[i], '</br>');
        } 
        let a = 0;
        while (a < itemList.length){ document.write(itemList[a]);  a++ }


  
