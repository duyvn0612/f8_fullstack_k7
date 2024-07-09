import { getTodos, addTodos, deleteTodos, updateTodos } from "./controllers.js";
getTodos();
const btnAddTodos = document.querySelector(".btn-add-todos");
const overlay = document.querySelector(".overlay");
const formAddTodos = document.querySelector(".form-add-todos");
const listTodos = document.querySelector(".list-todos");
var listTodosCompleted = document.querySelector(".list-todos-completed");
var isAddTodo = false;
var isEditTodo = false;
var idEditTodo;
const handlerAddTodos = () => {
  document.querySelector(".inp-add-todos").value = "";
  overlay.classList.add("show-overlay");
  isAddTodo = true;
};

const EventFormSubmitTodos = async (e) => {
  e.preventDefault();
  if (isAddTodo) {
    const formTodo = Object.fromEntries([...new FormData(formAddTodos)]);
    formTodo["status"] = "incomplete";
    const status = await addTodos(formTodo);
    if (status) {
      getTodos();
      formAddTodos.reset();
      overlay.classList.remove("show-overlay");
    } else {
      alert("Thêm thất bại !");
    }
    isAddTodo = false;
  }
  if (isEditTodo) {
    const status = await updateTodos(idEditTodo, {
      nameTodo: document.querySelector(".inp-add-todos").value,
    });
    if (status) {
      getTodos();
      formAddTodos.reset();
      overlay.classList.remove("show-overlay");
    } else {
      alert("Chỉnh sửa thất bại !");
    }
    isEditTodo = false;
  }
};

const handlerListTodosClick = async (e) => {
  //   console.dir(e.target);
  //   delete
  if (e.target.nodeName === "BUTTON" && e.target.className === "btn-trash") {
    const idTodo = e.target.parentElement.id;
    const status = await deleteTodos(idTodo);
    // console.log(e.target.parentElement.id);
    if (status) {
      getTodos();
    } else {
      alert("Xoá thất bại !");
    }
  }
  //   btn check incomplete
  if (
    e.target.nodeName === "BUTTON" &&
    e.target.className === "btn-check incomplete"
  ) {
    const idTodo = e.target.parentElement.id;
    const status = await updateTodos(idTodo, {
      status: "complete",
    });
    if (status) {
      getTodos();
    } else {
      alert("Cập nhật thất bại !");
    }
  }
  //   btn check complete
  if (
    e.target.nodeName === "BUTTON" &&
    e.target.className === "btn-check complete"
  ) {
    const idTodo = e.target.parentElement.id;
    const status = await updateTodos(idTodo, {
      status: "incomplete",
    });
    if (status) {
      getTodos();
    } else {
      alert("Cập nhật thất bại !");
    }
  }
  // btn edit
  if (e.target.nodeName === "BUTTON" && e.target.className === "btn-pen") {
    idEditTodo = e.target.parentElement.id;
    overlay.classList.add("show-overlay");
    document.querySelector(".inp-add-todos").value =
      e.target.parentElement.previousElementSibling.textContent;
    isEditTodo = true;
  }
};

btnAddTodos.addEventListener("click", handlerAddTodos);
formAddTodos.addEventListener("submit", EventFormSubmitTodos);
formAddTodos.addEventListener("click", (e) => {
  e.preventDefault;
  if (e.target.nodeName === "BUTTON" && e.target.className === "btn-cancel") {
    overlay.classList.remove("show-overlay");
  }
});
listTodos.addEventListener("click", handlerListTodosClick);
listTodosCompleted.addEventListener("click", handlerListTodosClick);
const btnToggleCompleted = document.querySelector(".btn-toggle-completed");
btnToggleCompleted.addEventListener("click", () => {
  //   console.log(listTodosCompleted.children.length);
  btnToggleCompleted.classList.toggle("toggle-btn");
  listTodosCompleted.classList.toggle("show-list-completed");
});
