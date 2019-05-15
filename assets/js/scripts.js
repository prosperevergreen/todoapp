
$("ul").on("click", ".todo-text", function () {
    $(this).toggleClass("completed");
    $(this).siblings().toggleClass("completed");
})

$("ul").on("click", ".delete", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})

var todoTextBegin = '<li><span class="delete"><i class="far fa-trash-alt"></i></span><span class="todo-text">';
var todoTextEnd = '</span>';
var todoDate = '<span class="todo-date">@';
var listEnd = '</span></li>';

$(".fa-plus").on("click", function (event) {
    var newTodoText = $(".new-todo").val();
    var newDate = $(".new-date").val();
    if (newDate === "" || newTodoText === "") {
        if (newDate === "") {
            errrorField($(".new-date"));
        }
        if (newTodoText === "") {
            errrorField($(".new-todo"));
        }
    }
    else {
        $(".new-todo").val("");
        $(".new-date").val("");
        $("ul").append(todoTextBegin + newTodoText + todoTextEnd + todoDate + newDate + listEnd);

    }

})

$(".todo-input").children().on("focus", function () {
    $(this).removeClass("error");
})

function errrorField(field) {
    field.toggleClass("error");
}

