var start2 = document.getElementById("start2");
var reset2 = document.getElementById("reset2");
var stop2 = document.getElementById("stop2");
var pokazCzas2 = document.getElementById("pokazCzas2");
var restartTimerCheckbox = document.getElementById("restartTimerCheckbox");
var czas15min = 15 * 60;
var intervalId2;
var audioTimer = document.getElementById("audioTimer");
var suwak = document.getElementById("suwak");

function odliczanieTimera2() {
  var godzina2 = Math.floor(czas15min / 3600);
  var minuta2 = Math.floor((czas15min - godzina2 * 3600) / 60);
  var sekunda2 = czas15min % 60;

  if (godzina2 < 1) {
    godzina2 = "0" + godzina2;
  }
  if (minuta2 < 10) {
    minuta2 = "0" + minuta2;
  }
  if (sekunda2 < 10) {
    sekunda2 = "0" + sekunda2;
  }

  pokazCzas2.textContent = godzina2 + ":" + minuta2 + ":" + sekunda2;

  if (czas15min <= 0) {
    if (restartTimerCheckbox.checked) {
      czas15min = 15 * 60;
    } else {
      clearInterval(intervalId2);
      pokazCzas2.textContent = "";
    }
  } else {
    if (czas15min === 40) {
      audioTimer.volume = suwak.value;
      audioTimer.play();
    }
    czas15min--;
  }
}

start2.addEventListener("click", function () {
  clearInterval(intervalId2);
  odliczanieTimera2();
  intervalId2 = setInterval(odliczanieTimera2, 1000);
});

reset2.addEventListener("click", function () {
  czas15min = 15 * 60;
});

stop2.addEventListener("click", function () {
  clearInterval(intervalId2);
});

suwak.addEventListener("input", function () {
  audioTimer.volume = suwak.value;
});
