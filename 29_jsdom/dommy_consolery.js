// Team Wired Creations :: William Guo, Craig Chen 
// SoftDev pd2
// K28 -- Getting more comfortable with the dev console and the DOM
// 2023-04-05w
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 1024,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...
// FIB
function fib(n) {
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
// FAC
function fact(n) {
    if (n == 0){
        return 1;
    }
    return (n * fact(n-1))
}
// GCD
function GCD(a,b) {
  if (b===0) { //compares if a is the same type as b
    return a;
    }
    return GCD(b, a % b);
}

// In addition to the style shown above,
//  you are encouraged to test drive the "arrow function syntax" as shown below.
//  Note anything notable.
const myFxn = (param1, param2) => {
  // body
  return retVal;
};

var fibB = document.getElementById("fibButton");

function runFib() {
  var fibT = document.getElementById("fibText");
  fibT = fibT.value;
  document.getElementById("fibPara").innerHTML = fib(fibT);
}

fibB.addEventListener("click", () => runFib());


var facB = document.getElementById("facButton");

function runFac() {
  var facT = document.getElementById("facText");
  facT = facT.value;
  document.getElementById("facPara").innerHTML = fact(facT);
}

facB.addEventListener("click", () => runFac());

var gcdB = document.getElementById("gcdButton");

function runGcd() {
  var gcdT_1 = document.getElementById("gcdText1");
  var gcdT_2 = document.getElementById("gcdText2");
  gcdT_1 = gcdT_1.value;
  gcdT_2 = gcdT_2.value;
  document.getElementById("gcdPara").innerHTML = GCD(gcdT_1, gcdT_2);
}

gcdB.addEventListener("click", () => runGcd());

