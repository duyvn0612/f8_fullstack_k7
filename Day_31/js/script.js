var progress = document.querySelector(".progress");
var progressBar = document.querySelector(".progress-bar");
var spanDrag = document.querySelector("#rewind");
var progressWidth = progress.clientWidth;
var positionSpanDragDown = 0;
var positionSpanDragUp = 0;
var positionLastSpanDrag = 0;
var offsetX = 0;
var rateAudio = 0;
var flagCheckTimeUpdate = true;
function handlerProgressDown(e) {
  if (flagCheckTimeUpdate) {
    positionSpanDragUp = (audio.currentTime / audio.duration) * progressWidth;
    flagCheckTimeUpdate = false;
  }
  offsetX = e.offsetX;
  positionLastSpanDrag = offsetX;
  positionSpanDragUp = offsetX;
  positionSpanDragDown = e.clientX;
  var rate = (offsetX / progressWidth) * 100;
  rateAudio = rate;
  // audio.currentTime = (rateAudio / 100) * audio.duration;
  progressBar.style.width = `${rate}%`;
  // console.log(`ratedown: ${rateAudio}`);
  // console.log("down");
  document.addEventListener("mousemove", handlerDrag);
}

function handlerDrag(e) {
  var clientXDrag = e.clientX;
  positionLastSpanDrag =
    clientXDrag - positionSpanDragDown + positionSpanDragUp;
  var rate = (positionLastSpanDrag / progressWidth) * 100;
  if (rate <= 0) {
    rate = 0;
  }
  if (rate >= 100) {
    rate = 100;
  }
  rateAudio = rate;
  // console.log(`rate: ${rate}`);
  currentTime.innerText = `${getTime((rateAudio / 100) * audio.duration)}`;
  progressBar.style.width = `${rate}%`;
}
function handlerMouseUp() {
  if (positionLastSpanDrag < 0) positionLastSpanDrag = 0;
  if (positionLastSpanDrag > progressWidth) {
    positionLastSpanDrag = progressWidth;
  }
  if (audio.currentTime === audio.duration) {
    rateAudio = 100;
    audio.currentTime = audio.duration;
    positionLastSpanDrag = progressWidth;
  }
  if (flagCheckTimeUpdate === false) {
    audio.currentTime = (rateAudio / 100) * audio.duration;
    flagCheckTimeUpdate = true;
    // console.log(`rateup: ${rateAudio}`);
    // console.log("up");
  }
  positionSpanDragUp = positionLastSpanDrag;
  // console.log(`positionSpanDragUp mouseup: ${positionSpanDragUp}`);
  document.removeEventListener("mousemove", handlerDrag);
}

function handlerProgressMove(e) {
  // console.log(e.target.className);
  if (
    e.target.className === "progress" ||
    e.target.className === "progress-bar"
  ) {
    var timeView = (e.offsetX / progressWidth) * audio.duration;
    // console.log(getTime(timeView));
    timerView.classList.add("action-timer-view");
    timerView.innerText = getTime(timeView);
    timerView.style.left = `${e.offsetX}px`;
  }
}

progress.addEventListener("mousedown", handlerProgressDown);
progress.addEventListener("mouseover", function () {
  progress.addEventListener("mousemove", handlerProgressMove);
});
progress.addEventListener("mouseout", function () {
  timerView.classList.remove("action-timer-view");
  progress.removeEventListener("mousemove", handlerProgressMove);
});

// spanDrag.addEventListener("mousemove", function (e) {
//   e.stopPropagation();
// });

spanDrag.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (flagCheckTimeUpdate) {
    positionSpanDragUp = (audio.currentTime / audio.duration) * progressWidth;
    flagCheckTimeUpdate = false;
  }
  positionSpanDragDown = e.clientX;
  document.addEventListener("mousemove", handlerDrag);
});
document.addEventListener("mouseup", handlerMouseUp);
// Edit Audio
var playerAudio = document.querySelector(".player-audio i");
var audio = document.querySelector("audio");
var currentTime = progress.previousElementSibling;
var totalTime = progress.nextElementSibling;
var timerView = progressBar.previousElementSibling;
// console.log(timerView);
function getTime(time) {
  var mins = Math.floor(time / 60);
  var secs = Math.floor(time - mins * 60);
  return `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
}
// 278.282449
window.addEventListener("load", function () {
  totalTime.innerText = getTime(audio.duration);

  // event ended hết nhạc
  audio.addEventListener("ended", function () {
    playerAudio.classList.replace("fa-pause", "fa-play");
    // console.log(audio.currentTime, audio.duration, flagCheckTimeUpdate);
  });
  // event play
  audio.addEventListener("play", function () {
    playerAudio.classList.replace("fa-play", "fa-pause");
  });
  // event pause
  audio.addEventListener("pause", function () {
    playerAudio.classList.replace("fa-pause", "fa-play");
  });
  // event timeupdate
  audio.addEventListener("timeupdate", function (e) {
    if (flagCheckTimeUpdate) {
      // console.log(getTime(audio.duration));
      currentTime.innerText = getTime(audio.currentTime);
      rateAudio = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${rateAudio}%`;
    }
  });
  // event playerAudio click
  playerAudio.addEventListener("click", handlerPlayerClick);
});

function handlerPlayerClick(e) {
  e.stopPropagation();
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
