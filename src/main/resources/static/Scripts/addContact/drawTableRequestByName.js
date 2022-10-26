function drawTable(tableData) {
    let table = $('#nameRequestTable');
    table.append(getHeader());
    for (let i = 0; i < tableData.length; i++)
        table.append(getRow(tableData[i]));
}
function getHeader() {
    let row = document.createElement("tr");
    let header = ["name", "phone", "email", "blogLink", "comment"];
    for (let i = 0; i < header.length; i++)
        row.append(getData(header[i]));
    return row;
}
function getRow(contact) {
    let row = document.createElement("tr");
    row.append(getData(contact.name));
    row.append(getData(contact.phone));
    row.append(getData(contact.email));
    row.append(getData(contact.blogLink));
    row.append(getData(contact.comment));
    return row;
}
function getData(data) {
    let cell = document.createElement("td");
    cell.innerHTML = data;
    cell.setAttribute("class", "request_Table_cell")
    return cell;
}

function flushTable() {
    let table = $('#nameRequestTable');
    if (table.children().length !== 0)
        table.children().remove();
}