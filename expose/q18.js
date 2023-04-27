function printSeconds() {
  let start = 0;
  let max = 60;

  setTimeout(function go() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    if (start < max) {
      setTimeout(go, 1000);
    }
    start++;
  }, 1000);
}
printSeconds()
//Note: The Clock stops after a minute because otherwise it runs infinitely, directions didn't tell us whether to stop it or not.