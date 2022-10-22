var num1 = 30;
var num2 = 30;
var sum1 = num1 + num2;

let name = "Hasim Akram";

console.log(sum1);

console.log(typeof name);



let promise = "I promise I will do this course within a month";

console.log(promise.toLowerCase());
console.log(promise.toLocaleUpperCase());
console.log(promise.indexOf('will'));
console.log(promise.split(' '));

var one = 0.1;
var two = 0.2;


//two = parseInt(two);


console.log(one + two);


var pos = -5;

var absolutem = Math.abs(pos);



console.log(absolutem);


var date = new Date('1995-07-10');
console.log(date);

//array js

var friendAge = [12, 17, 20, 23, 12, 58, 63, 2, 56, 24, 12, 1, 6];
console.log(friendAge.length);

console.log(friendAge[1]);
friendAge[3] = 25;

var hasimAge = friendAge[3];
console.log(hasimAge);
console.log(friendAge.indexOf(25));
//push mean array updated its element
friendAge.push(260, 102, 222);
console.log(friendAge);
console.log(friendAge.length);
//pop mean delete last item
friendAge.pop();
console.log(friendAge);
//add remove add beggining array
friendAge.unshift(260, 102, 222);
console.log(friendAge);
friendAge.shift(260, 102, 222);
console.log(friendAge);

console.log(friendAge.slice(3, 10));


//loop


var numwh = 0;

while (numwh <= 10) {
    console.log(numwh);
    numwh++;

}

var arrayll = [20, 30, 52, 33, 33, 32, 55];


for (var i = 0; i <= arrayll.length; i++) {
    console.log(arrayll[i]);
}


function Myfuncion() {
    console.log('jan o baby');
    console.log('this is called function');
}
Myfuncion();



function double(paranum) {

    var result = paranum * 2;
    console.log(result)


}
double(10);
double(200);
double(555)



//return


function valureturn(retunval) {
    var resultreturn = retunval * 2;
    return resultreturn;
}

var firstval = valureturn(50);
var secondval = valureturn(100);

console.log(" return value ", firstval, secondval);




// javascript object;


var student = { id: 101, phone: 0125552, name: "Hasim" };
var studenttwo = { id: 102, phone: 0125544, name: "Akram" };
console.log(student, studenttwo);


var stphone = student.phone;
var stname = student["name"];
//update object property
student.phone = 25255;
//add property
student.gender = "male";

console.log(stphone);
console.log(stname);
console.log(student, studenttwo);


// var inch = 2578;
// var feet = inch / 12;
// console.log('feet ', feet);


function inchTOfeet(inch) {

    var feet = inch / 12;

    return feet;
}
var feet1 = inchTOfeet(500);
var feet2 = inchTOfeet(60);


console.log(feet1);
console.log(feet2);



var namev = "javed Akber";
const country = "Bangladesh";
console.log(namev);

if (namev.length > 5) {
    namev = "jave";
}
console.log(namev);
console.log(country);


//factorial with recursive


//5! = 4!*5/ (5-1)!*5
//6! =(6-1)!*6

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n = n * factorial(n - 1);
    }
}
var result = factorial(5);

console.log(result);













































