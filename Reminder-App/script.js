document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const timeInput = document.getElementById("timeInput");
    const taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const task = taskInput.value;
        const time = parseInt(timeInput.value);

        addTask(task, time);

        taskInput.value = "";
        timeInput.value = "";
    });

    function addTask(task, time) {
        const li = document.createElement("li");
        li.textContent = `Task: ${task} (Reminder in ${time} seconds)`;

        const timer = setTimeout(() => {
            alert(`Reminder: ${task}`);
            taskList.removeChild(li);
        }, time * 1000);

        // Use closure to manage the timer
        function removeTask() {
            clearTimeout(timer);
            taskList.removeChild(li);
        }

        li.addEventListener("click", removeTask);

        taskList.appendChild(li);
    }
});
