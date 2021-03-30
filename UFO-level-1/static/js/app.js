var tableData = data;

console.log(tableData);

var tbody = d3.select("tbody");
var clear_button = d3.select("#clear-btn");
var date_form = d3.select("#date_form");

tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  
clear_button.on("click", runClear);
date_form.on("submit", runFilterDate);

function runClear() {
    d3.event.preventDefault();
    tbody.html("");
    tableData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}


function runFilterDate() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);

    tbody.html("");

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}




