// import the data from data.js
const tableDate = data;

//Reference the html table useing d3
var tbod = d3.select("tbody")

function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
    }
  );
 });
}
