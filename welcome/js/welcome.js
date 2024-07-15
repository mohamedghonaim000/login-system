let welcomeMsg = document.querySelector("#welcomeMsg");

window.addEventListener("load", function () {
  displayUserName();
});

function displayUserName() {
  if (localStorage.getItem("name") !== null) {
    welcomeMsg.innerHTML = `welcome ${localStorage.getItem("name")}`;
  } else {
    welcomeMsg.innerHTML = "";
  }
}
