let i = 1;
function increment() {
  showCount(i);
  i++;
}
// function save(){

// }
function clearValue() {
  i = 0;
  showCount(i);
}
function showCount(i) {
  document.getElementById("incrementResult").innerHTML = i;
}
