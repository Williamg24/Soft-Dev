// demo 3
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //e.stopPropagation();

  //A: Before uncommenting the line, the alert would show the whole html
  // for the row, then the name of cell clicked, then the html for the row in order but 
  // if it is uncommented, it will only show the first alert. 
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

//Predict, then test...
//Q: What effect does the boolean arg have?
//   (Leave exactly 1 version uncommented to test...)
//A: Prediction that if it is true, the table will propagate and show the rest of the alert
// but if it is false, it will only show first alert. 


table.addEventListener('click', clicky, true);
//table.addEventListener('click', clicky, false);

// Q: When user clicks on a cell, in what order will the pop-ups appear?
//A: When true, the order is table. cell, row and when false, it is cell, row, table.