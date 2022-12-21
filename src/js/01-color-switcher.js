const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
stop.disabled = true;
let timerId = null;



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

start.addEventListener('click', clickStart)
function clickStart() {
    start.disabled = true;
    stop.disabled = false;

    timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
    
}


stop.addEventListener('click', clickStop)
function clickStop() {
    clearInterval(timerId);
    start.disabled = false;
    stop.disabled = true;
    
}