// from data.js
var tableData = data;

// YOUR CODE HERE
//select the tbody to append table data 
var tbody = d3.select('tbody');

//Define selection for date for filtered data

var date = d3.select('#datetime');

//Function that builds the table up 

function buildTable(input) {
    
    tbody.html("");
    input.forEach((Row) => {
        console.table(Row);
        var row = tbody.append("tr");

        console.table(Object.values(Row));
        Object.values(Row).forEach((citydata) => {

            var output = row.append('td');
            output.text(citydata);


        });
    });
};

// Define function and call it to tableData
function handleClick(){
    
    var date = d3.select('#datetime').property("value");

    if (date) {
        tableData = tableData.filter((row) => row.datetime === date);   
    } 
    buildTable(tableData);
}

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);