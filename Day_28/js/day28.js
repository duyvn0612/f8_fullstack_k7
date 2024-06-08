var formTaskToday = document.querySelector(".form-task-today");
var formTaskEdit = document.querySelectorAll(".todo-list .form-task-edit");
var taskInp = document.querySelector("#task");
var todoList = document.querySelector(".todo-list");
var wrapperContentList = document.querySelectorAll(".todo-list .task");
var contentTodoList = document.querySelectorAll(".todo-list .task .content");
var editContents = document.querySelectorAll(
  ".todo-list .task .icon-action .edit"
);
var deleteContents = document.querySelectorAll(
  ".todo-list .task .icon-action .delete"
);
var taskList = [];
var newTaskList = [];

function convertHTML(arr = []) {
  return arr.map(function (item) {
    return `<p class = "task"><span class = "content">${item}</span><span class = "icon-action"><i class="fa-solid fa-pen-to-square edit"></i><i class="fa-solid fa-trash delete"></i></span></p>`;
  });
}

function deleteItemInArr(arr = [], value) {
  return arr.filter(function (_value, index) {
    return value === _value ? false : true;
  });
}

formTaskToday.addEventListener("submit", function (e) {
  e.preventDefault();

  if (taskInp.value !== "") {
    taskList.push(taskInp.value);
    newTaskList.push(
      `<p class = "task"><span class = "content">${taskInp.value}</span><span class = "icon-action"><i class="fa-solid fa-pen-to-square edit"></i><i class="fa-solid fa-trash delete"></i></span></p>`
    );
    // console.log(newTaskList);
    taskInp.value = "";
    todoList.innerHTML = newTaskList.join("");
  }
  wrapperContentList = document.querySelectorAll(".todo-list .task");
  // console.log(wrapperContentList);
  contentTodoList = document.querySelectorAll(".todo-list .task .content");
  // deleteContents = document.querySelectorAll(
  //   ".todo-list p .icon-action .delete"
  // );
  // toggle content
  contentTodoList.forEach(function (contentTodo) {
    contentTodo.addEventListener("click", function () {
      contentTodo.classList.toggle("todo-Complete");
      console.log("ok");
    });
  });
  // delete  content
  wrapperContentList.forEach(function (wrapperContent, index) {
    if (wrapperContent.querySelector(".icon-action .delete")) {
      wrapperContent
        .querySelector(".icon-action .delete")
        .addEventListener("click", function () {
          // console.log(index);
          // console.log(wrapperContent.outerHTML);
          var valueHTML = wrapperContent.querySelector(".content");
          taskList = deleteItemInArr(taskList, valueHTML.textContent);
          newTaskList = newTaskList.filter(function (task) {
            if (String(task).includes(wrapperContent.textContent)) {
              return false;
            }
            return true;
          });
          todoList.removeChild(wrapperContent);
          wrapperContentList = document.querySelectorAll(".todo-list .task");
        });
    }
  });

  // edit content
  wrapperContentList.forEach(function (wrapperContent, index) {
    if (wrapperContent.querySelector(".icon-action .edit")) {
      wrapperContent
        .querySelector(".icon-action .edit")
        .addEventListener("click", function () {
          var valueHTML = wrapperContent.querySelector(".content");

          newTaskList = newTaskList.map(function (task, _index) {
            if (index === _index) {
              return `<form action="#" method="post" class="task form-task-edit">
            <input
              type="text"
              name="task-edit"
              value = ${valueHTML.textContent}
            />
            <button>add task</button>
          </form>`;
            }
            return task;
          });
          wrapperContent.outerHTML = `<form action="#" method="post" class="task form-task-edit">
          <input
            type="text"
            name="task-edit"
            value = ${valueHTML.textContent}
          />
          <button>add task</button>
        </form>`;
          // formTaskEdit = document.querySelectorAll(
          //   ".todo-list .task.form-task-edit"
          // );
          wrapperContentList = document.querySelectorAll(".todo-list .task");
          // console.log(wrapperContentList);
          // console.log(newTaskList);
          wrapperContentList.forEach(function (formTask, index) {
            if (formTask.classList.contains("form-task-edit")) {
              formTask.addEventListener("submit", function (e) {
                e.preventDefault();
                newTaskList = newTaskList.map(function (task, _index) {
                  if (index === _index) {
                    return `<p class = "task"><span class = "content">${
                      formTask.querySelector("input").value
                    }</span><span class = "icon-action"><i class="fa-solid fa-pen-to-square edit"></i><i class="fa-solid fa-trash delete"></i></span></p>`;
                  }
                  return task;
                });
                formTask.outerHTML = `<p class = "task"><span class = "content">${
                  formTask.querySelector("input").value
                }</span><span class = "icon-action"><i class="fa-solid fa-pen-to-square edit"></i><i class="fa-solid fa-trash delete"></i></span></p>`;
                wrapperContentList =
                  document.querySelectorAll(".todo-list .task");
                contentTodoList = document.querySelectorAll(
                  ".todo-list .task .content"
                );
                // contentTodoList.forEach(function (contentTodo) {
                //   contentTodo.addEventListener("click", function () {
                //     contentTodo.classList.toggle("todo-Complete");
                //     console.log("ok1");
                //   });
                // });
                formTask.removeEventListener("submit", function () {});
                console.log(wrapperContentList);
              });
            }
          });
        });
    }
  });
});
