const urlApi = "https://85cs8t-3000.csb.app";
// const urlApi = "http://localhost:3000";
let totalPage = 0;
export const params = {
  _limit: 5,
  _page: 1,
};
export const getUsers = async (params = {}) => {
  try {
    let query = new URLSearchParams(params).toString();
    if (query) {
      query = "?" + query;
    }
    console.log(query);
    const res = await fetch(`${urlApi}/users${query}`);
    const users = await res.json();
    const totalCount = res.headers.get("x-total-count");
    totalPage = Math.ceil(totalCount / params._limit);
    renderUsers(users);
  } catch (error) {
    console.log(error.message);
    alert("Có lỗi xảy ra !");
  }
};

export const isGoPage = (page) => {
  return page === totalPage ? false : true;
};

const renderUsers = (users) => {
  const root = document.querySelector("#root");
  // console.log(!root.querySelector(".users"));
  if (!root.querySelector(".users")) {
    const usersEl = document.createElement("div");
    usersEl.className = "users";
    root.append(usersEl);
    root.insertBefore(usersEl, document.querySelector(".loader"));
  }

  document.querySelector(".users").innerHTML += `${users
    .map(({ name, language, citizenIdCard, bio, id, img }, index) => {
      return `<div class="user">
          <div class="info">
            <h2>Thông tin người dùng ${id}</h2>
            <p><span>Name:</span> ${name}</p>
            <p><span>Language:</span> ${language}</p>
            <p><span>Identification:</span> ${citizenIdCard}</p>
            <p><span>Bio:</span> ${bio}</p>

            <div class="contacts">
              <h3>Contacts:</h3>
              <div class="logo-contacts">
                <a href = "#1"><i class="fa-solid fa-phone"></i></a>
                <a href = "#2"><i class="fa-brands fa-x-twitter"></i></a>
                <a href = "#3"><i class="fa-brands fa-facebook"></i></a>
                <a href = "#4"><i class="fa-brands fa-instagram"></i></a>
                <a href = "#5"><i class="fa-brands fa-github"></i></a>
              </div>
            </div>
          </div>
          <div class="img-user">
            <img src="${img}" alt="img" />
          </div>
        </div>`;
    })
    .join("")}`;
};
