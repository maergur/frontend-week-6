// Add task function

function addTask() {
    var taskInput = document.getElementById("task");
    var taskValue = taskInput.value.trim();

    if (taskValue !== "") {
      var newListElement = document.createElement("li");
      newListElement.textContent = taskValue;
      newListElement.innerHTML += '<span class="close" onclick="removeTask(this)">X</span>';
      document.getElementById("list").appendChild(newListElement);
      taskInput.value = "";
      $('#successToast').removeClass('hide').toast('show');
    } else {
      $('#errorToast').removeClass('hide').toast('show');
    }
  }

  // Remove task function 
  
  function removeTask(element) {
    var listItem = element.parentNode;
    listItem.parentNode.removeChild(listItem);
  }