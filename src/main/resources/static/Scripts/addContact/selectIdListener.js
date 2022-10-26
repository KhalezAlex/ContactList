function getIdsFromDB() {
    $.ajax({
        url: "/getIds",
        type: "GET",
        dataType: "html",
        contentType: "application/json; charset=utf-8",
        success(data) {
            setOptions(JSON.parse(data).ids);
        }
    })
}
function getOption(id) {
    let option = document.createElement("option");
    option.innerHTML = id;
    return option;
}
function setOptions(ids) {
    let select = $('#selectId');
    select.empty();
    for (let i = 0; i < ids.length; i++)
        select.append(getOption(ids[i]));
    select.on("change", function () {
        selectIdListener();
    });
}
function setContactProps(contact) {
    $('#name').val(contact.name);
    $('#phone').val(contact.phone);
    $('#email').val(contact.email);
    $('#blogLink').val(contact.blogLink);
    $('#comment').val(contact.comment);
}
function getIdSelected() {
    let id = $('#selectId').val();
    if (id !== null)
        return id;
}
function selectIdListener() {
    $.ajax({
        url: "/getContact",
        type: "GET",
        dataType: "html",
        data: {contactId: getIdSelected()},
        success(data) {
            flushData();
            setContactProps(JSON.parse(data));
        }
    })
}
