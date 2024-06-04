var formTaskToday = document.querySelector(".form-task-today");
var taskInp = document.querySelector("#task");
var todoList = document.querySelector(".todo-list");
var wrapperContentList = document.querySelectorAll(".todo-list p");
var contentTodoList = document.querySelectorAll(".todo-list p .content");
var editContents = document.querySelectorAll(".todo-list p .icon-action .edit");
var deleteContents = document.querySelectorAll(
  ".todo-list p .icon-action .delete"
);
var taskList = [];
var newTaskList = [];

function deleteItemInArr(arr = [], value) {
  return arr.filter(function (_value, index) {
    return value === _value ? false : true;
  });
}

formTaskToday.addEventListener("submit", function (e) {
  e.preventDefault();

  if (taskInp.value !== "") {
    taskList.push(taskInp.value);
    // newTaskList = convertHTML(taskList);
    newTaskList = taskList.map(function (item) {
      return `<p><span class = "content">${item}</span><span class = "icon-action"><i class="fa-solid fa-pen-to-square edit"></i><i class="fa-solid fa-trash delete"></i></span></p>`;
    });
    taskInp.value = "";
  }
  todoList.innerHTML = newTaskList.join("");
  wrapperContentList = document.querySelectorAll(".todo-list p");
  contentTodoList = document.querySelectorAll(".todo-list p .content");
  deleteContents = document.querySelectorAll(
    ".todo-list p .icon-action .delete"
  );
  // toggle content
  contentTodoList.forEach(function (contentTodo) {
    contentTodo.addEventListener("click", function () {
      contentTodo.classList.toggle("todo-Complete");
    });
  });
  // delete  content
  wrapperContentList.forEach(function (deleteContent, index) {
    deleteContent
      .querySelector(".todo-list p .icon-action .delete")
      .addEventListener("click", function () {
        var valueHTML = deleteContent.querySelector(".todo-list p .content");
        console.log(deleteContent);
        taskList = deleteItemInArr(taskList, valueHTML.textContent);
        newTaskList = deleteItemInArr(newTaskList, deleteContent);
        todoList.removeChild(deleteContent);
      });
  });
});
