attrSubButton("add");
function chooseAdd() {
    $('#addChoice').html("<b>Add</b>");
    $('#updateChoice').html("Update");
    $('#deleteChoice').html("Delete");
    $('#selectId').hide();
    flushInputs();
    attrSubButton('add');
}
function chooseUpdate() {
    $('#addChoice').html("Add");
    $('#updateChoice').html("<b>Update</b>");
    $('#deleteChoice').html("Delete");
    flushInputs()
    attrSubButton('update');
    selectIdShow();
}
function chooseDelete() {
    $('#addChoice').html("Add");
    $('#updateChoice').html("Update");
    $('#deleteChoice').html("<b>Delete</b>");
    flushInputs();
    attrSubButton('delete');
    selectIdShow();
}

function flushInputs() {
    $('#name').val("");
    $('#phone').val("");
    $('#email').val("");
    $('#blogLink').val("");
    $('#comment').val("");
}

function attrSubButton(task) {
    let submit = $('#submit');
    submit.val(task + " contact");
    submit.off('click');
    submit.on('click', function () {
        if (task === 'add') addContact();
        else if (task === 'update') updateContact();
        else deleteContact();
    });
}

function selectIdShow() {
    $('#selectId').show();
    getIdsFromDB();
    setTimeout(function() {selectIdListener()}, 50);
}