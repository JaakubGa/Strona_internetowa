var start1 = document.getElementById("start1");
var reset1 = document.getElementById("reset1");
var stop1 = document.getElementById("stop1");
var pokazCzas1 = document.getElementById("pokazCzas1");
var restartTimerCheckbox = document.getElementById("restartTimerCheckbox");
var czas5min = 5 * 60;
var intervalId1;
var audioTimer = document.getElementById("audioTimer");
var suwak = document.getElementById("suwak");

function odliczanieTimera1() {
  var godzina1 = Math.floor(czas5min / 3600);
  var minuta1 = Math.floor((czas5min - godzina1 * 3600) / 60);
  var sekunda1 = czas5min % 60;

  if (godzina1 < 1) {
    godzina1 = "0" + godzina1;
  }
  if (minuta1 < 10) {
    minuta1 = "0" + minuta1;
  }
  if (sekunda1 < 10) {
    sekunda1 = "0" + sekunda1;
  }

  pokazCzas1.textContent = godzina1 + ":" + minuta1 + ":" + sekunda1;

  if (czas5min <= 0) {
    if (restartTimerCheckbox.checked) {
      czas5min = 5 * 60;
    } else {
      clearInterval(intervalId1);
      pokazCzas1.textContent = "";
    }
  } else {
    if (czas5min === 30) {
      audioTimer.volume = suwak.value;
      audioTimer.play();
    }
    czas5min--;
  }
}

start1.addEventListener("click", function () {
  clearInterval(intervalId1);
  odliczanieTimera1();
  intervalId1 = setInterval(odliczanieTimera1, 1000);
});

reset1.addEventListener("click", function () {
  czas5min = 5 * 60;
});

stop1.addEventListener("click", function () {
  clearInterval(intervalId1);
});

suwak.addEventListener("input", function () {
  audioTimer.volume = suwak.value;
});
