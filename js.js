
var n = document.getElementById("n");
var roll = document.getElementById("roll");
var date = document.getElementById("date");

n.innerHTML = "Riya Rastogi ";
roll.innerHTML = "201500581";

var day = new Date();
var d = day.getDate();
var month = day.getMonth();
var year = day.getFullYear();

date.innerHTML = `${d}-${month}-${year}`;