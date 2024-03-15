  function changeTaskStatus(clickedIcon) {
    if(clickedIcon.classList.contains("fa-regular")) {
      clickedIcon.classList.replace("fa-regular", "fa-solid");
    } else {
      clickedIcon.classList.replace("fa-solid", "fa-regular");
    }
  }
