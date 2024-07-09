const urlApi = "http://fyl9py-3000.csb.app";

export const getTodos = async () => {
  const res = await fetch(urlApi + "/todos");
  const todos = await res.json();
  console.log(todos);
  renderTodos(todos);
};

const renderTodos = (todos) => {
  const listTodos = document.querySelector(".list-todos");
  const listTodosCompleted = document.querySelector(".list-todos-completed");
  listTodos.replaceChildren();
  listTodosCompleted.replaceChildren();
  todos.forEach(({ id, nameTodo, status }, index) => {
    let divTodoEl = document.createElement("div");
    divTodoEl.className = "todo";
    // divTodoEl.id = `${id}`;
    let spanEl = document.createElement("span");
    spanEl.className = "content";
    spanEl.innerText = nameTodo;
    let divGrBtnEl = document.createElement("div");
    divGrBtnEl.className = "btn-group-function";
    divGrBtnEl.id = `${id}`;
    let btnTrashEl = document.createElement("button");
    btnTrashEl.className = "btn-trash";
    btnTrashEl.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
    let btnPenEl = document.createElement("button");
    btnPenEl.className = "btn-pen";
    btnPenEl.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
    let btnCheckEl = document.createElement("button");
    btnCheckEl.className = "btn-check";
    btnCheckEl.innerHTML = `<i class="fa-solid fa-check-to-slot"></i>`;
    btnCheckEl.classList.add(`${status}`);
    divGrBtnEl.append(btnTrashEl, btnPenEl, btnCheckEl);
    divTodoEl.append(spanEl, divGrBtnEl);
    if (status === "incomplete") {
      listTodos.append(divTodoEl);
    }
    if (status === "complete") {
      listTodosCompleted.append(divTodoEl);
    }
  });
  document.querySelector(
    "#quantity-completed"
  ).textContent = `${listTodosCompleted.children.length}`;
};

export const addTodos = async (todo) => {
  try {
    const res = await fetch(urlApi + "/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    return res.ok;
  } catch {
    return false;
  }
};

export const deleteTodos = async (idTodo) => {
  try {
    const res = await fetch(urlApi + "/todos/" + idTodo, {
      method: "DELETE",
    });
    return res.ok;
  } catch {
    return false;
  }
};

export const updateTodos = async (idTodo, data) => {
  try {
    const res = await fetch(urlApi + "/todos/" + idTodo, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch {
    return false;
  }
};
