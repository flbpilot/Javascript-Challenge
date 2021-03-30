// from data.js
var tableData = data;
var tbody = d3.select("tbody")

tableData.forEach(function(ufo) {
   // console.log(ufo);
    var row = tbody.append("tr")
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td")
        cell.text(value)
        // Log the key and value
       // console.log(`Key: ${key} and Value ${value}`);
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
        // console.log(ufo);
         var row = tbody.append("tr")
         Object.entries(ufo).forEach(([key, value]) => {
             var cell = row.append("td")
             cell.text(value)
             // Log the key and value
            // console.log(`Key: ${key} and Value ${value}`);
           });   

})
})
