var tableData = data;
var tbody = d3.select("tbody")

tableData.forEach(function(ufo) {
    var row = tbody.append("tr")
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td")
        cell.text(value)

    });   
  });
var submit =d3.select("#filter-btn")
submit.on("click",function(){
    var inputid = d3.select("#datetime");
    var inputvalue = inputid.property("value")
    console.log (inputvalue)
    var filterrow = tableData.filter(x => x.datetime === inputvalue)
    console.log(filterrow);
    tbody.html("")
    filterrow.forEach(function(ufo) {

        var row = tbody.append("tr")
         Object.entries(ufo).forEach(([key, value]) => {
             var cell = row.append("td")
             cell.text(value)


            });   

})
})

