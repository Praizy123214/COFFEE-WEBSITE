function addRow() {
  var name = document.getElementById("name").vaule;
  var age = document.getElementById("age").vaule;
  var gender = document.getElementById("gender").vaule;

  var table = document.getElementsByTagName("table");

  var newRow = table.insertRow(0);

  var cel2 = newRow.insertCell(1);
  var cel1 = newRow.insertCell(0);
  var cel3 = newRow.insertCell(2);

  cel1.innerHTML = name;
  cel2.innerHTML = age;
  cel3.innerHTML = gender;
}
