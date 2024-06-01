document.getElementById("button1").addEventListener("click", function () {
  document.getElementById("content1").style.display = "block";
  document.getElementById("content2").style.display = "none";
  document.getElementById("content3").style.display = "none";
});

document.getElementById("button2").addEventListener("click", function () {
  document.getElementById("content2").style.display = "block";
  document.getElementById("content1").style.display = "none";
  document.getElementById("content3").style.display = "none";
});

document.getElementById("button3").addEventListener("click", function () {
  document.getElementById("content3").style.display = "block";
  document.getElementById("content2").style.display = "none";
  document.getElementById("content1").style.display = "none";
});
