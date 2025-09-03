let expenses = [];
let totalAmountValue = 0;

  const categorySelect = document.getElementById('myOptions');
  const amountInput = document.getElementById('amount');
  const dateInput = document.getElementById('date');
  const addBtn = document.getElementById('add-btn');
  const tableBody = document.getElementById('table-body');
  const totalAmountCell = document.getElementById('total-amount');

  addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;
      
      if (category === '') {
        alert('What caused the debit?');
        return;
      }
      if (isNaN(amount) || amount <= 0) {
        alert('Enter a valid number');
        return;
      }
      if (date === '') {
        alert('Please select a date');
        return;
      }

    const expense = { category, amount, date };
      expenses.push(expense);
      totalAmountValue += amount;
      totalAmountCell.textContent = totalAmountValue;

    const newRow = tableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

      categoryCell.textContent = category;
      amountCell.textContent = amount;
      dateCell.textContent = date;

    const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'X';
      deleteBtn.classList.add('delete-btn');

      deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);
        totalAmountValue -= expense.amount;
        totalAmountCell.textContent = totalAmountValue;
        tableBody.removeChild(newRow);
      });

      deleteCell.appendChild(deleteBtn);

      amountInput.value = '';
      dateInput.value = '';
      categorySelect.value = '';
  });
const themeToggle = document.getElementById("themeToggle");

    // Load saved theme on page load
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      let icon = themeToggle.querySelector("i");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }

    themeToggle.onclick = function() {
      let body = document.body;
      let icon = themeToggle.querySelector("i");

      if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      } else {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }
    };