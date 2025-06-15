$(document).ready(function () {
  let isRunning = false;
  let seconds = 0, minutes = 0, hours = 0;
  let timer;
  $("#setBtn").click(function () {
          seconds = parseInt($("#secondInput").val()) || 0;
           minutes = parseInt($("#minuteInput").val()) || 0;
           hours = parseInt($("#hourInput").val()) || 0;

          if (isNaN(seconds) || isNaN(minutes) || isNaN(hours)) {
            alert("Please enter valid numbers.");
            return;
          }

          $("#seccond").text(String(seconds).padStart(2, '0'));
          $("#minute").text(String(minutes).padStart(2, '0'));
          $("#hour").text(String(hours).padStart(2, '0'));
        });
  $("#startBtn").click(function () {
      if(isRunning) return;
      isRunning = true;
      clearInterval(timer);

      timer = setInterval(function () {
        $("#seccond").text(String(seconds).padStart(2, '0'));
        $("#minute").text(String(minutes).padStart(2, '0'));
        $("#hour").text(String(hours).padStart(2, '0'));

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0 && seconds === 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0 && minutes === 0 && seconds === 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          isRunning = false;
        }
      }, 1000);
    });
    
$("#resetBtn").click(function () {
    clearInterval(timer);
    isRunning = false;

    seconds = 0;
    minutes = 0;
    hours = 0;

    $("#seccond").text("00");
    $("#minute").text("00:");
    $("#hour").text("00:");
  });

});