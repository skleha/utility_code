
function delayLoad() {
  setTimeout(showGraph, 3000);
}

function showGraph() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main-body").style.opacity = 1;
}
