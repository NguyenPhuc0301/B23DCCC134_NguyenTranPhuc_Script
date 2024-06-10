function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Vui lòng nhập nhiệm vụ.");
      return;
    }
  
    var taskList = document.getElementById("taskList");
    var taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.classList.add("task");
    taskList.appendChild(taskItem);
  
    taskInput.value = ""; // Clear input after adding task
  
    taskItem.addEventListener("click", function() {
      this.classList.toggle("completed");
    });
  }
  