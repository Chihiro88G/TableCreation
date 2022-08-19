function CreateTable() {

    // get elements from html
    var first_number = document.getElementById("first_number");
    var increment_decrement = document.getElementById("increment_decrement");
    var table_section = document.getElementById("table_section");
    var rows = document.getElementById("rows");
    var columns = document.getElementById("columns");
    var message = document.getElementById("message");

    // initialize table_section
    if (table_section.childElementCount != 0) {
        while (table_section.firstChild) {
            table_section.removeChild(table_section.firstChild);
        }
    }

    // validation check
    if (message.innerHTML != null) {
        message.innerHTML = "";
    }
    if (first_number.value == null || first_number.value == "" ||
        increment_decrement.value == null || increment_decrement.value == "" ||
        rows.value == null || rows.value == "" || columns.value == null || columns.value == "") {
        message.innerHTML = "Enter the value(s) above."
        return;
    }
    message.innerHTML = "";

    // create elements <table> and <tbody>
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // create cells
    for (var j = 0; j < parseInt(rows.value); j++) {
        var row = document.createElement("tr");

        var num = parseFloat(first_number.value);
        for (var i = 0; i < parseInt(columns.value); i++) {
            var cell = document.createElement("td");

            if (i != 0) {
                num = num + parseFloat(increment_decrement.value)
            }
            var cellText = document.createTextNode(`${num + j}`);

            cell.appendChild(cellText);
            row.appendChild(cell);

            cell.setAttribute("width", "35px")
        }

        //row added to end of table body
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    table_section.appendChild(tbl);
    tbl.setAttribute("border", "2");
}