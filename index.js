ej.base.enableRipple(true);

var data = new ej.data.DataManager(window.hierarchyOrderdata).executeLocal(new ej.data.Query().take(15));
var grid = new ej.grids.Grid({
  dataSource: data,
   columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'EmployeeID', headerText: 'Employee ID', width: 150, textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
        ]
});
grid.appendTo('#Grid');

var button = new ej.buttons.Button({ cssClass: `e-primary` }, '#close');
var submitbutton = new ej.buttons.Button({ cssClass: `e-primary` }, '#submit');

document.getElementById("Gridform").addEventListener("submit", (e) => {
e.preventDefault();
  var value = parseInt(document.getElementById('multiplier').value, 10);
  data = new ej.data.DataManager(window.hierarchyOrderdata).executeLocal(new ej.data.Query().where("EmployeeID", "equal", value).take(15))
  grid.dataSource = data;
  document.getElementById("userinput").style.display = "none";
  document.getElementById("mtable").style.display = "";
  document.getElementById("Gridform").reset();
});
document.getElementById("close").addEventListener("click", (e)=>{
document.getElementById("mtable").style.display = "none";
document.getElementById("userinput").style.display = "";
});