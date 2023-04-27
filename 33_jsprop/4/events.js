// demo 4
// JS event propagation

// Name the collections of TDs, TRs, and overall table
var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];


var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //e.stopPropagation();

  //A: only first alert is shown if it's uncommented
};


//Q: Does the order in which the event listeners are attached matter?
//A: No


//Predict, then test...
//Q: What effect does the boolean arg have in each?
//   (Leave exactly 1 version uncommented to test...)

//A: Prediction, for tds[x], it will show cell if true and won't show cell if false
// for trs[x], if true show the row, but if false don't show the html code for row
// for table.addEventListener: if it is true, it will show in decending order (from big to small) and when false, it show ascending order

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky, true);
  //tds[x].addEventListener('click', clicky, false);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky, true);
  //trs[x].addEventListener('click', clicky, false);
}

table.addEventListener('click', clicky, true);
//table.addEventListener('click', clicky, false);
