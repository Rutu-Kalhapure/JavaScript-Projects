let expenses = [];

function addExpense() {
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;

  if (category && amount && date) {
    const expense = {
      category: category,
      amount: parseFloat(amount),
      date: date,
    };

    expenses.push(expense);
    renderExpenses();
  } else {
    alert("Please enter all fields.");
  }
}

function renderExpenses() {
  const expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = "";

  for (const index in expenses) {
    const expense = expenses[index];
    const expenseItem = document.createElement("li");
    expenseItem.textContent = `${expense.category} - Rs.${expense.amount} (Date: ${expense.date})`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "removebtn";
    removeButton.onclick = () => removeExpense(index);

    expenseItem.appendChild(removeButton);
    expenseList.appendChild(expenseItem);
  }
}

function removeExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}
