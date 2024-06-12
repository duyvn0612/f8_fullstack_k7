var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

var speakerBtn = document.querySelector("button");
var notification = document.querySelector(".notification");
var result = document.querySelector(".result");
var utilities = {
  "google maps": "https://www.google.com/maps",
  "bản đồ": "https://www.google.com/maps",
  maps: "https://www.google.com/maps",
  "google drive": "https://drive.google.com/drive/home",
  google: "https://www.google.com/",
  youtube: "https://www.youtube.com/",
  facebook: "https://www.facebook.com/",
  "chỉ đường tới": "https://www.google.com/maps/search/",
  "chỉ đường": "https://www.google.com/maps/search/",
  "đường tới": "https://www.google.com/maps/search/",
  tới: "https://www.google.com/maps/search/",
  "mở bài hát": "https://zingmp3.vn/tim-kiem/tat-ca?q=",
  "nghe bài hát": "https://zingmp3.vn/tim-kiem/tat-ca?q=",
  "bài hát": "https://zingmp3.vn/tim-kiem/tat-ca?q=",
  "mở video": "https://www.youtube.com/results?search_query=",
  "xem video": "https://www.youtube.com/results?search_query=",
  video: "https://www.youtube.com/results?search_query=",
};

console.log(Object.keys(utilities));
function handlerSpeakers() {
  var recognition = new SpeechRecognition();
  recognition.lang = "vi-VN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.start();
  result.classList.remove("action");
  notification.classList.remove("action-green");
  notification.classList.add("action-red");
  notification.textContent = "Hãy nói nội dung bạn muốn";
  //fnc onresult()
  var queryStr = "";
  var checkResult;
  recognition.onresult = function (e) {
    var speechResult = e.results[0][0].transcript.toLowerCase();
    result.classList.add("action");
    result.textContent = `Đang thực hiện: ${speechResult}`;

    for (var key of Object.keys(utilities)) {
      checkResult = String(speechResult).indexOf(key);
      if (checkResult !== -1) {
        // console.log(checkResult);
        queryStr = String(speechResult).slice(checkResult + key.length);
        console.log(queryStr);
        setTimeout(function () {
          result.textContent = `Đã thực hiện xong.`;
          window.open(`${utilities[key]}${queryStr}`, "_blank");
        }, 1200);
        break;
      }
    }
    if (checkResult === -1) {
      setTimeout(function () {
        result.textContent = `Không thực hiện được yêu cầu`;
      }, 500);
    }
    // console.log(speechResult);
  };
  recognition.onspeechend = function () {
    notification.classList.replace("action-red", "action-green");
    notification.textContent = "Đã nói xong. Hy vọng kết quả như ý bạn";
    recognition.stop();
  };
}

speakerBtn.addEventListener("click", handlerSpeakers);
