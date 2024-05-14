var totalContent = [
  [
    `./image/img2.jpg`,
    `Tiêu đề bài viết 1`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, illum.Optio soluta ut cupiditate error itaque ullam explicabo? Nihil vel hic nesciunt repudiandae sit quis enim quas non soluta architecto.`,
  ],
  [
    `./image/img2.jpg`,
    `Tiêu đề bài viết 2`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, illum.Optio soluta ut cupiditate error itaque ullam explicabo? Nihil vel hic nesciunt repudiandae sit quis enim quas non soluta architecto.`,
  ],
  [
    `./image/img2.jpg`,
    `Tiêu đề bài viết 3`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, illum.Optio soluta ut cupiditate error itaque ullam explicabo? Nihil vel hic nesciunt repudiandae sit quis enim quas non soluta architecto.`,
  ],
];

const container = document.querySelector(".container");

function addContent(imgSrc, titleSrc, contentSrc) {
  const image = document.createElement("img");
  image.src = imgSrc;
  image.alt = "error";
  const h2 = document.createElement("h2");
  h2.textContent = titleSrc;
  const p = document.createElement("p");
  p.textContent = contentSrc;
  const content = document.createElement("div");
  content.className = "content";
  content.append(h2, p);
  const wrapperContent = document.createElement("div");
  wrapperContent.className = "wrapper-content";
  wrapperContent.append(image, content);
  container.append(wrapperContent);
}

totalContent.forEach((value) => {
  addContent(value[0], value[1], value[2]);
});
