function drawTable() {
    let table = $('#nameRequestTable');
    table.append(getHeader());
}

function getHeader() {
    let row = document.createElement("tr");
    let header = ["name", "phone", "email", "blogLink", "comment"];
    for (let i = 0; i < header.length; i++)
        row.append(getData(header[i]));
    return row;
}

function getData(data) {
    let cell = document.createElement("td");
    cell.innerHTML = data;
    return cell;
}