var tableData = data;
var table = d3.select("tbody");

function fullTable(data){
    tableData.forEach((ufo) => {
        var row = table.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td").text(value);
        });
    });
}

var filterButton = d3.select("#filter-btn");
var clearButton = d3.select("#clear-btn")

var form = d3.select("#search-form");


filterButton.on("click", runFilter);
clearButton.on("click", runClear)
form.on("submit",runFilter);

function runFilter(){

    d3.event.preventDefault();

    var dateElement = d3.select("#datetime-input");
    console.log(dateElement.property("value"))
    var dateValue = dateElement.property("value");
    var dateSearch = tableData.filter(tableData => tableData.datetime === dateValue);
    console.log(dateSearch);
    table.html("")


    dateSearch.forEach((results) => {
        row = table.append("tr");
        Object.entries(results).forEach(([key,value]) => {
        cell = row.append("td").text(value);
        });
    
    });

}

function runClear(){
    d3.event.preventDefault();
    table.html("")
    fullTable(tableData)

}

fullTable(tableData);
