var waitingTime = 3000,
  waitingInterval = 50,
  currentTime = 0,
  waitingPercent = 0;

function WriteWaitingPercent(p) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function() {
  currentTime += waitingInterval;
  waitingPercent = Math.floor(currentTime / waitingTime * 100);
  WriteWaitingPercent(waitingPercent);
  // console.log(`Waiting ${currentTime / 1000} seconds...`);
}, waitingInterval);

//ES6 -> Arrow function
setTimeout(() => {
  WriteWaitingPercent(100);
  clearInterval(interval);
  console.log("\nDone");
}, waitingTime);

WriteWaitingPercent(waitingPercent);
