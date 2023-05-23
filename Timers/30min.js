var start4 = document.getElementById("start4");
var reset4 = document.getElementById("reset4");
var stop4 = document.getElementById("stop4");
var pokazCzas4 = document.getElementById("pokazCzas4");
var restartTimerCheckbox = document.getElementById("restartTimerCheckbox");
var czas30min = 30 * 60;
var intervalId4;
var audioTimer = document.getElementById("audioTimer");
var suwak = document.getElementById("suwak");

function odliczanieTimera4() {
  var godzina4 = Math.floor(czas30min / 3600);
  var minuta4 = Math.floor((czas30min - godzina4 * 3600) / 60);
  var sekunda4 = czas30min % 60;

  if (godzina4 < 1) {
    godzina4 = "0" + godzina4;
  }
  if (minuta4 < 10) {
    minuta4 = "0" + minuta4;
  }
  if (sekunda4 < 10) {
    sekunda4 = "0" + sekunda4;
  }

  pokazCzas4.textContent = godzina4 + ":" + minuta4 + ":" + sekunda4;

  if (czas30min <= 0) {
    if (restartTimerCheckbox.checked) {
      czas30min = 30 * 60;
    } else {
      clearInterval(intervalId4);
      pokazCzas4.textContent = "";
    }
  } else {
    if (czas30min === 60) {
      audioTimer.volume = suwak.value;
      audioTimer.play();
    }
    czas30min--;
  }
}

start4.addEventListener("click", function () {
  clearInterval(intervalId4);
  odliczanieTimera4();
  intervalId4 = setInterval(odliczanieTimera4, 1000);
});

reset4.addEventListener("click", function () {
  czas30min = 30 * 60;
});

stop4.addEventListener("click", function () {
  clearInterval(intervalId4);
});

suwak.addEventListener("input", function () {
  audioTimer.volume = suwak.value;
});
