// from data.js
var tableData = data;

// YOUR CODE HERE!

console.log(data)

function showTable(item){
    var tbody = d3.select('tbody');
    item.forEach((UFOinfo)=> {
        var row = tbody.append('tr');
        Object.entries(UFOinfo).forEach(([key,value])=> {
        var single = row.append('td');
        single.html(value);
        });

    });

};

console.log(showTable)