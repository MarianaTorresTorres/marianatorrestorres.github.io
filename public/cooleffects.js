let speed = 75;
let blinkCursor = true;

//This function creates the blinking cursor
setInterval(() => {
    if (blinkCursor) {
      document.getElementById("cursor").style.opacity = 0;
      blinkCursor = false;
    } else {
      document.getElementById("cursor").style.opacity = 1;
      blinkCursor = true;
    }
  }, speed * 5);