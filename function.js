

var nums = [50, 50, 52, 25, 25, 35, 55, 22, 4, 5, 8, 55];

for (var i = 0; i < nums.length; i++) {

    var num = nums[i];


    if (num % 2 == 0) {
        console.log("this is even: ", num);
    } else {
        console.log("this is odd", num);
    }
}


//callback function 

function Callbackit(fname, old, task) {
    console.log("Name is ", fname);
    console.log("Age :", old);
    Doit();
}

function Doit() {
    console.log("DO it Frist");
}


Callbackit("Hasim", 20);


