// demo 2
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

table.addEventListener('click', clicky);


// Q: When user clicks on a cell, in what order will the pop-ups appear?

// A: It first gives the name of the cell that is clicked then shows
// the html code for the row in order and then shows the html code for the whole table 