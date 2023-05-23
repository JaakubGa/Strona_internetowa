var start5 = document.getElementById("start5");
var reset5 = document.getElementById("reset5");
var stop5 = document.getElementById("stop5");
var pokazCzas5 = document.getElementById("pokazCzas5");
var restartTimerCheckbox = document.getElementById("restartTimerCheckbox");
var czas1h = 60 * 60;
var intervalId5;
var audioTimer = document.getElementById("audioTimer");
var suwak = document.getElementById("suwak");

function odliczanieTimera5() {
  var godzina5 = Math.floor(czas1h / 3600);
  var minuta5 = Math.floor((czas1h - godzina5 * 3600) / 60);
  var sekunda5 = czas1h % 60;

  if (godzina5 < 1) {
    godzina5 = "0" + godzina5;
  }
  if (minuta5 < 10) {
    minuta5 = "0" + minuta5;
  }
  if (sekunda5 < 10) {
    sekunda5 = "0" + sekunda5;
  }

  pokazCzas5.textContent = godzina5 + ":" + minuta5 + ":" + sekunda5;

  if (czas1h <= 0) {
    if (restartTimerCheckbox.checked) {
      czas1h = 60 * 60;
    } else {
      clearInterval(intervalId5);
      pokazCzas5.textContent = "";
    }
  } else {
    if (czas1h === 120) {
      audioTimer.volume = suwak.value;
      audioTimer.play();
    }
    czas1h--;
  }
}

start5.addEventListener("click", function () {
  clearInterval(intervalId5);
  odliczanieTimera5();
  intervalId5 = setInterval(odliczanieTimera5, 1000);
});

reset5.addEventListener("click", function () {
  czas1h = 60 * 60;
});

stop5.addEventListener("click", function () {
  clearInterval(intervalId5);
});

suwak.addEventListener("input", function () {
  audioTimer.volume = suwak.value;
});
