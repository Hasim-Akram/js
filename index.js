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









































