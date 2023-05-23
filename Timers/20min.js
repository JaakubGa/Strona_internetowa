var start3 = document.getElementById("start3");
var reset3 = document.getElementById("reset3");
var stop3 = document.getElementById("stop3");
var pokazCzas3 = document.getElementById("pokazCzas3");
var restartTimerCheckbox = document.getElementById("restartTimerCheckbox");
var czas20min = 20 * 60;
var intervalId3;
var audioTimer = document.getElementById("audioTimer");
var suwak = document.getElementById("suwak");

function odliczanieTimera3() {
  var godzina3 = Math.floor(czas20min / 3600);
  var minuta3 = Math.floor((czas20min - godzina3 * 3600) / 60);
  var sekunda3 = czas20min % 60;

  if (godzina3 < 1) {
    godzina3 = "0" + godzina3;
  }
  if (minuta3 < 10) {
    minuta3 = "0" + minuta3;
  }
  if (sekunda3 < 10) {
    sekunda3 = "0" + sekunda3;
  }

  pokazCzas3.textContent = godzina3 + ":" + minuta3 + ":" + sekunda3;

  if (czas20min <= 0) {
    if (restartTimerCheckbox.checked) {
      czas20min = 20 * 60;
    } else {
      clearInterval(intervalId3);
      pokazCzas3.textContent = "";
    }
  } else {
    if (czas20min === 50) {
      audioTimer.volume = suwak.value;
      audioTimer.play();
    }
    czas20min--;
  }
}

start3.addEventListener("click", function () {
  clearInterval(intervalId3);
  odliczanieTimera3();
  intervalId3 = setInterval(odliczanieTimera3, 1000);
});

reset3.addEventListener("click", function () {
  czas20min = 20 * 60;
});

stop3.addEventListener("click", function () {
  clearInterval(intervalId3);
});

suwak.addEventListener("input", function () {
  audioTimer.volume = suwak.value;
});
