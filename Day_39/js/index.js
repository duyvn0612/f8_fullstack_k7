import { getUsers, isGoPage, params } from "./utils.js";
const loader = document.querySelector(".loader");

window.addEventListener(
  "scroll",
  () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // console.log(Math.ceil(scrollTop + clientHeight), scrollHeight);
    if (
      Math.ceil(scrollTop + clientHeight) >= scrollHeight &&
      isGoPage(params._page)
    ) {
      params._page++;
      showLoader();
      setTimeout(async () => {
        getUsers(params);
        removeLoader();
      }, 400);
    }
  },
  { passive: true }
);

const removeLoader = () => {
  loader.classList.remove("show");
};

const showLoader = () => {
  loader.classList.add("show");
};

getUsers(params);
