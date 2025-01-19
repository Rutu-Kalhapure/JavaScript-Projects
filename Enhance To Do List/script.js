let tasks = [];

function addTask() {
  const title = document.getElementById("taskTitle").value;
  const dueDate = document.getElementById("dueDate").value;

  if (title && dueDate) {
    const task = {
      title: title,
      completed: false,
      dueDate: dueDate,
    };

    tasks.push(task);
    renderTasks();
  } else {
    alert("Please enter both a task title and due date.");
  }
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  for (const index in tasks) {
    const task = tasks[index];
    const taskItem = document.createElement("li");
    taskItem.className = task.completed ? "completed" : "";

    const taskTitle = document.createElement("span");
    taskTitle.textContent = `${task.title} (Due: ${task.dueDate})`;

    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed ? "Undo" : "Complete";
    completeButton.onclick = () => toggleTaskCompleted(index);

    taskItem.appendChild(taskTitle);
    taskItem.appendChild(completeButton);

    taskList.appendChild(taskItem);
  }
}

function toggleTaskCompleted(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}
