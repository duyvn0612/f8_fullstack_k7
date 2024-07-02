var timeCountDown = document.querySelector(".counter-timer");
var btnGetLink = document.querySelector("#btn-get-link");
btnGetLink.disabled = true;
var timeValue = 30;
var isGetLink = false;
timeCountDown.innerText = `${--timeValue}`;
function customSetInterval(callback, interval) {
  let startTime = performance.now();
  let expectedTime = startTime + interval;
  let isRunning = true;

  function update(currentTime) {
    if (!isRunning) {
      return;
    }

    if (currentTime >= expectedTime) {
      callback();
      expectedTime += interval;
    }

    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);

  return {
    stop: function () {
      isRunning = false;
    },
    start: function () {
      if (!isRunning) {
        isRunning = true;
        expectedTime = performance.now() + interval;
        requestAnimationFrame(update);
      }
    },
  };
}

var timerDown = customSetInterval(() => {
  if (timeValue <= 0) {
    timerDown.stop();
    btnGetLink.disabled = false;
    isGetLink = true;
  } else {
    timeCountDown.innerText = `${--timeValue}`;
  }
}, 1000);
btnGetLink.addEventListener("click", () => {
  if (isGetLink) {
    window.location.href = "https://fullstack-nodejs.fullstack.edu.vn/";
  }
});

window.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    timerDown.stop();
  } else {
    timerDown.start();
  }
});
