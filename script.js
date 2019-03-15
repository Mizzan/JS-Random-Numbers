function randomNumber(num) {
  return Math.floor( Math.random() * num ) + 1;
}

var counter = 0;

while (counter < 10000) {
  var randnum = randomNumber(5);
  document.write(randnum + ' ');
  counter++;
}