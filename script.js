function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
