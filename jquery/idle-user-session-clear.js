//Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute
    let idleTime = 0;

    //Zero the idle timer on mouse movement.
    $(window).mousemove(function(e) {
      idleTime = 0;
    });
    $(window).keypress(function(e) {
      idleTime = 0;
    });

    function timerIncrement() {
      idleTime = idleTime + 1;
      if (idleTime > 19) {
        // 20 minutes
        sessionStorage.removeItem("nycdot");
        window.location.reload();
      }
    }
