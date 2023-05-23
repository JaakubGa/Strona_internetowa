var start6 = document.getElementById("start6");
var reset6 = document.getElementById("reset6");
var stop6 = document.getElementById("stop6");
var pokazCzas6 = document.getElementById("pokazCzas6");
var restartTimerCheckbox = document.getElementById("restartTimerCheckbox");
var czas4h = 240 * 60;
var intervalId6;
var audioTimer = document.getElementById("audioTimer");
var suwak = document.getElementById("suwak");

function odliczanieTimera6() {
  var godzina6 = Math.floor(czas4h / 3600);
  var minuta6 = Math.floor((czas4h - godzina6 * 3600) / 60);
  var sekunda6 = czas4h % 60;

  if (godzina6 < 1) {
    godzina6 = "0" + godzina6;
  }
  if (minuta6 < 10) {
    minuta6 = "0" + minuta6;
  }
  if (sekunda6 < 10) {
    sekunda6 = "0" + sekunda6;
  }

  pokazCzas6.textContent = godzina6 + ":" + minuta6 + ":" + sekunda6;

  if (czas4h <= 0) {
    if (restartTimerCheckbox.checked) {
      czas4h = 240 * 60;
    } else {
      clearInterval(intervalId6);
      pokazCzas6.textContent = "";
    }
  } else {
    if (czas4h === 180) {
      audioTimer.volume = suwak.value;
      audioTimer.play();
    }
    czas4h--;
  }
}

start6.addEventListener("click", function () {
  clearInterval(intervalId6);
  odliczanieTimera6();
  intervalId6 = setInterval(odliczanieTimera6, 1000);
});

reset6.addEventListener("click", function () {
  czas4h = 240 * 60;
});

stop6.addEventListener("click", function () {
  clearInterval(intervalId6);
});

suwak.addEventListener("input", function () {
  audioTimer.volume = suwak.value;
});
