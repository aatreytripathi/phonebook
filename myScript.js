
function addHtmlTablerow() {
	
	var table=document.getElementById("mytable"),
	newRow=table.insertRow(table.length),
	cell1=newRow.insertCell(0),
	cell2=newRow.insertCell(1),
	cell3=newRow.insertCell(2),
	nm=document.getElementById("myNameInput").value,
	num=document.getElementById("myPhoneInput").value;
	cell1.innerHTML=nm;
	cell2.innerHTML=num;
	cell3.innerHTML='<button onclick="deleteRow(this)">DELETE</button>';
}
  
 



function myNameFunction() {
  var x = document.getElementById("myNameInput").value;
  document.getElementById("nm").innerHTML =x;
}

  
function myPhoneFunction() {
  var x = document.getElementById("myPhoneInput").value;
  document.getElementById("nub").innerHTML = x;
}
function deleteRow(r)
{
	 var table=document.getElementById("mytable");
	 table.deleteRow(r);
}

