function addContact() {
    console.log("add chosen");
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
    flushInputs();
}

function updateContact() {
    console.log("update chosen")
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
            flushInputs();
            chooseUpdate()}
    })
}

function deleteContact() {
    console.log("delete chosen");
    $.ajax({
        url: "/delete",
        type: "GET",
        dataType: "html",
        data: {id: $('#selectId').val()},
        success: function () {
            flushInputs();
            chooseDelete();}
    })
}

function request() {
    console.log("request");
    $.ajax({
        url: "/nameRequest",
        type: "GET",
        dataType: "html",
        data: {name: $('#name').val()},
        success(data) {
            let t = JSON.parse(data);
            for (let i = 0; i < t.length; i++)
                console.log(t[i].phone);
            drawTable();
        }
    })
}

