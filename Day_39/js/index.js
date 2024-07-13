import { getUsers, isGoPage, params } from "./utils.js";
const loader = document.querySelector(".loader");
let isResponse = false;
window.addEventListener(
  "scroll",
  () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // console.log(Math.ceil(scrollTop + clientHeight), scrollHeight);
    if (
      isResponse &&
      Math.ceil(scrollTop + clientHeight) >= scrollHeight &&
      isGoPage(params._page)
    ) {
      isResponse = false;
      params._page++;
      showLoader();
      setTimeout(async () => {
        isResponse = await getUsers(params);
        removeLoader();
      }, 300);
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

isResponse = getUsers(params);
