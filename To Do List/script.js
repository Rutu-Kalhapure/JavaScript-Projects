// Wait for the entire document to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get references to HTML elements
  const taskInput = document.getElementById("taskInput"); // Input field for new tasks
  const addTaskButton = document.getElementById("taskBtn"); // Button to add new tasks
  const taskList = document.getElementById("taskList"); // Unordered list to display tasks

  // Add an event listener to the "Add Task" button
  addTaskButton.addEventListener("click", addTask);

  // Add an event listener to the task list to handle clicks on tasks and delete buttons
  taskList.addEventListener("click", (e) => {
    // Check if the clicked element is a button (delete button)
    if (e.target.tagName === "BUTTON") {
      deleteTask(e.target.parentElement); // Call deleteTask function and pass the parent list item
    } else if (e.target.tagName === "LI") {
      toggleTaskCompletion(e.target); // Call toggleTaskCompletion function for the clicked list item
    }
  });

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get the input text and remove any extra spaces
    if (taskText !== "") {
      // Check if the input text is not empty
      const listItem = document.createElement("li"); // Create a new list item element
      listItem.textContent = taskText; // Set the text of the list item to the input text

      const deleteButton = document.createElement("button"); // Create a new delete button element
      deleteButton.textContent = "Delete"; // Set the text of the delete button
      listItem.appendChild(deleteButton); // Add the delete button to the list item

      taskList.appendChild(listItem); // Add the new list item to the task list
      taskInput.value = ""; // Clear the input field
    }
  }

  // Function to delete a task
  function deleteTask(taskElement) {
    taskList.removeChild(taskElement); // Remove the specified task (list item) from the task list
  }

  // Function to toggle the completion status of a task
  function toggleTaskCompletion(taskElement) {
    taskElement.classList.toggle("completed"); // Toggle the "completed" class on the clicked list item
  }
});
