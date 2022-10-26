function addContact() {
    $.ajax({
        url: "/add",
        type: "GET",
        dataType: "html",
        data: {
            name: $('#name').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
            blogLink: $('#blogLink').val(),
            comment: $('#comment').val()
        }
    });
    flushData();
}
function updateContact() {
    $.ajax({
        url: "/update",
        type: "GET",
        dataType: "html",
        data: {
            id: $('#selectId').val(),
            name: $('#name').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
            blogLink: $('#blogLink').val(),
            comment: $('#comment').val()
        },
        success: function () {
            flushData();
            chooseUpdate()}
    })
}
function deleteContact() {
    $.ajax({
        url: "/delete",
        type: "GET",
        dataType: "html",
        data: {id: $('#selectId').val()},
        success: function () {
            flushData();
            chooseDelete();}
    })
}
function request() {
    flushTable();
    $.ajax({
        url: "/nameRequest",
        type: "GET",
        dataType: "html",
        data: {name: $('#name').val()},
        success(data) {
            let tableData = JSON.parse(data);
            drawTable(tableData);
        }
    })
}

