var c = 0;
function pop() {
  if (c == 0) {
    document.getElementById("alert").style.display = "block";
    c = 1;
  } else {
    document.getElementById("alert").style.display = "none";
    c = 0;
  }
}
