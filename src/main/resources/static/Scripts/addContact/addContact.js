attrSubButton("add");
function chooseAdd() {
    drawTask("add");
    $('#selectId').hide();
}
function chooseUpdate() {
    drawTask("update");
    selectIdShow();
}
function chooseDelete() {
    drawTask("delete");
    selectIdShow();
}
function chooseRequest() {
    drawTask("request");
    $('#selectId').hide();
}

function drawTask(task) {
    flashChoice(task);
    flushInputs();
    drawInputsOutputs(task);
    attrSubButton(task);
}

function drawInputsOutputs(task) {
    if (task === "request") requestInputs();
    else addUpdDelInputs();
}

function addUpdDelInputs() {
    $('#phone').show();
    $('#email').show();
    $('#blogLink').show();
    $('#comment').show();
    $('#nameRequestTable').hide();
}

function requestInputs() {
    $('#phone').hide();
    $('#email').hide();
    $('#blogLink').hide();
    $('#comment').hide();
    $('#nameRequestTable').show();
}

function flashChoice(task) {
    $('#addChoice').html("add");
    $('#updateChoice').html("update");
    $('#deleteChoice').html("delete");
    $('#requestChoice').html("request");
    $('#' + task + "Choice").html("<b>" + task + "</b>");
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
    if (task !== "request") submit.val(task + " contact");
    else submit.val(task);
    submit.off('click');
    submit.on('click', function () {
        if (task === 'add') addContact();
        else if (task === 'update') updateContact();
             else if (task === 'delete') deleteContact();
                  else request();
    });
}

function selectIdShow() {
    $('#selectId').show();
    getIdsFromDB();
    setTimeout(function() {selectIdListener()}, 50);
}

