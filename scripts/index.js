function changeTaskStatus() {
  var e = document.querySelector(".task-icon");
  if(e.classList.contains("fa-regular")) {
    e.classList.replace("fa-regular", "fa-solid");
  } else {
    e.classList.replace("fa-solid", "fa-regular");
  }
}
